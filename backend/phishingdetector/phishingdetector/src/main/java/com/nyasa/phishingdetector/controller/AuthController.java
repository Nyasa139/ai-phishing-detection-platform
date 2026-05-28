package com.nyasa.phishingdetector.controller;

import com.nyasa.phishingdetector.dto.RegisterRequest;
import com.nyasa.phishingdetector.model.User;
import com.nyasa.phishingdetector.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.nyasa.phishingdetector.dto.LoginRequest;
@RestController
@RequestMapping("/api/auth")
@CrossOrigin("*")
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/register")
    public String register(@RequestBody RegisterRequest request) {

        User existingUser = userRepository.findByEmail(request.getEmail());

        if (existingUser != null) {
            return "Email already exists";
        }

        User user = new User();

        user.setName(request.getName());
        user.setEmail(request.getEmail());
        user.setPassword(request.getPassword());
        user.setRole("USER");

        userRepository.save(user);

        return "User Registered Successfully";
    }
    @PostMapping("/login")
public String login(@RequestBody LoginRequest request) {

    User user = userRepository.findByEmail(request.getEmail());

    if (user == null) {
        return "Invalid email";
    }

    if (!user.getPassword().equals(request.getPassword())) {
        return "Invalid password";
    }

    return "Login Successful";
}
}