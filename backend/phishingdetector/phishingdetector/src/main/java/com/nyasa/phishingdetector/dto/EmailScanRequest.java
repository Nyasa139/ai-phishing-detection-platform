package com.nyasa.phishingdetector.dto;

public class EmailScanRequest {
    private String content;
    private String userEmail;

    public EmailScanRequest() {}

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getUserEmail() {
        return userEmail;
    }

    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
    }
}