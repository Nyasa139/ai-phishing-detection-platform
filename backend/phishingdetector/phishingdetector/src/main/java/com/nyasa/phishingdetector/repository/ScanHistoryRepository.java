package com.nyasa.phishingdetector.repository;

import com.nyasa.phishingdetector.model.ScanHistory;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ScanHistoryRepository extends JpaRepository<ScanHistory, Long> {
}