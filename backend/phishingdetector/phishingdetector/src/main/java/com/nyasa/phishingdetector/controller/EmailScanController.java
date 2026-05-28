package com.nyasa.phishingdetector.controller;

import com.nyasa.phishingdetector.dto.EmailScanRequest;
import org.springframework.web.bind.annotation.*;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/scan")
@CrossOrigin("*")
public class EmailScanController {

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

        return response;
    }
}