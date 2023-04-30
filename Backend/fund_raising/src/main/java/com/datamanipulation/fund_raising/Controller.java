package com.datamanipulation.fund_raising;



import com.stripe.model.Price;
import com.stripe.model.Product;
import com.stripe.param.PriceCreateParams;
import dto.*;
import com.stripe.exception.SignatureVerificationException;
import com.stripe.model.Event;
import com.stripe.model.checkout.Session;
import com.stripe.net.Webhook;
import com.stripe.param.checkout.SessionCreateParams;
import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import org.springframework.mail.MailSendException;
import org.springframework.web.bind.annotation.*;

import jakarta.persistence.Column;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.*;

//import javax.validation.Valid;
import java.math.BigInteger;
import java.sql.Date;
import java.sql.Time;
import java.util.*;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*", methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE})
public class Controller {
    @Autowired
    fetchdataInvestor fetchdata_investor;
    @Autowired
    fetchdataStartup fetchdata_startup;
    @Autowired
    fetchdataInvestments fetchdata_investments;

    @Autowired
    private JavaMailSender mailSender;


    @GetMapping(value = "login", produces = MediaType.APPLICATION_JSON_VALUE)
    public loginResponse login(@RequestParam String email, @RequestParam String password) {
        loginResponse response = new loginResponse();
        try {
            List<Map<String, Object>> resi = new ArrayList<>();
            List<Map<String, Object>> ress = new ArrayList<>();
            resi = fetchdata_investor.validateInvestor(email, password);
            ress = fetchdata_startup.validateStartUp(email, password);
            if (resi.size() == 0 && ress.size() == 0) {
                response.setMessage("Invalid UserName or Password");
                return response;
            }
            if (resi.size() != 0) {
                response.setMessage("investor");
                return response;
            } else {
                response.setMessage("startUp");
                return response;
            }

        } catch (Exception e) {
            System.out.println(e);
            response.setMessage("Fail");
            return response;
        }

    }


