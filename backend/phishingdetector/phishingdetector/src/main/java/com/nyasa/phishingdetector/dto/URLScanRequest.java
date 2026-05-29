package com.nyasa.phishingdetector.dto;

public class URLScanRequest {
    private String url;
    private String userEmail;

    public URLScanRequest() {}

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getUserEmail() {
        return userEmail;
    }

    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
    }
}