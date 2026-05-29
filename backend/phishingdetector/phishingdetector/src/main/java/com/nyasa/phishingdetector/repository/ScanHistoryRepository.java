package com.nyasa.phishingdetector.repository;

import com.nyasa.phishingdetector.model.ScanHistory;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ScanHistoryRepository extends JpaRepository<ScanHistory, Long> {
    List<ScanHistory> findByUserEmailOrderByIdDesc(String userEmail);
}