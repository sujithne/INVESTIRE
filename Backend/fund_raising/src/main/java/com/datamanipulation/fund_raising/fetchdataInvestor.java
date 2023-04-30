package com.datamanipulation.fund_raising;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Repository
public interface fetchdataInvestor extends JpaRepository<InvestorModel,String>{
    @Override
    void delete(InvestorModel entity);

    @Override
    List<InvestorModel> findAll();

    @Override
    <S extends InvestorModel> S save(S entity);

    @Override
    Optional<InvestorModel> findById(String s);

    @Transactional
    @Modifying
    @Query(value="select * from investors where Email=?", nativeQuery=true)
    List<Map<String,Object>> fetchInvestorDetails(String email);

    @Transactional
    @Modifying
    @Query(value="select Email from investors where Email=? and Password=?", nativeQuery=true)
    List<Map<String,Object>> validateInvestor(String email,String password);

    @Transactional
    @Modifying
    @Query(value="select Email from investors where Email=?", nativeQuery=true)
    List<Map<String,Object>> validateInvestor2(String email);

    @Transactional
    @Modifying
    @Query(value="select SSN from investors where Email=?", nativeQuery=true)
    String fetchInvestor(String email);

    @Transactional
    @Modifying
    @Query(value="UPDATE `investors` SET `First Name`=?,`Last Name`=?,`Phone Number`=?,`Address line 1`=?,`Address line 2`=?,`City`=?,`State`=?,`Country`=?,`DOB`=?,`SSN`=?,`Password`=? WHERE `Email`=?", nativeQuery=true)
    void updateInvestorDetails(String firstName, String lastName, String phNumber, String address1, String address2, String city, String state, String country, Date dob, Integer ssn, String password, String email);

    @Transactional
    @Modifying
    @Query(value="INSERT INTO `investors`(`First Name`, `Last Name`,`Email`,`Password`) VALUES (?,?,?,?)", nativeQuery=true)
    void insertInvestorDetails(String firstName, String lastName,String email,String password);

    @Transactional
    @Modifying
    @Query(value="UPDATE `investors` SET `Password`=? WHERE Email=?", nativeQuery=true)
    void updatePassword(String password,String email);



}

