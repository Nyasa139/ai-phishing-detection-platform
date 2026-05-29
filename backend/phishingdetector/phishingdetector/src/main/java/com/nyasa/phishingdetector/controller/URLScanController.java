package com.nyasa.phishingdetector.controller;

import com.nyasa.phishingdetector.dto.URLScanRequest;
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
public class URLScanController {
@Autowired
private ScanHistoryRepository scanHistoryRepository;
    @PostMapping("/url")
    public Map<String, Object> scanURL(@RequestBody URLScanRequest request) {
        String url = request.getUrl();
        int riskScore = 0;

        if (!url.startsWith("https")) {
            riskScore += 30;
        }

        if (url.contains("login") || url.contains("verify") || url.contains("bank") || url.contains("secure")) {
            riskScore += 40;
        }

        String status = riskScore >= 70 ? "HIGH RISK" : riskScore >= 40 ? "SUSPICIOUS" : "SAFE";

        Map<String, Object> response = new HashMap<>();
        response.put("url", url);
        response.put("riskScore", riskScore);
        response.put("status", status);
ScanHistory history = new ScanHistory();

history.setContent(url);
history.setScanType("URL");
history.setRiskLevel(status);
history.setRiskScore(riskScore);
history.setCreatedAt(LocalDateTime.now());
history.setUserEmail(request.getUserEmail());

scanHistoryRepository.save(history);
        return response;
    }
    
}