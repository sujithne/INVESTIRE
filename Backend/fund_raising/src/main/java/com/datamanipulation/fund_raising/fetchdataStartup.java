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
public interface fetchdataStartup extends JpaRepository<StartupModel,String> {
    @Override
    void delete(StartupModel entity);

    @Override
    List<StartupModel> findAll();

    @Override
    <S extends StartupModel> S save(S entity);

    @Transactional
    @Modifying
    @Query(value="select * from startup where Email=?", nativeQuery=true)
    List<Map<String,Object>> fetchStartUpDetails(String email);

    @Transactional
    @Modifying
    @Query(value="select * from startup ", nativeQuery=true)
    List<Map<String,Object>> fetchStartUps();

    @Transactional
    @Modifying
    @Query(value="select Email from startup where Email=? and Password=?", nativeQuery=true)
    List<Map<String,Object>> validateStartUp(String email,String password);

    @Transactional
    @Modifying
    @Query(value="select Email from startup where Email=?", nativeQuery=true)
    List<Map<String,Object>> validateStartUp2(String email);

    @Transactional
    @Modifying
    @Query(value="SELECT * FROM `startup` where time>=CURRENT_DATE LIMIT 5;", nativeQuery=true)
    List<Map<String,Object>> top5Companies();

    @Query(value="select * from startup where Email=?", nativeQuery=true)
    List<Map<String,Object>> findEmail(String s);

    @Transactional
    @Modifying
    @Query(value="DELETE FROM `startup` where Email=?", nativeQuery=true)
    void deleteStartup(String s);

    @Transactional
    @Modifying
    @Query(value="INSERT INTO `startup`(`Email`, `Password`, `StartupName`, `YOE`, `Vision`, `Address line 1`, `Address line 2`, `State`, `Country`, `City`, `AreaCode`, `Description`, `Category`, `productDescription`, `Founders`, `Revenue`, `valuation`, `percentOffer`, `costPerBit`, `thumbnail`, `video`, `bankName`, `bankAccount`, `priorInvestment`, `totalBits`, `anyCashBurn`, `cashBurn`, `netProfit`, `grossProfit`, `equity`, `time`, `m1`, `m2`, `m3`, `r1`, `r2`, `r3`,`phNumber`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)", nativeQuery=true)
    void insertStartUpDetails(String email,String password,String startupName,Date year,String vision,String address1,String address2,String state,String country,String city,Integer areaCode,String description,String category,String productDescription,String aboutFounders,Double revenue,Double totalValuation,Double percentOffer,Double costPerBit,String thumbnail,String video,String bank,Double bankAccount,String priorInvestment,Double totalBits,String anyCashBurn,Double cashBurn,Double netProfit,Double grossProfit,Double equityWithFounders,String time,String m1,String m2,String m3,Double r1,Double r2,Double r3,Double phNumber);

    @Transactional
    @Modifying
    @Query(value="INSERT INTO `startup`(`Email`, `Password`, `StartupName`,`Address line 1`) VALUES (?,?,?,?)", nativeQuery=true)
    void insertSignUpDetails(String email,String password,String startupName,String address1);

    @Transactional
    @Modifying
    @Query(value="UPDATE `startup` SET `Password`=? WHERE Email=?", nativeQuery=true)
    void updatePassword(String password,String email);

   
}
