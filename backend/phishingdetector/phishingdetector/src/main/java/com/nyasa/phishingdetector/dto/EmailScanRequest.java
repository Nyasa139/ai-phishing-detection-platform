package com.nyasa.phishingdetector.dto;

public class EmailScanRequest {
    private String content;

    public EmailScanRequest() {}

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }
}