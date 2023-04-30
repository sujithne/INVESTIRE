package com.datamanipulation.fund_raising;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.List;
import java.util.Map;

@Repository
public interface fetchdataInvestments extends JpaRepository<StartupModel,String> {


    @Transactional
    @Modifying
    @Query(value="SELECT * FROM `investments` JOIN `startup` where investments.startupEmail=startup.Email and investorEmail=?", nativeQuery=true)
    List<Map<String,Object>> fetchInvestorInvestments(String email);

    @Transactional
    @Modifying
    @Query(value="SELECT StartupName,`investorEmail`, `startupEmail`, sum( `amount`) as amount, sum(`bits`) as bits FROM `investments` JOIN `startup` where investments.startupEmail=startup.Email and investorEmail=? GROUP BY startupEmail", nativeQuery=true)
    List<Map<String,Object>> fetchCInvestorInvestments(String email);

    @Transactional
    @Modifying
    @Query(value="SELECT * FROM `investments` join investors WHERE investments.investorEmail=investors.Email and startupEmail=? ORDER by amount desc LIMIT 10", nativeQuery=true)
    List<Map<String,Object>> fetchTop10Investments(String email);

    @Transactional
    @Modifying
    @Query(value="SELECT * FROM `investments` join investors WHERE investments.investorEmail=investors.Email and startupEmail=? ORDER by investments.date desc,investments.timeOfInvestment desc", nativeQuery=true)
    List<Map<String,Object>> fetchRecentInvestments(String email);

    @Transactional
    @Modifying
    @Query(value="INSERT INTO `investments`(`investorEmail`, `startupEmail`, `bits`, `amount`) VALUES (?,?,?,?)", nativeQuery=true)
    void addInvestment(String iemail,String semail, int bits,Double amount);

    @Transactional
    @Modifying
    @Query(value="select sum(amount) as totalFund from investments where startupEmail=?", nativeQuery=true)
    List<Map<String,Object>> totalFund(String Email);

    @Transactional
    @Modifying
    @Query(value="SELECT SUM(amount) as totalAmount, DATEDIFF(MAX(date), MIN(date)) as dateDifference\n" +
            "FROM investments\n" +
            "WHERE startupEmail = ?", nativeQuery=true)
    List<Map<String,Object>> fetchSuccessList(String email);

}
