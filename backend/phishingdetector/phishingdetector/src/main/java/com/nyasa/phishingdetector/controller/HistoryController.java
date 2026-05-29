package com.nyasa.phishingdetector.controller;

import com.nyasa.phishingdetector.model.ScanHistory;
import com.nyasa.phishingdetector.repository.ScanHistoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/history")
@CrossOrigin("*")
public class HistoryController {

    @Autowired
    private ScanHistoryRepository scanHistoryRepository;

    @GetMapping
    public List<ScanHistory> getHistory(@RequestParam String userEmail) {
        return scanHistoryRepository.findByUserEmailOrderByIdDesc(userEmail);
    }
}