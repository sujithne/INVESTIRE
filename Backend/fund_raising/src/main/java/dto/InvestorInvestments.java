package dto;

import java.sql.Time;
import java.sql.Date;

public class InvestorInvestments {
    private String investedCompany;
    private String investor;
    private Double investment;
    private int bits;
    private Date date;
    private Time time;
    private String startUpEmail;
    private String investorEmail;

    public String getInvestorEmail() {
        return investorEmail;
    }

    public void setInvestorEmail(String investorEmail) {
        this.investorEmail = investorEmail;
    }

    public String getInvestor() {
        return investor;
    }

    public void setInvestor(String investor) {
        this.investor = investor;
    }

    public String getStartUpEmail() {
        return startUpEmail;
    }

    public void setStartUpEmail(String startUpEmail) {
        this.startUpEmail = startUpEmail;
    }

    public String getInvestedCompany() {
        return investedCompany;
    }

    public void setInvestedCompany(String investedCompany) {
        this.investedCompany = investedCompany;
    }

    public Double getInvestment() {
        return investment;
    }

    public void setInvestment(Double investment) {
        this.investment = investment;
    }

    public int getBits() {
        return bits;
    }

    public void setBits(int bits) {
        this.bits = bits;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Time getTime() {
        return time;
    }

    public void setTime(Time time) {
        this.time = time;
    }
}
