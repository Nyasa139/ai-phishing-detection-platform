package com.nyasa.phishingdetector.controller;

import com.nyasa.phishingdetector.dto.EmailScanRequest;
import org.springframework.web.bind.annotation.*;
import java.util.HashMap;
import java.util.Map;

import com.nyasa.phishingdetector.model.ScanHistory;
import com.nyasa.phishingdetector.repository.ScanHistoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import java.time.LocalDateTime;

@RestController
@RequestMapping("/api/scan")
@CrossOrigin("*")
public class EmailScanController {

    @Autowired
    private ScanHistoryRepository scanHistoryRepository;

    @PostMapping("/email")
    public Map<String, Object> scanEmail(@RequestBody EmailScanRequest request) {
        String content = request.getContent().toLowerCase();
        int riskScore = 0;

        if (content.contains("urgent")) riskScore += 20;
        if (content.contains("verify")) riskScore += 20;
        if (content.contains("password")) riskScore += 20;
        if (content.contains("bank")) riskScore += 20;
        if (content.contains("click here")) riskScore += 20;

        String status = riskScore >= 70 ? "HIGH RISK" : riskScore >= 40 ? "SUSPICIOUS" : "SAFE";

        Map<String, Object> response = new HashMap<>();
        response.put("riskScore", riskScore);
        response.put("status", status);
        response.put("message", "Email analysis completed");

        ScanHistory history = new ScanHistory();
        history.setContent(request.getContent()); // Save original content, not lowercased
        history.setScanType("Email");
        history.setRiskLevel(status);
        history.setRiskScore(riskScore);
        history.setCreatedAt(LocalDateTime.now());
        history.setUserEmail(request.getUserEmail());

        scanHistoryRepository.save(history);

        return response;
    }
}