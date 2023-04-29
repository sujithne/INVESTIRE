package com.datamanipulation.fund_raising;

import jakarta.persistence.*;
import jakarta.validation.constraints.Pattern;

//import javax.validation.constraints.Pattern;
import java.sql.Date;
import java.util.Dictionary;
import java.util.List;

@Entity
@Table(name = "startup")
public class StartupModel {
    @Id
    @Column(name = "Email", nullable = false)
    @Pattern(regexp = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.+-]+\\.com$", message = "Invalid Email")
    String email;

    @Column(name = "StartupName", nullable = false)
    String startUpName;
    @Column(name = "YOE")
    Date year;

    @Column(name = "Vision")
    String vision;

    @Column(name = "Address line 1")
    String address1;

    @Column(name = "Address line 2")
    String address2;

    @Column(name = "City")
    String city;

    @Column(name = "State")
    String state;

    @Column(name = "Country")
    String country;

    @Column(name= "AreaCode")
    Integer areaCode;

    @Column(name = "Description")
    String description;

    @Column(name = "Category")
    String category;

    @Column(name = "ProductDescription")
    String productDescription;

    @Column(name = "Founders")
    String aboutFounders;

    @Column(name = "Revenue")
    Double revenue;

    @Column(name = "Valuation")
    Double totalValuation;

    @Column(name = "Offering")
    Double percentOffer;

    @Column(name = "BitValue")
    Double costPerBit;

    @Column(name = "Thumbnail")
    String thumbnail;

    @Column(name = "YouTubeLink")
    String video;

    @Column(name = "BankName")
    String bank;

    @Column(name = "AccountNo")
    String bankAccount;

    @Column(name = "Password")
    String password;
    String priorInvestment;
    Double totalBits;
    String anyCashBurn;
    Double cashBurn;
    Double netProfit;
    Double grossProfit;
    Double equityWithFounders;
    String time;
    String m1,m2,m3;
    Double r1,r2,r3;


    public void setEmail(String email) {
        this.email = email;
    }

    public String getStartUpName() {
        return startUpName;
    }

    public void setStartUpName(String startUpName) {
        this.startUpName = startUpName;
    }

    public Date getYear() {
        return year;
    }

    public void setYear(Date year) {
        this.year = year;
    }

    public String getVision() {
        return vision;
    }

    public void setVision(String vision) {
        this.vision = vision;
    }

    public String getAddress1() {
        return address1;
    }

    public void setAddress1(String address1) {
        this.address1 = address1;
    }

    public String getAddress2() {
        return address2;
    }

    public void setAddress2(String address2) {
        this.address2 = address2;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public Integer getAreaCode() {
        return areaCode;
    }

    public void setAreaCode(Integer areaCode) {
        this.areaCode = areaCode;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getProductDescription() {
        return productDescription;
    }

    public void setProductDescription(String productDescription) {
        this.productDescription = productDescription;
    }

    public String getAboutFounders() {
        return aboutFounders;
    }

    public void setAboutFounders(String aboutFounders) {
        this.aboutFounders = aboutFounders;
    }

    public Double getRevenue() {
        return revenue;
    }

    public void setRevenue(Double revenue) {
        this.revenue = revenue;
    }

    public Double getTotalValuation() {
        return totalValuation;
    }

    public void setTotalValuation(Double totalValuation) {
        this.totalValuation = totalValuation;
    }

    public Double getPercentOffer() {
        return percentOffer;
    }

    public void setPercentOffer(Double percentOffer) {
        this.percentOffer = percentOffer;
    }

    public Double getCostPerBit() {
        return costPerBit;
    }

    public void setCostPerBit(Double costPerBit) {
        this.costPerBit = costPerBit;
    }

    public String getThumbnail() {
        return thumbnail;
    }

    public void setThumbnail(String thumbnail) {
        this.thumbnail = thumbnail;
    }

    public String getVideo() {
        return video;
    }

    public void setVideo(String video) {
        this.video = video;
    }

    public String getBank() {
        return bank;
    }

    public void setBank(String bank) {
        this.bank = bank;
    }

    public String getBankAccount() {
        return bankAccount;
    }

    public void setBankAccount(String bankAccount) {
        this.bankAccount = bankAccount;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getPriorInvestment() {
        return priorInvestment;
    }

    public void setPriorInvestment(String priorInvestment) {
        this.priorInvestment = priorInvestment;
    }

    public Double getTotalBits() {
        return totalBits;
    }

    public void setTotalBits(Double totalBits) {
        this.totalBits = totalBits;
    }

    public String getAnyCashBurn() {
        return anyCashBurn;
    }

    public void setAnyCashBurn(String anyCashBurn) {
        this.anyCashBurn = anyCashBurn;
    }

    public Double getCashBurn() {
        return cashBurn;
    }

    public void setCashBurn(Double cashBurn) {
        this.cashBurn = cashBurn;
    }

    public Double getNetProfit() {
        return netProfit;
    }

    public void setNetProfit(Double netProfit) {
        this.netProfit = netProfit;
    }

    public Double getGrossProfit() {
        return grossProfit;
    }

    public void setGrossProfit(Double grossProfit) {
        this.grossProfit = grossProfit;
    }

    public Double getEquityWithFounders() {
        return equityWithFounders;
    }

    public void setEquityWithFounders(Double equityWithFounders) {
        this.equityWithFounders = equityWithFounders;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public String getM1() {
        return m1;
    }

    public void setM1(String m1) {
        this.m1 = m1;
    }

    public String getM2() {
        return m2;
    }

    public void setM2(String m2) {
        this.m2 = m2;
    }

    public String getM3() {
        return m3;
    }

    public void setM3(String m3) {
        this.m3 = m3;
    }

    public Double getR1() {
        return r1;
    }

    public void setR1(Double r1) {
        this.r1 = r1;
    }

    public Double getR2() {
        return r2;
    }

    public void setR2(Double r2) {
        this.r2 = r2;
    }

    public Double getR3() {
        return r3;
    }

    public void setR3(Double r3) {
        this.r3 = r3;
    }
}