    @GetMapping(value = "getInvestors/{Email}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<InvestorModel> getInvestors(@PathVariable String Email) {

        try {
            InvestorModel response = new InvestorModel();
            List<Map<String, Object>> data = fetchdata_investor.fetchInvestorDetails(Email);
            System.out.println(Email);
            Map<String, Object> row = data.get(0);
            response.setAddress1(row.get("Address Line 1") != null ? row.get("Address Line 1").toString() : "");
            response.setCity(row.get("City") != null ? row.get("City").toString() : "");
            response.setAddress2(row.get("Address line 2") != null ? row.get("Address line 2").toString() : "");
            response.setDob(row.get("DOB") != null ? (Date) row.get("DOB") : null);
            response.setPhNumber(row.get("Phone Number") != null ? row.get("Phone Number").toString() : "");
            response.setEmail(row.get("Email") != null ? row.get("Email").toString() : "");
            response.setFirstName(row.get("First Name") != null ? row.get("First Name").toString() : "");
            response.setLastName(row.get("Last Name") != null ? row.get("Last Name").toString() : "");
            response.setSsn(row.get("SSN") != null ? (Integer) row.get("SSN") : null);
            response.setState(row.get("State") != null ? row.get("State").toString() : "");
            response.setCountry(row.get("Country") != null ? row.get("Country").toString() : "");
            response.setPassword(row.get("Password") != null ? row.get("Password").toString() : "");

            return ResponseEntity.ok().body(response);
        } catch (Exception e) {
            System.out.println(e);
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

    }

    @PostMapping("/api/addInvestor")
    public ResponseEntity<InvestorModel> addInvestor(@Valid @RequestBody InvestorModel m) {
        Optional<InvestorModel> investor = fetchdata_investor.findById(m.email);
        if (!investor.isPresent()) {
            return new ResponseEntity<>(fetchdata_investor.save(m), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/api/getInvestor/{Email}")
    public ResponseEntity<InvestorModel> getInvestor(@PathVariable String Email) {
        Optional<InvestorModel> investor = fetchdata_investor.findById(Email);
        if (investor.isPresent()) {
            return new ResponseEntity<>(investor.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("api/investor/{Email}/{Password}")
    public ResponseEntity<InvestorModel> authInvestor(@PathVariable String Email, @PathVariable String Password) {
        Optional<InvestorModel> userDetails = fetchdata_investor.findById(Email);
        if (userDetails.isPresent()) {
            String password = userDetails.get().password;
            if (password.equals(Password)) {
                System.out.println("success");
                return new ResponseEntity<>(HttpStatus.OK);
            } else {
                System.out.println("Failure");
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    public void deleteInvestor(@PathVariable InvestorModel user) {
        fetchdata_investor.delete(user);
        System.out.println("user Deleted");
    }


    @PutMapping("api/user/updateDetails/{Email}")
    public ResponseEntity<?> updateInvestorDetails(@PathVariable String Email, @RequestBody InvestorModel m) {
        Optional<InvestorModel> user = fetchdata_investor.findById(Email);

        try {

            if (user.isPresent()) {
                fetchdata_investor.updateInvestorDetails(m.firstName, m.lastName, m.phNumber, m.address1, m.address2, m.city, m.state, m.country, m.dob, m.ssn, m.password, Email);

            } else {
                InvestorModel userModified = new InvestorModel(
                        m.email,
                        m.password,
                        m.firstName,
                        m.lastName,
                        m.phNumber,
                        m.address1,
                        m.address2,
                        m.dob,
                        m.city,
                        m.state,
                        m.country,
                        m.ssn
                );
                fetchdata_investor.save(userModified);
//                fetchdata_investor.insertInvestorDetails(m.firstName,m.lastName,m.phNumber,m.address1,m.address2,m.city,m.state,m.country,m.dob,m.email,m.ssn,m.password);

            }
//                deleteInvestor(user.get());
//                userModified = new InvestorModel(
//                        m.email,
//                        m.password,
//                        user.get().getFirstName(),
//                        user.get().getLastName(),
//                        user.get().getPhNumber(),
//                        user.get().getAddress1(),
//                        user.get().getAddress2(),
//                        user.get().getDob(),
//                        user.get().getCity(),
//                        user.get().getState(),
//                        user.get().getCountry(),
//                        user.get().getSsn()
//                );
//                System.out.println(m.email);
//                return new ResponseEntity<>(fetchdata_investor.save(userModified), HttpStatus.OK);
//            } else {
//                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//            }
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return ResponseEntity.ok().body("success");
    }

    @PutMapping("api/investor/signup/{Email}")
    public loginResponse signUpInvestor(@PathVariable String Email, @RequestBody InvestorModel m) {
        loginResponse response = new loginResponse();
        Optional<InvestorModel> user = fetchdata_investor.findById(Email);
        List<Map<String, Object>> user2 = fetchdata_startup.findEmail(Email);

        try {
            if (user.isPresent() || user2.size() != 0) {
                response.setMessage("User Already existed...");
                return (response);
            } else {

                fetchdata_investor.insertInvestorDetails(m.firstName, m.lastName, m.email, m.password);
            }
        } catch (Exception e) {
            response.setMessage(e.getMessage().toString());
            return (response);
        }
        response.setMessage("success");
        return (response);
    }

    //---------------------------------------------- StartUp Crud operations------------------------------------------

    @GetMapping("getStartUps")
    public ResponseEntity<List<startUpBody>> getStartUps() {
        List<startUpBody> res = new ArrayList<>();
        try {
            List<Map<String, Object>> data = fetchdata_startup.fetchStartUps();
            for (Map<String, Object> row : data) {
                startUpBody response = new startUpBody();
                List<MonthlySales> l = new ArrayList<>();
                MonthlySales m1 = new MonthlySales();
                m1.setMonth(row.get("m1") != null ? row.get("m1").toString() : "");
                m1.setRevenue(row.get("r1") != null ? (Double) row.get("r1") : 0.0);

                MonthlySales m2 = new MonthlySales();
                m2.setMonth(row.get("m2") != null ? row.get("m2").toString() : "");
                m2.setRevenue(row.get("r2") != null ? (Double) row.get("r2") : 0.0);

                MonthlySales m3 = new MonthlySales();
                m3.setMonth(row.get("m3") != null ? row.get("m3").toString() : "");
                m3.setRevenue(row.get("r3") != null ? (Double) row.get("r3") : 0.0);
                l.add(m1);
                l.add(m2);
                l.add(m3);
                response.setLast3MonthsRevenue(l);
                response.setEmail(row.get("Email") != null ? row.get("Email").toString() : "");

                response.setStartUpName(row.get("StartupName") != null ? row.get("StartupName").toString() : "");

                response.setYear(row.get("YOE") != null ? (Date) row.get("YOE") : null);

                response.setVision(row.get("Vision") != null ? row.get("Vision").toString() : "");

                response.setAddress1(row.get("Address line 1") != null ? row.get("Address line 1").toString() : "");

                response.setAddress2(row.get("Address line 2") != null ? row.get("Address line 2").toString() : "");

                response.setState(row.get("State") != null ? row.get("State").toString() : "");

                response.setCountry(row.get("Country") != null ? row.get("Country").toString() : "");

                response.setCity(row.get("City") != null ? row.get("City").toString() : "");

                response.setAreaCode(row.get("AreaCode") != null ? (Integer) row.get("AreaCode") : 0);

                response.setDescription(row.get("Description") != null ? row.get("Description").toString() : "");

                response.setCategory(row.get("Category") != null ? row.get("Category").toString() : "");

                response.setProductDescription(row.get("productDescription") != null ? row.get("productDescription").toString() : "");

                response.setAboutFounders(row.get("Founders") != null ? row.get("Founders").toString() : "");

                response.setRevenue(row.get("Revenue") != null ? (Double) row.get("Revenue") : 0.0);

                response.setTotalValuation(row.get("valuation") != null ? (Double) row.get("valuation") : 0.0);

                response.setPercentOffer(row.get("percentOffer") != null ? (Double) row.get("percentOffer") : 0.0);

                response.setCostPerBit(row.get("costPerBit") != null ? (Double) row.get("costPerBit") : 0.0);

                response.setThumbnail(row.get("thumbnail") != null ? row.get("thumbnail").toString() : "");

                response.setVideo(row.get("video") != null ? row.get("video").toString() : "");

                response.setBank(row.get("bankName") != null ? row.get("bankName").toString() : "");

                response.setBankAccount(row.get("bankAccount") != null ? (Double) row.get("bankAccount") : 0.0);

                response.setPassword(row.get("Password") != null ? row.get("Password").toString() : "");

                response.setPriorInvestment(row.get("priorInvestment") != null ? row.get("priorInvestment").toString() : "");

                response.setTotalBits(row.get("totalBits") != null ? (Double) row.get("totalBits") : 0.0);

                response.setAnyCashBurn(row.get("anyCashBurn") != null ? row.get("anyCashBurn").toString() : "");

                response.setCashBurn(row.get("cashBurn") != null ? (Double) row.get("cashBurn") : 0.0);

                response.setNetProfit(row.get("netProfit") != null ? (Double) row.get("netProfit") : 0.0);

                response.setGrossProfit(row.get("grossProfit") != null ? (Double) row.get("grossProfit") : 0.0);

                response.setEquityWithFounders(row.get("equity") != null ? (Double) row.get("equity") : 0.0);

                response.setTime(row.get("time") != null ? row.get("time").toString() : "");

                res.add(response);
            }
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return ResponseEntity.ok().body(res);
    }

    @PostMapping("/api/addStartUp")
    public ResponseEntity<StartupModel> addStartUp(@RequestBody StartupModel s) {
        Optional<StartupModel> startup = fetchdata_startup.findById(s.startUpName);
        if (!startup.isPresent()) {
            return new ResponseEntity<>(fetchdata_startup.save(s), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/api/getStartUp/{Email}")
    public ResponseEntity<startUpBody> getStartup(@PathVariable String Email) {
        try {
            List<Map<String, Object>> data = fetchdata_startup.fetchStartUpDetails(Email);
            startUpBody response = new startUpBody();
            for (Map<String, Object> row : data) {
                response.setM1(row.get("m1") != null ? row.get("m1").toString() : "");
                response.setM2(row.get("m2") != null ? row.get("m2").toString() : "");
                response.setM3(row.get("m3") != null ? row.get("m3").toString() : "");
                response.setR1(row.get("r1") != null ? (Double) row.get("r1") : 0.0);
                response.setR2(row.get("r2") != null ? (Double) row.get("r2") : 0.0);
                response.setR3(row.get("r3") != null ? (Double) row.get("r3") : 0.0);
                response.setPhNumber(row.get("phNumber") != null ? (Double) row.get("phNumber") : 0.0);
                List<MonthlySales> l = new ArrayList<>();
                MonthlySales m1 = new MonthlySales();
                m1.setMonth(row.get("m1") != null ? row.get("m1").toString() : "");
                m1.setRevenue(row.get("r1") != null ? (Double) row.get("r1") : 0.0);

                MonthlySales m2 = new MonthlySales();
                m2.setMonth(row.get("m2") != null ? row.get("m2").toString() : "");
                m2.setRevenue(row.get("r2") != null ? (Double) row.get("r2") : 0.0);

                MonthlySales m3 = new MonthlySales();
                m3.setMonth(row.get("m3") != null ? row.get("m3").toString() : "");
                m3.setRevenue(row.get("r3") != null ? (Double) row.get("r3") : 0.0);
                l.add(m1);
                l.add(m2);
                l.add(m3);
                response.setLast3MonthsRevenue(l);
                response.setEmail(row.get("Email") != null ? row.get("Email").toString() : "");

                response.setStartUpName(row.get("StartupName") != null ? row.get("StartupName").toString() : "");

                response.setYear(row.get("YOE") != null ? (Date) row.get("YOE") : null);

                response.setVision(row.get("Vision") != null ? row.get("Vision").toString() : "");

                response.setAddress1(row.get("Address line 1") != null ? row.get("Address line 1").toString() : "");

                response.setAddress2(row.get("Address line 2") != null ? row.get("Address line 2").toString() : "");

                response.setState(row.get("State") != null ? row.get("State").toString() : "");

                response.setCountry(row.get("Country") != null ? row.get("Country").toString() : "");

                response.setCity(row.get("City") != null ? row.get("City").toString() : "");

                response.setAreaCode(row.get("AreaCode") != null ? (Integer) row.get("AreaCode") : 0);

                response.setDescription(row.get("Description") != null ? row.get("Description").toString() : "");

                response.setCategory(row.get("Category") != null ? row.get("Category").toString() : "");

                response.setProductDescription(row.get("productDescription") != null ? row.get("productDescription").toString() : "");

                response.setAboutFounders(row.get("Founders") != null ? row.get("Founders").toString() : "");

                response.setRevenue(row.get("Revenue") != null ? (Double) row.get("Revenue") : 0.0);

                response.setTotalValuation(row.get("valuation") != null ? (Double) row.get("valuation") : 0.0);

                response.setPercentOffer(row.get("percentOffer") != null ? (Double) row.get("percentOffer") : 0.0);

                response.setCostPerBit(row.get("costPerBit") != null ? (Double) row.get("costPerBit") : 0.0);

                response.setThumbnail(row.get("thumbnail") != null ? row.get("thumbnail").toString() : "");

                response.setVideo(row.get("video") != null ? row.get("video").toString() : "");

                response.setBank(row.get("bankName") != null ? row.get("bankName").toString() : "");

                response.setBankAccount(row.get("bankAccount") != null ? (Double) row.get("bankAccount") : 0.0);

                response.setPassword(row.get("Password") != null ? row.get("Password").toString() : "");

                response.setPriorInvestment(row.get("priorInvestment") != null ? row.get("priorInvestment").toString() : "");

                response.setTotalBits(row.get("totalBits") != null ? (Double) row.get("totalBits") : 0.0);

                response.setAnyCashBurn(row.get("anyCashBurn") != null ? row.get("anyCashBurn").toString() : "");

                response.setCashBurn(row.get("cashBurn") != null ? (Double) row.get("cashBurn") : 0.0);

                response.setNetProfit(row.get("netProfit") != null ? (Double) row.get("netProfit") : 0.0);

                response.setGrossProfit(row.get("grossProfit") != null ? (Double) row.get("grossProfit") : 0.0);

                response.setEquityWithFounders(row.get("equity") != null ? (Double) row.get("equity") : 0.0);

                response.setTime(row.get("time") != null ? row.get("time").toString() : "");


            }
            return ResponseEntity.ok().body(response);

        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/api/getTop5")
    public ResponseEntity<List<startUpBody>> getTop5() {
        List<startUpBody> res = new ArrayList<>();
        try {
            List<Map<String, Object>> data = fetchdata_startup.top5Companies();
            for (Map<String, Object> row : data) {
                startUpBody response = new startUpBody();
                List<MonthlySales> l = new ArrayList<>();
                MonthlySales m1 = new MonthlySales();
                m1.setMonth(row.get("m1") != null ? row.get("m1").toString() : "");
                m1.setRevenue(row.get("r1") != null ? (Double) row.get("r1") : 0.0);

                MonthlySales m2 = new MonthlySales();
                m2.setMonth(row.get("m2") != null ? row.get("m2").toString() : "");
                m2.setRevenue(row.get("r2") != null ? (Double) row.get("r2") : 0.0);

                MonthlySales m3 = new MonthlySales();
                m3.setMonth(row.get("m3") != null ? row.get("m3").toString() : "");
                m3.setRevenue(row.get("r3") != null ? (Double) row.get("r3") : 0.0);
                l.add(m1);
                l.add(m2);
                l.add(m3);
                response.setLast3MonthsRevenue(l);
                response.setEmail(row.get("Email") != null ? row.get("Email").toString() : "");

                response.setStartUpName(row.get("StartupName") != null ? row.get("StartupName").toString() : "");

                response.setYear(row.get("YOE") != null ? (Date) row.get("YOE") : null);

                response.setVision(row.get("Vision") != null ? row.get("Vision").toString() : "");

                response.setAddress1(row.get("Address line 1") != null ? row.get("Address line 1").toString() : "");

                response.setAddress2(row.get("Address line 2") != null ? row.get("Address line 2").toString() : "");

                response.setState(row.get("State") != null ? row.get("State").toString() : "");

                response.setCountry(row.get("Country") != null ? row.get("Country").toString() : "");

                response.setCity(row.get("City") != null ? row.get("City").toString() : "");

                response.setAreaCode(row.get("AreaCode") != null ? (Integer) row.get("AreaCode") : 0);

                response.setDescription(row.get("Description") != null ? row.get("Description").toString() : "");

                response.setCategory(row.get("Category") != null ? row.get("Category").toString() : "");

                response.setProductDescription(row.get("productDescription") != null ? row.get("productDescription").toString() : "");

                response.setAboutFounders(row.get("Founders") != null ? row.get("Founders").toString() : "");

                response.setRevenue(row.get("Revenue") != null ? (Double) row.get("Revenue") : 0.0);

                response.setTotalValuation(row.get("valuation") != null ? (Double) row.get("valuation") : 0.0);

                response.setPercentOffer(row.get("percentOffer") != null ? (Double) row.get("percentOffer") : 0.0);

                response.setCostPerBit(row.get("costPerBit") != null ? (Double) row.get("costPerBit") : 0.0);

                response.setThumbnail(row.get("thumbnail") != null ? row.get("thumbnail").toString() : "");

                response.setVideo(row.get("video") != null ? row.get("video").toString() : "");

                response.setBank(row.get("bankName") != null ? row.get("bankName").toString() : "");

                response.setBankAccount(row.get("bankAccount") != null ? (Double) row.get("bankAccount") : 0.0);

                response.setPassword(row.get("Password") != null ? row.get("Password").toString() : "");

                response.setPriorInvestment(row.get("priorInvestment") != null ? row.get("priorInvestment").toString() : "");

                response.setTotalBits(row.get("totalBits") != null ? (Double) row.get("totalBits") : 0.0);

                response.setAnyCashBurn(row.get("anyCashBurn") != null ? row.get("anyCashBurn").toString() : "");

                response.setCashBurn(row.get("cashBurn") != null ? (Double) row.get("cashBurn") : 0.0);

                response.setNetProfit(row.get("netProfit") != null ? (Double) row.get("netProfit") : 0.0);

                response.setGrossProfit(row.get("grossProfit") != null ? (Double) row.get("grossProfit") : 0.0);

                response.setEquityWithFounders(row.get("equity") != null ? (Double) row.get("equity") : 0.0);

                response.setTime(row.get("time") != null ? row.get("time").toString() : "");

                res.add(response);
            }
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return ResponseEntity.ok().body(res);
    }

    @GetMapping("api/startup/{Email}/{Password}")
    public ResponseEntity<StartupModel> authStartup(@PathVariable String Email, @PathVariable String Password) {
        Optional<StartupModel> userDetails = fetchdata_startup.findById(Email);
        if (userDetails.isPresent()) {
            String password = userDetails.get().password;
            if (password.equals(Password)) {
                System.out.println("success");
                return new ResponseEntity<>(HttpStatus.OK);
            } else {
                System.out.println("Failure");
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }


    public void deleteStartup(@PathVariable StartupModel user) {
        fetchdata_startup.delete(user);
        System.out.println("user Deleted");
    }

    @PutMapping("api/user/startUp/signup/{Email}")
    public loginResponse signUpStartupAuthDetails(@PathVariable String Email, @RequestBody startUpBody m) {
        loginResponse response = new loginResponse();
        try {

            Optional<InvestorModel> user2 = fetchdata_investor.findById(Email);
            System.out.println(m.toString());
            List<Map<String, Object>> user = fetchdata_startup.findEmail(Email);
            if (user2.isPresent() || user.size() != 0) {
                response.setMessage("StartUp Already Existed...");
                return response;
            }

            fetchdata_startup.insertSignUpDetails(m.getEmail(), m.getPassword(), m.getStartUpName(), m.getAddress1());
            //  System.out.println(m.email);
            response.setMessage("success");
            return (response);
        } catch (Exception e) {
            response.setMessage(e.getMessage().toString());
            return (response);
        }
    }

    @PutMapping("api/user/updatePassword/{Email}")
    public loginResponse updatePassword(@PathVariable String Email, @RequestParam String password) {
        loginResponse response = new loginResponse();
        try {


            fetchdata_startup.updatePassword(password, Email);

            response.setMessage("success");
            return (response);
        } catch (Exception e) {
            response.setMessage(e.getMessage().toString());
            return (response);
        }
    }

    @PutMapping("api/user/updateInvestorPassword/{Email}")
    public loginResponse updateInvestorPassword(@PathVariable String Email, @RequestParam String password) {
        loginResponse response = new loginResponse();
        try {


            fetchdata_investor.updatePassword(password, Email);

            response.setMessage("success");
            return (response);
        } catch (Exception e) {
            response.setMessage(e.getMessage().toString());
            return (response);
        }
    }

    @PutMapping("api/user/forgetPassword/{Email}")
    public loginResponse forgetPassword(@PathVariable String Email, @RequestParam String password) {
        loginResponse response = new loginResponse();
        try {
            List<Map<String, Object>> resi = new ArrayList<>();
            List<Map<String, Object>> ress = new ArrayList<>();
            resi = fetchdata_investor.validateInvestor2(Email);
            ress = fetchdata_startup.validateStartUp2(Email);
            if (resi.size() == 0 && ress.size() == 0) {
                response.setMessage("Entered Account is not Exists...");
                return response;
            }
            if (resi.size() != 0) {
                fetchdata_investor.updatePassword(password, Email);
                response.setMessage("success");
                return response;
            } else {
                fetchdata_startup.updatePassword(password, Email);
                response.setMessage("success");
                return response;
            }

        } catch (Exception e) {
            System.out.println(e);
            response.setMessage("Failed to Update Password,Try Again...");
            return response;
        }
    }


    @PutMapping("api/user/updateStartUp/{Email}")
    public ResponseEntity<?> updateStartupAuthDetails(@PathVariable String Email, @RequestBody startUpBody m) {
        try {
            System.out.println(m.toString());
            List<Map<String, Object>> user = fetchdata_startup.findEmail(Email);
            if (user != null && !user.isEmpty()) {
                fetchdata_startup.deleteStartup(Email);
            }
            Double f = ((m.getTotalValuation() * m.getPercentOffer()) / (m.getTotalBits() * 100));
            int d = 2;
            String st = String.format("%.2f", f);
            Double f2 = Double.parseDouble(st);
            fetchdata_startup.insertStartUpDetails(m.getEmail(), m.getPassword(), m.getStartUpName(), m.getYear(), m.getVision(), m.getAddress1(), m.getAddress2(), m.getState(), m.getCountry(), m.getCity(), m.getAreaCode(), m.getDescription(), m.getCategory(), m.getProductDescription(), m.getAboutFounders(), m.getRevenue(), m.getTotalValuation(), m.getPercentOffer(), f2, m.getThumbnail(), m.getVideo(), m.getBank(), m.getBankAccount(), m.getPriorInvestment(), m.getTotalBits(), m.getAnyCashBurn(), m.getCashBurn(), m.getNetProfit(), m.getGrossProfit(), m.getEquityWithFounders(), m.getTime(), m.getM1(), m.getM2(), m.getM3(), m.getR1(), m.getR2(), m.getR3(), m.getPhNumber());
            //  System.out.println(m.email);
            return new ResponseEntity<>("success", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("api/user/updateStartUp")
    public ResponseEntity<?> updateStartupAuthDetails(@RequestBody ArrayList<startUpBody> lis) {
        try {
            for (startUpBody m : lis) {
                List<MonthlySales> b = m.getLast3MonthsRevenue();
                MonthlySales m1 = b.get(0);
                MonthlySales m2 = b.get(1);
                MonthlySales m3 = b.get(2);
                //    fetchdata_startup.insertStartUpDetails(m.getEmail(), m.getPassword(), m.getStartUpName(), m.getYear(), m.getVision(), m.getAddress1(), m.getAddress2(), m.getState(), m.getCountry(), m.getCity(), m.getAreaCode(), m.getDescription(), m.getCategory(), m.getProductDescription(), m.getAboutFounders(), m.getRevenue(), m.getTotalValuation(), m.getPercentOffer(), m.getCostPerBit(), m.getThumbnail(), m.getVideo(), m.getBank(), m.getBankAccount(), m.getPriorInvestment(), m.getTotalBits(), m.getAnyCashBurn(), m.getCashBurn(), m.getNetProfit(), m.getGrossProfit(), m.getEquityWithFounders(), m.getTime(), m1.getMonth(), m2.getMonth(), m3.getMonth(), m1.getRevenue(), m2.getRevenue(), m3.getRevenue());
                //  System.out.println(m.email);
            }
            return new ResponseEntity<>("success", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/api/investments/{Email}")
    public List<InvestorInvestments> getInvestments(@PathVariable String Email) {

        List<InvestorInvestments> response = new ArrayList<>();
        try {
            List<Map<String, Object>> res = fetchdata_investments.fetchInvestorInvestments(Email);
            for (Map<String, Object> row : res) {
                InvestorInvestments a = new InvestorInvestments();
                a.setInvestedCompany(row.get("StartupName") != null ? row.get("StartupName").toString() : "");
                a.setInvestment(row.get("amount") != null ? (Double) row.get("amount") : 0);
                a.setBits(row.get("bits") != null ? (int) row.get("bits") : 0);
                a.setDate(row.get("date") != null ? (Date) row.get("date") : null);
                a.setTime(row.get("timeOfInvestment") != null ? (Time) row.get("timeOfInvestment") : null);
                a.setStartUpEmail(row.get("startupEmail") != null ? row.get("startupEmail").toString() : "");
                response.add(a);
            }

        } catch (Exception e) {
            System.out.println(e);

        }
        return response;

    }

    @GetMapping("/api/top10investments/{Email}")
    public List<InvestorInvestments> getTop10Investments(@PathVariable String Email) {

        List<InvestorInvestments> response = new ArrayList<>();
        try {
            List<Map<String, Object>> res = fetchdata_investments.fetchTop10Investments(Email);
            for (Map<String, Object> row : res) {
                InvestorInvestments a = new InvestorInvestments();
                a.setInvestor(row.get("First Name") != null ? row.get("First Name").toString() : "");
                a.setInvestment(row.get("amount") != null ? (Double) row.get("amount") : 0);
                a.setBits(row.get("bits") != null ? (int) row.get("bits") : 0);
                a.setDate(row.get("date") != null ? (Date) row.get("date") : null);
                a.setTime(row.get("timeOfInvestment") != null ? (Time) row.get("timeOfInvestment") : null);
                a.setInvestorEmail(row.get("investorEmail") != null ? row.get("investorEmail").toString() : "");
                response.add(a);
            }

        } catch (Exception e) {
            System.out.println(e);

        }
        return response;

    }

    @GetMapping("/api/Cinvestments/{Email}")
    public List<InvestorInvestments> getCInvestments(@PathVariable String Email) {

        List<InvestorInvestments> response = new ArrayList<>();
        try {
            List<Map<String, Object>> res = fetchdata_investments.fetchCInvestorInvestments(Email);
            for (Map<String, Object> row : res) {
                InvestorInvestments a = new InvestorInvestments();
                a.setInvestedCompany(row.get("StartupName") != null ? row.get("StartupName").toString() : "");
                a.setInvestment(row.get("amount") != null ? (Double) row.get("amount") : 0);
                a.setBits(row.get("bits") != null ? Integer.parseInt(row.get("bits").toString()) : 0);
                a.setStartUpEmail(row.get("startupEmail") != null ? row.get("startupEmail").toString() : "");
                response.add(a);
            }

        } catch (Exception e) {
            System.out.println(e);

        }
        return response;

    }

    @GetMapping("/api/recentInvestments/{Email}")
    public List<InvestorInvestments> getRecentInvestments(@PathVariable String Email) {

        List<InvestorInvestments> response = new ArrayList<>();
        try {
            List<Map<String, Object>> res = fetchdata_investments.fetchRecentInvestments(Email);
            for (Map<String, Object> row : res) {
                InvestorInvestments a = new InvestorInvestments();
                a.setInvestor(row.get("First Name") != null ? row.get("First Name").toString() : "");
                a.setInvestment(row.get("amount") != null ? (Double) row.get("amount") : 0);
                a.setBits(row.get("bits") != null ? (int) row.get("bits") : 0);
                a.setDate(row.get("date") != null ? (Date) row.get("date") : null);
                a.setTime(row.get("timeOfInvestment") != null ? (Time) row.get("timeOfInvestment") : null);
                a.setInvestorEmail(row.get("investorEmail") != null ? row.get("investorEmail").toString() : "");
                response.add(a);
            }

        } catch (Exception e) {
            System.out.println(e);

        }
        return response;

    }

    @PutMapping("api/user/payment")
    public loginResponse payment(@RequestParam String investorEmail, @RequestParam String startUpEmail, @RequestParam int bits, @RequestParam Double amount) {
        loginResponse res = new loginResponse();
        try {
            fetchdata_investments.addInvestment(investorEmail, startUpEmail, bits, amount);
            res.setMessage("success");
            SimpleMailMessage message = new SimpleMailMessage();
            message.setTo(investorEmail);
            message.setSubject("Payment Successful");
            message.setText("Payment Successful!!!,\n"+"We are delighted to inform you that your payment of $"+amount+" has been successfully processed and Investment is reflected into your Portfolio.\n Thank you for your prompt payment.\n" +
                    "\n" +
                    "We appreciate your business and look forward to serving you again in the future.\n\n"+"Please find the payment details below for your reference:\n"+"\nNo.Of Bits : "+bits+"\nTotal Amount : $"+amount+"\nStartUp Contact Details : "+startUpEmail+"\n\n\n Best Regards \n \n Investire");
            mailSender.send(message);
            SimpleMailMessage message2 = new SimpleMailMessage();
            message2.setTo(startUpEmail);
            message2.setSubject("Received Funding");
            message2.setText("Congratulations on New Investment!! \n\n I am pleased to inform you that our Investire project has successfully secured funding for your startup. We are thrilled to have had the opportunity to bring together a group of investors who share our enthusiasm for your business and believe in your vision.. \n\n Find the details of the new investment below \n\n Investor Email "+investorEmail+"\n No of Bits:  "+bits+"\n\nInvestment Amount:  $ "+amount+"\n We are proud to be a part of your journey and look forward to seeing your startup thrive in the years to come.\n\n\n Best Regards \n \n Investire");
            mailSender.send(message2);
            return (res);
        } catch(MailSendException e){
            res.setMessage("success");
            return(res);
        }
        catch (Exception e) {
            res.setMessage("Fail");
            return (res);
        }
    }

    @GetMapping("/api/totalFund/{Email}")
    public Double getTotalFund(@PathVariable String Email) {


        try {
            List<Map<String, Object>> res = fetchdata_investments.totalFund(Email);
            for (Map<String, Object> row : res) {
                return (row.get("totalFund") != null ? (Double) row.get("totalFund") : 0.0);
            }

        } catch (Exception e) {
            System.out.println(e);

        }
        return 0.0;

    }

    @PostMapping("/generate-otp")
    public loginResponse generateOtp(@RequestParam String user) {
        loginResponse res = new loginResponse();
        try {

            String otp = generateOtp();
            res.setMessage(otp);
            SimpleMailMessage message = new SimpleMailMessage();
            message.setTo(user);
            message.setSubject("OTP Verification");
            message.setText("Welcome To Investire \n\n Thank You For Creating New Account with Us!! \n\n  Your OTP is for Registration Is: " + otp);

            mailSender.send(message);
            return res;
        } catch (Exception e) {
            System.out.println(e);
            res.setMessage("Fail");
            return res;
        }
    }

    private String generateOtp() {
        // generate a 6-digit random OTP
        Random random = new Random();
        int otp = 100000 + random.nextInt(900000);
        return String.valueOf(otp);
    }

    @GetMapping("/getSuccessList")
    public List<successList> getSuccessList() {
        List<successList> lis = new ArrayList<>();

        try {
            List<Map<String, Object>> res = fetchdata_startup.successCompanies();
            for (Map<String, Object> row : res) {
                List<Map<String, Object>> d = fetchdata_investments.fetchSuccessList(row.get("Email") != null ? row.get("Email").toString() : "");
                successList s = new successList();
                s.setStartUpName(row.get("StartupName") != null ? row.get("StartupName").toString() : "");
                s.setVideo(row.get("video") != null ? row.get("video").toString() : "");
                s.setFund(d.get(0).get("totalAmount") != null ? (Double) d.get(0).get("totalAmount") : 0.0);
                s.setTime(Math.toIntExact(d.get(0).get("dateDifference") != null ? Long.parseLong(d.get(0).get("dateDifference").toString()) : 0));
                lis.add(s);
            }

        } catch (Exception e) {
            System.out.println(e);

        }
        return lis;

    }



}

