package com.example.springular;

import javax.persistence.*;

@Entity
@Table(name = "campaign")
public class Campaign {
    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column
    private String campaignName;
    @Column
    private String keywords;
    @Column
    private Float bidAmount;
    @Column
    private Float campaignFund;
    @Column
    private Boolean status;
    @Column
    private String town;
    @Column
    private Float radius;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getCampaignName() {
        return campaignName;
    }

    public void setCampaignName(String campaignName) {
        this.campaignName = campaignName;
    }

    public String getKeywords() {
        return keywords;
    }

    public void setKeywords(String keywords) {
        this.keywords = keywords;
    }

    public Float getBidAmount() {
        return bidAmount;
    }

    public void setBidAmount(Float bidAmount) {
        this.bidAmount = bidAmount;
    }

    public Float getCampaignFund() {
        return campaignFund;
    }

    public void setCampaignFund(Float campaignFund) {
        this.campaignFund = campaignFund;
    }

    public Boolean getStatus() {
        return status;
    }

    public void setStatus(Boolean status) {
        this.status = status;
    }

    public String getTown() {
        return town;
    }

    public void setTown(String town) {
        this.town = town;
    }

    public Float getRadius() {
        return radius;
    }

    public void setRadius(Float radius) {
        this.radius = radius;
    }
}
