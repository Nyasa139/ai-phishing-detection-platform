package com.nyasa.phishingdetector.repository;

import com.nyasa.phishingdetector.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

    User findByEmail(String email);
}