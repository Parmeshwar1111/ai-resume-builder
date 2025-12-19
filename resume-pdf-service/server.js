const express = require("express");
const puppeteer = require("puppeteer");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/generate-pdf", async (req, res) => {
  const { url } = req.query;

  if (!url) {
    return res.status(400).send("URL is required");
  }

  let browser;

  try {
    console.log("🌐 Opening URL:", url);

    browser = await puppeteer.launch({
      headless: "new",
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });

    const page = await browser.newPage();

    // Desktop layout
    await page.setViewport({
      width: 1200,
      height: 1600,
    });

    // Debug logs from React
    page.on("console", (msg) =>
      console.log("📄 PAGE LOG:", msg.text())
    );

    page.on("pageerror", (err) =>
      console.error("❌ PAGE ERROR:", err.message)
    );

    // Load resume page
    await page.goto(url, { waitUntil: "domcontentloaded" });

    // Wait until React signals resume is ready
    await page.waitForFunction(
      () => document.body.getAttribute("data-resume-ready") === "true",
      { timeout: 30000 }
    );

    console.log("✅ Resume ready, generating PDF");

    const pdfBuffer = await page.pdf({
      format: "A4",
      printBackground: true,
      margin: {
        top: "15mm",
        bottom: "15mm",
        left: "15mm",
        right: "15mm",
      },
    });

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader(
      "Content-Disposition",
      "attachment; filename=resume.pdf"
    );

    res.end(pdfBuffer);
  } catch (error) {
    console.error("❌ PDF generation failed:", error.message);
    res.status(500).send("PDF generation failed");
  } finally {
    if (browser) {
      await browser.close();
    }
  }
});

app.listen(5001, () => {
  console.log("✅ Puppeteer PDF service running on port 5001");
});
