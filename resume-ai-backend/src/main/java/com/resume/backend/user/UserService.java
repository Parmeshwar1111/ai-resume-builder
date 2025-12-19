package com.resume.backend.user;

public interface UserService {
    User register(User user);
    User login(String email, String password);
}
