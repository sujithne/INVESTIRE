-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Apr 27, 2023 at 05:11 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db1`
--

-- --------------------------------------------------------

--
-- Table structure for table `investments`
--

CREATE TABLE `investments` (
  `investorEmail` varchar(50) NOT NULL,
  `startupEmail` varchar(50) NOT NULL,
  `amount` double NOT NULL,
  `bits` int(11) NOT NULL,
  `date` date NOT NULL DEFAULT current_timestamp(),
  `timeOfInvestment` time NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `investments`
--

INSERT INTO `investments` (`investorEmail`, `startupEmail`, `amount`, `bits`, `date`, `timeOfInvestment`) VALUES
('a@gmail.com', 'b@gmail.com', 2000, 4, '2023-03-19', '12:32:30'),
('test@gmail.com', 'comfy@gmail.com', 70, 2, '2023-03-19', '16:31:38'),
('test@gmail.com', 'stest@gmail.com', 2475, 4, '2023-03-21', '22:36:08'),
('test@gmail.com', 'comfy@gmail.com', 35, 1, '2023-03-22', '11:47:14'),
('test@gmail.com', 'comfy@gmail.com', 35, 1, '2023-03-22', '11:48:03'),
('test@gmail.com', 'comfy@gmail.com', 35, 1, '2023-03-22', '11:53:10'),
('test@gmail.com', 'comfy@gmail.com', 35, 1, '2023-03-22', '11:54:40'),
('test@gmail.com', 'comfy@gmail.com', 35, 1, '2023-03-22', '11:56:31'),
('test@gmail.com', 'comfy@gmail.com', 35, 1, '2023-03-22', '11:57:01'),
('test@gmail.com', 'comfy@gmail.com', 35, 1, '2023-03-22', '11:58:33'),
('test@gmail.com', 'comfy@gmail.com', 35, 1, '2023-03-22', '12:03:39'),
('test@gmail.com', 'comfy@gmail.com', 35, 1, '2023-03-22', '12:19:50'),
('test@gmail.com', 'comfy@gmail.com', 35, 1, '2023-03-22', '12:19:56'),
('test@gmail.com', 'comfy@gmail.com', 35, 1, '2023-03-22', '12:20:58'),
('test@gmail.com', 'stest@gmail.com', 618.75, 1, '2023-03-22', '12:25:56'),
('test@gmail.com', 'larq@gmail.com', 50, 1, '2023-03-22', '12:34:15'),
('test@gmail.com', 'larq@gmail.com', 50, 1, '2023-03-22', '12:34:52'),
('test@gmail.com', 'larq@gmail.com', 200, 4, '2023-03-22', '13:23:13'),
('test@gmail.com', 'larq@gmail.com', 1700, 34, '2023-03-22', '22:13:56'),
('test@gmail.com', 'stest@gmail.com', 2475, 4, '2023-03-22', '22:16:56'),
('test@gmail.com', 'stest@gmail.com', 1856.25, 3, '2023-03-22', '22:21:02'),
('test@gmail.com', 'comfy@gmail.com', 245, 7, '2023-03-22', '22:21:56'),
('test@gmail.com', 'comfy@gmail.com', 35, 1, '2023-03-24', '11:07:53'),
('test@gmail.com', 'scrubdaddy@gmail.com', 90000, 100, '2022-12-01', '20:11:01'),
('test@gmail.com', 'scrubdaddy@gmail.com', 50000, 70, '2023-02-01', '20:14:17'),
('test@gmail.com', 'smartsoda@gmail.com', 50000, 70, '2022-02-01', '20:22:25'),
('test@gmail.com', 'smartsoda@gmail.com', 880000, 70, '2022-12-01', '20:22:44'),
('test@gmail.com', 'bombas@gmail.com', 880000, 70, '2022-02-01', '21:23:43'),
('test@gmail.com', 'bombas@gmail.com', 880000, 70, '2022-08-01', '21:24:03'),
('test@gmail.com', 'cupbop@gmail.com', 880000, 70, '2022-07-01', '21:25:06'),
('test@gmail.com', 'cupbop@gmail.com', 690000, 70, '2022-01-01', '21:25:32'),
('test@gmail.com', 'pizzacupcake@gmail.com', 690000, 70, '2022-01-01', '21:25:57'),
('test@gmail.com', 'pizzacupcake@gmail.com', 690000, 70, '2021-08-31', '21:26:26'),
('nesujith@icloud.com', 'comfy@gmail.com', 350, 10, '2023-04-04', '00:20:33'),
('nesujith@icloud.com', 'sujithne512@gmail.com', 10000, 10, '2023-04-04', '00:29:35'),
('nesujith@icloud.com', 'doorbot@gmail.com', 140, 1, '2023-04-04', '13:36:21'),
('nesujith512@gmail.com', 'bvksnsandeep@gmail.com', 100, 10, '2023-04-04', '16:21:08'),
('nesujith@icloud.com', 'bvksnsandeep@gmail.com', 10000, 1000, '2023-04-06', '15:40:50'),
('snarnavaram@albany.edu', 'kommidi.jithin@gmail.com', 200, 1, '2023-04-17', '01:32:09'),
('jyothi.kbf182@gmail.com', 'Vineela.uf140@gmail.com', 22000, 110, '2023-04-17', '10:33:01'),
('nesujith@icloud.com', 'kommidi.jithin@gmail.com', 20000, 100, '2023-04-20', '14:42:36'),
('nesujith@icloud.com', 'kommidi.jithin@gmail.com', 1000, 5, '2023-04-20', '14:43:38'),
('', 'Vineela.uf140@gmail.com', 4000, 20, '2023-04-23', '00:41:40'),
('snarnavaram@albany.edu', 'Vineela.uf140@gmail.com', 2000, 10, '2023-04-23', '00:44:07'),
('jyothi.kbf182@gmail.com', 'Vineela.uf140@gmail.com', 30000, 150, '2023-04-25', '15:10:58'),
('nesujith@icloud.com', 'bvksnsandeep@gmail.com', 4000, 200, '2023-04-25', '15:18:54'),
('nesujith@icloud.com', 'bvksnsandeep@gmail.com', 100, 5, '2023-04-25', '15:33:15'),
('nesujith@icloud.com', 'bvksnsandeep@gmail.com', 200, 10, '2023-04-25', '15:46:14');

-- --------------------------------------------------------

--
-- Table structure for table `investors`
--

CREATE TABLE `investors` (
  `First Name` varchar(20) NOT NULL,
  `Last Name` varchar(15) NOT NULL,
  `Phone Number` varchar(10) DEFAULT NULL,
  `Address line 1` varchar(30) DEFAULT NULL,
  `Address line 2` varchar(15) DEFAULT NULL,
  `City` text DEFAULT NULL,
  `State` text DEFAULT NULL,
  `Country` text DEFAULT NULL,
  `DOB` date DEFAULT current_timestamp(),
  `Email` varchar(225) NOT NULL,
  `SSN` int(9) DEFAULT NULL,
  `Password` varchar(225) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `investors`
--

INSERT INTO `investors` (`First Name`, `Last Name`, `Phone Number`, `Address line 1`, `Address line 2`, `City`, `State`, `Country`, `DOB`, `Email`, `SSN`, `Password`) VALUES
('Team ', 'L', '9999999999', 'ALbnay', 'ALBANY', 'ALBANY', 'NY', 'USA', '2000-12-31', 'jyothi.kbf182@gmail.com', 123412341, 'Investor@123'),
('team ', 'L', '9988998800', 'ALbnay', 'Albany', 'NY', 'NY', 'USA', '2001-01-11', 'nesujith512@gmail.com', 123456789, ''),
('Sujith', 'N', '9900990099', 'ALbnay', 'Albany', 'albany', 'NY', 'USA', '2023-04-03', 'nesujith@icloud.com', 999000111, 'Investor@123'),
('Sujith', 'N', '9876543210', 'Albany', 'Albany', 'albany', 'New York', 'USA', '2023-04-16', 'snarnavaram@albany.edu', 999999999, 'Investor@123'),
('SAMPLENAME', 'b', '9876543344', 'ad1', 'ad2', 'c1', 's1', 'cc', '2023-03-18', 'test@gmail.com', 789890990, 'Test@123');

-- --------------------------------------------------------

--
-- Table structure for table `startup`
--

CREATE TABLE `startup` (
  `Email` varchar(255) NOT NULL,
  `StartupName` varchar(50) NOT NULL,
  `YOE` date DEFAULT current_timestamp(),
  `Vision` varchar(1500) DEFAULT NULL,
  `Address line 1` varchar(1500) DEFAULT NULL,
  `Address line 2` varchar(1500) DEFAULT NULL,
  `State` varchar(50) DEFAULT NULL,
  `Country` varchar(50) DEFAULT NULL,
  `City` varchar(50) DEFAULT NULL,
  `AreaCode` int(11) DEFAULT NULL,
  `Description` varchar(1500) DEFAULT NULL,
  `Category` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `productDescription` varchar(1500) DEFAULT NULL,
  `Founders` varchar(1500) DEFAULT NULL,
  `Revenue` double DEFAULT NULL,
  `valuation` double DEFAULT NULL,
  `percentOffer` double DEFAULT NULL,
  `costPerBit` double DEFAULT NULL,
  `thumbnail` varchar(1500) DEFAULT NULL,
  `video` varchar(1500) DEFAULT NULL,
  `bankName` varchar(50) DEFAULT NULL,
  `bankAccount` double DEFAULT NULL,
  `priorInvestment` varchar(1500) DEFAULT NULL,
  `totalBits` double DEFAULT NULL,
  `anyCashBurn` varchar(10) DEFAULT NULL,
  `cashBurn` double DEFAULT NULL,
  `netProfit` double DEFAULT NULL,
  `grossProfit` double DEFAULT NULL,
  `equity` double DEFAULT NULL,
  `time` varchar(20) DEFAULT NULL,
  `m1` varchar(20) DEFAULT NULL,
  `m2` varchar(20) DEFAULT NULL,
  `m3` varchar(20) DEFAULT NULL,
  `r1` double DEFAULT NULL,
  `r2` double DEFAULT NULL,
  `r3` double DEFAULT NULL,
  `Password` varchar(20) NOT NULL,
  `phNumber` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `startup`
--

INSERT INTO `startup` (`Email`, `StartupName`, `YOE`, `Vision`, `Address line 1`, `Address line 2`, `State`, `Country`, `City`, `AreaCode`, `Description`, `Category`, `productDescription`, `Founders`, `Revenue`, `valuation`, `percentOffer`, `costPerBit`, `thumbnail`, `video`, `bankName`, `bankAccount`, `priorInvestment`, `totalBits`, `anyCashBurn`, `cashBurn`, `netProfit`, `grossProfit`, `equity`, `time`, `m1`, `m2`, `m3`, `r1`, `r2`, `r3`, `Password`, `phNumber`) VALUES
('comfy@gmail.com', 'The Comfy', '2017-01-01', ' We aim to maximize our positive impact on everyone we touch. We create lasting value in a complex and uncertain world', '4634 E Peak View Rd, Cave Creek', '  Arizona, 85331, United States', 'Arizona', 'USA', 'Cave Creek', NULL, 'Wrap yourself in a warm,wearable hug! Turn the heat down and bring on the cold with The Comfy!', 'Clothing', '', 'Brian Speciale, Michael Speciale', 25000, 10710000, 20, 4284, NULL, 'https://youtu.be/t4YHl2LQxGk', NULL, NULL, 'Bootstraped', 500, NULL, NULL, NULL, NULL, NULL, '2023-04-15', 'Jan', 'Feb', 'Mar', 11200, 9000, 25000, 'Comfy@best', NULL),
('doorbot@gmail.com', 'Doorbot', '2020-01-01', 'To make door security accessable for every household', 'Santa Monica,California', '', 'California', 'USA', 'Santa Monica', NULL, 'Doorbot is a video intercom for your smartphones and tablets. See and talk with visitors using your smartphones and tablets.', 'Security', 'DoorBot is simple, yet powerful.wireless doorbell that streams livevideo and audio of your front doordirectly to your smartphone or tablet.Simply install DoorBot, download thefree app and you\'re ready to go.', 'Jamie Siminoff', 19000000, 7000000, 10, 1400, NULL, 'https://youtu.be/ouOrfvqUGbI', 'SEFCU Bank', 546378972145, 'Qualcomm ventures', 500, 'Yes', 20, 0, 30, 70, '2023-04-15', 'Dec', 'Jan', 'Feb', 75200, 78800, 81000, 'Doorbot@890', NULL),
('cupbop@gmail.com', 'cupbop', '2019-01-01', 'CUPBOP MEANS A STEAMING CUP OF WOW! We\'re here to end your boredom with the same old food choices', '9410 W Hanna Ln Ste 101, Glendale, Arizona, 85305, United States', '', 'Arizona', 'USA', 'Glendale', NULL, 'The Cupbop menu is our own delicioustake on Korean cuisine', 'food', '“Bop” is Korean for “steamed rice.”Cupbop is steamed rice servedin a cup, along with cabbage, sweet potato noodles, a protein ofchoice and one of their specialty sauces that range fromsweet (#1) to fiery (10). The menu is based on the Korean BBQ the trio ate while growing up in South Korea.', 'Park, JK Kim and Jung Song', 60000000, 33000000, 3, 1980, NULL, 'https://youtu.be/mKlZ7rtiPbY', 'SEFCU Bank', 54637894321, 'Bootstraped', 500, 'No', 0, 20, 45, 100, '2023-01-01', 'Dec', 'Jan', 'Feb', 89100, 9370000, 1000000, 'cupbop@890', NULL),
('bombas@gmail.com', 'Bombas', '2017-01-01', 'One Purchased = One Donated ', '881 Broadway Second FloorNew York, NY 10003USA', '', 'NewYork', 'USA', 'newyork', NULL, 'Bombas is an apparel brand. which sells socks and T-shirts', 'clothing', 'Bombas Socks are purpose built forathletic performance, engineered forcomfort, and designed to stand out. Rumor has it a baby kitten is savedfrom a very tall tree every time you slip on a pair.', 'Randy Goldberg ,David Heath', 1900000, 4000000, 5, 400, NULL, 'https://youtu.be/qT66d_PRR6U', 'Bank of america', 785462893457, 'Daymond Garfield John', 500, 'N0', 0, 35, 60, 100, '2023-01-01', 'Dec', 'Jan', 'Feb', 78000, 80100, 82500, 'Bombas@12345', NULL),
('scrubdaddy@gmail.com', 'Scrub Daddy', '2012-01-01', ' To provide and uplift the average Filipino with fun and innovative cleaning solutions through Scrub Daddys unique products', 'Scrub Daddy Inc. 1700 Suckle Hwy', ' Pennsauken, New Jersey 08110.', 'New Jersey', 'USA', 'Pennsauken', 1234, 'Scrub Daddy makes high-performance cleaning products by combining exclusive materials with fun, functional designs.', 'Household', ' Our broad range of products combine ergonomic design with innovative technologies to deliver superior cleaning power. Our texture changing non-toxic and scratch-free smiling scrubbers are the smart solution for kitchen and bathroom cleaning. Odor resistant and dual-use sponges and scouring pads are perfect for delicate applications as well as heavy-duty jobs. Eraser Daddy brightens the surfaces around your home in seconds while far outlasting competeing eraser pads. The Scrub Daddy family can handle any cleaning job around your home with a smile', 'Aaron Krause', 120000, 1000000, 10, 200, '', 'https://youtu.be/fyg-yYiDJ2M', 'Bank Of America', 12345678901, 'Bootstrap', 500, 'No', 0, 22, 5, 100, '2023-01-01', 'Dec', 'Jan', 'Feb', 10200, 8700, 7300, 'scrubdaddy@123', NULL),
('smartsoda@gmail.com', 'Smart Soda', '2017-01-01', ' To provide vitamin infused flavared sparkling waters & craft sodas.', '6095 Parkland Blvd Suite 300', ' Cleveland, OH 44124', 'Ohio', 'USA', 'Cleveland', 0, 'SMART SODA IS A UNIVERSE OF FUNCTIONAL BEVERAGES, SERVING UP AN ODYSSEY OF FLAVOR AND REFRESHMENT FOR FOOD SERVICE, THE WORKPLACE, AND ON-THE-GO.', 'Food', ' We are much more than a simple brand or beverage company. We are a story of commitment and passion to each member of our team and to the health and happiness of every person on this planet. From our integrity in business, to the tasty, refreshing, and energizing drinks we offer, we bring life and vitality to the scene. It is within our very nature to live up to and deliver everyday effervescence.Effervescence-the bubbles that dance in liquid-increase the brain’s sense of flavor, aroma, and pleasure. It revolutionizes our senses, our thinking, and our parameters of pleasure. Smart Soda is here to embody and dispense.', 'lior shafir', 500000, 1000000, 5.5, 110, '', 'https://www.youtube.com/watch?v=u3jhmaeEJbI', 'Chase Bank', 9876544321001, 'Bootstrap', 500, 'Yes', 5, 5, 5, 100, '2023-01-01', 'Dec', 'Jan', 'Feb', 17500, 19000, 20000, 'Smart@soda', NULL),
('pizzacupcake@gmail.com', 'Pizza Cup Cake', '2018-01-01', 'To provide new pizza experience that\'s a conveniently cupcake-shaped snack ', '130 Water St 3C', '', 'NewYork', 'USA', 'Brooklyn', 0, 'a new pizza experience that\'s a conveniently cupcake-shaped snack, perfect for when you want pizza on the go', 'Food', 'The Pizza Cupcake, made with love in Brooklyn, NY, It is filled with real mozzarella cheese, and imported.Italian tomatoes, along with atrade-secret dough(Not traditional pizza dough)that is flaky and savory.', 'Michelle Jimenez-Meggiato,Andrea Meggiato', 770000, 25000000, 5, 2500, '', 'https://youtu.be/7-1EEwPQ_38', 'Bank of america', 785462895468, 'BootStrap', 500, 'No', 0, 25, 55, 100, '2022-12-30', 'Dec', 'Jan', 'Feb', 21000, 24000, 26000, 'Pizza@12345', 0),
('sujithne512@gmail.com', 'INVESTIRE', '2023-03-29', 'TESTING Investire', 'Albany', 'Albany', 'albany', 'United States', 'albany', 0, '\nInvestire is a crowdfunding platform that enables entrepreneurs and small businesses to raise funds from a large pool of investors, including non-accredited investors. The platform provides an opportunity for companies to showcase their business concepts, products, and services, and enables them to raise capital through equity crowdfunding, allowing investors to buy shares in the company. Investire also offers a range of resources and tools to help businesses navigate the fundraising process, such as investor relations management and compliance assistance. Overall, Investire is an excellent resource for startups and small businesses seeking to raise funds and expand their businesses through crowdfunding.\n', 'Others', 'Investire is a crowdfunding platform that enables entrepreneurs and small businesses to raise funds from a large pool of investors, including non-accredited investors. The platform provides an opportunity for companies to showcase their business concepts, products, and services, and enables them to raise capital through equity crowdfunding, allowing investors to buy shares in the company. Investire also offers a range of resources and tools to help businesses navigate the fundraising process, such as investor relations management and compliance assistance. Overall, Investire is an excellent resource for startups and small businesses seeking to raise funds and expand their businesses through crowdfunding.\n', 'ABC , XYZ', 500000, 1000000, 10, 200, '', '', 'Bank Of America', 1234123412, 'BOOTSTRAP', 500, '', 0, 23, 45, 100, '2023-05-10', 'JAN', 'FEB', 'MAR', 12000, 14000, 14500, 'Startup@123', 9900990099),
('kommidi.jithin@gmail.com', 'Just the Cheese', '2023-04-14', 'The vision of Just the Cheese is to create delicious and healthy snacks made from real cheese that satisfy the cravings of cheese lovers while also meeting the dietary needs of people who are looking for low-carb, gluten-free, and sugar-free options.', 'Wisconsin', 'Wisconsin', 'Wisconsin', 'United States', 'Wisconsin', 0, 'Just the Cheese is a snack food company that specializes in creating delicious and healthy snacks made from real cheese. The company was founded in 2017 and is based in Wisconsin, USA. Just the Cheese\'s snacks are made with 100% Wisconsin cheese and are baked until they are crispy and crunchy. The company offers a range of snack options, including bars, bites, and chips, that are gluten-free, sugar-free, and low-carb.\n\nWhat sets Just the Cheese apart is its commitment to using high-quality, natural ingredients in its products. The company believes that healthy snacking can be both delicious and satisfying, and aims to offer a snack that meets the cravings of cheese lovers while also meeting dietary needs. Just the Cheese\'s snacks are a convenient and tasty snack option that can be enjoyed on-the-go, at home, or at work.\n\nIn addition, Just the Cheese is committed to promoting sustainability and ethical practices in its manufacturing process. The company uses sustainable materials and aims to minimize waste in its production process. Just the Cheese is also dedicated to supporting fair labor standards and ethical practices in its supply chain.\n\nOverall, Just the Cheese is a company that is focused on providing consumers with a tasty and healthy snack option that meets changing dietary needs and preferences. The company is committed to quality, sustainability, and ethical practices, and aims to be a leading brand in the healthy snack food industry.', 'Food', 'Just the Cheese offers a range of delicious and healthy snack options that are made from real cheese. Each of their products is gluten-free, sugar-free, and low-carb, making them a great snack option for people who are looking for healthier choices. Below are some of the product descriptions of Just the Cheese\'s offerings:\n\nCrunchy Cheese Bars: These bars are made with 100% Wisconsin cheese and are baked until they are crispy and crunchy. They come in a variety of flavors, including aged cheddar, grilled cheese, jalapeno, and mild cheddar. The bars are individually wrapped, making them a convenient snack option for on-the-go.\nCrunchy Cheese Bites: Just the Cheese\'s bites are bite-sized pieces of their popular Crunchy Cheese Bars. They come in the same flavors as the bars and are perfect for snacking or for adding to salads and other dishes.\nCrunchy Cheese Chips: These chips are made with the same 100% Wisconsin cheese as the bars and bites, but are cut into thin, crispy chips. They come in three flavors: aged cheddar, grilled cheese, and jalapeno.\nAll of Just the Cheese\'s products are made using high-quality, natural ingredients and are baked until they are crispy and crunchy. They are a tasty and satisfying snack option that is perfect for cheese lovers who want a healthy and convenient snack.', 'Just the Cheese was founded by Jill and David Solmonson, a husband-and-wife team from Wisconsin, USA. The idea for Just the Cheese came about when Jill was looking for a low-carb snack that would satisfy her cravings for something cheesy and crunchy. Unable to find a suitable option on the market, Jill and David decided to create their own snack using their favorite cheese, Wisconsin cheddar.\n\nAfter experimenting with different recipes and production methods, the Solmonsons developed a unique baking process that resulted in a crispy and crunchy cheese snack. They began selling their homemade snacks at local farmers\' markets and quickly gained a following of loyal customers. Encouraged by the positive feedback, Jill and David decided to turn their passion for cheese into a business, and founded Just the Cheese in 2017.\n\nSince then, the Solmonsons have been dedicated to creating innovative and delicious cheese-based snacks that meet the changing needs and preferences of consumers. They continue to be actively involved in the day-to-day operations of the company, ensuring that every product meets their high standards of quality and taste.', 250000, 1000000, 20, 200, '', 'https://www.youtube.com/watch?v=EI9C5IHWdYk', 'BOFA', 11111111111, 'Bootstrap', 1000, '', 0, 30, 72, 100, '2023-06-20', 'JAN', 'FEB', 'MAR', 120000, 130000, 136800, 'Startup@123', 9999999999),
('stest@gmail.com', 'Testing startUp', '2023-02-26', 'ssfdf', 'da', 'gggghrsrsr', 'ffgh', 'United States', 'sfg', 0, 'sddf', 'E-Commerce', 'ddg', 'asf', 22000000, 450000, 55, 495, '', 'https://youtu.be/2iHoeHVmw0Q', 'sfgh', 46789900000, 'Daymond Garfield John,', 500, 'Yes', 0, 1, 22, 23, '2023-05-02', 'JAN', 'FEB', 'MAR', 777, 7890, 5678, '123', 9876543455),
('Vineela.uf140@gmail.com', 'Bertello Pizza Oven', '2011-12-20', 'The vision of the Bertello Pizza Oven is to provide pizza lovers with an authentic and convenient way to enjoy delicious, wood-fired pizza without the need for a traditional brick oven. With its compact size and easy-to-use design, the Bertello Pizza Oven is perfect for backyard barbecues, camping trips, and other outdoor gatherings.', 'Albany', 'Albnay', 'NY', 'United States', 'Albany', 0, 'The Bertello Pizza Oven is a portable outdoor pizza oven that is designed to cook authentic wood-fired pizzas in the comfort of your own backyard or outdoor space. It is made of high-quality stainless steel and features a traditional dome shape that is reminiscent of traditional brick ovens.\n\nThe oven has a cooking surface that measures approximately 12.5 inches by 13.5 inches, which is large enough to accommodate pizzas of various sizes. It can reach temperatures of up to 930°F (500°C), which is ideal for cooking pizzas quickly and evenly.\n\nThe Bertello Pizza Oven is fueled by either wood pellets or charcoal, which makes it easy to set up and use. It also comes with a cordierite pizza stone that helps to evenly distribute heat and ensures a crispy, perfectly cooked crust.\n\n', 'Machinery(Hardware technology)', ': The Bertello Pizza Oven has a cooking surface that measures approximately 12.5 inches by 13.5 inches, which is large enough to accommodate pizzas of various sizes. The oven can reach temperatures of up to 930°F (500°C), which is ideal for cooking pizzas quickly and evenly.\n\nThe oven is fueled by either wood pellets or charcoal, which makes it easy to set up and use. It also comes with a cordierite pizza stone that helps to evenly distribute heat and ensures a crispy, perfectly cooked crust.\n\nThe Bertello Pizza Oven has a built-in thermometer that allows you to monitor the temperature inside the oven, and it also has a venting system that helps to regulate airflow and maintain consistent heat.\n\nThe oven is portable and easy to move, making it ideal for outdoor gatherings and camping trips. The oven weighs approximately 29 pounds and can be assembled in minutes without any special tools.\n \n', 'Bertello Pizza Oven is a product of Bertello Inc., a company that specializes in manufacturing and distributing outdoor cooking equipment. The company was founded with the goal of creating high-quality outdoor pizza ovens that are affordable and easy to use.\n\nBertello Inc. is headquartered in Chicago, Illinois, and it has quickly gained popularity among pizza lovers and outdoor cooking enthusiasts. The company is committed to using high-quality materials and innovative design to create products that provide an authentic and enjoyable cooking experience.\n\nOverall, Bertello Inc. and its founders are dedicated to providing customers with high-quality outdoor cooking equipment, and they have a passion for creating products that make it easy to enjoy delicious, restaurant-quality food in the comfort of your own backyard.\n', 200000, 1000000, 20, 200, '', 'https://www.youtube.com/watch?v=U8VGU__fV8Y', 'BOFA', 12345678911, 'Bootstrap', 1000, '', 0, 23, 54, 100, '2023-06-20', 'JAN', 'FEB', 'MAR', 12000, 15000, 18000, 'Startup@123', 8899889988),
('larq@gmail.com', 'LARQ', '2017-12-31', ' Making clean drinking water accessible', '1900 South Norfolk Street', ' Suite 350', 'CA', 'USA', 'san mateo', 0, 'Larq is a self-cleaning and self-water purification system', 'Household', ' You are what you drink. So drink brilliantly LARQ’s approach to product innovation is driven by a single purpose - we make it easy to opt for the healthier and more sustainable hydration choice, anytime and anywhere. Our award winning lineup of hydration products improves water quality, taste and overall convenience so reaching for that single-use bottle is never a better option. Drink with a purpose - Committed to sustainability, a portion of every LARQ purchase gives back, funding environmental nonprofits around the world as well as bringing safe drinking water to billions of people worldwide—because access to clean drinkable water is not a privilege, it\'s a right.', 'Justin Wang', 14000000, 50000000, 1, 1000, '', 'https://www.youtube.com/watch?v=fuM1Vh7OgfY', 'Bank Of America', 123456781111, 'Bootstrap', 500, 'No', 0, 22, 32, 78, '2023-05-17', 'Dec', 'Jan', 'Feb', 1100000, 1000000, 990000, 'larq@123', 0),
('vengo@gmail.com', 'Vengo Labs', '2011-12-31', ' To provide a comapack vending machine  ', '999 S Oyster Bay Rd Building 407', 'Bethpage, NY 11714', 'Arizona', 'USA', 'Bethpage', 0, 'Vengo delivers content and advertising to your target audience when and where they go. Vengo helps screen owners optimize ad revenue through programmatic Digital Out Of Home (DOOH) advertising', 'Machines', 'Place-Based Retail - Consumers purchase products when and where they need them Example: A gym member forgot her lock and can easily purchase one in the locker room.             Digital Out-of-Home (DOOH) Media Network - Brands can deliver their messages to people on the go, in contextually relevant locations.Example: An airline promotes a new loyalty offer to hotel guests.                                 Vengo Media Network Platform - Our software platform turns any screen into a DOOH screen and enables content and paid advertising without having to do any work through a simple no-code integration.', 'Brian Shimmerlik, steven bofill', 1000000, 16000000, 12.5, 4000, '', 'https://youtu.be/S9ffi91UiEQ', 'Bank Of America', 111845678901, 'Bootstraped', 500, 'No', 0, 10, 23, 100, '2023-05-30', 'Jan', 'Feb', 'Mar', 75000, 80000, 97000, 'Vengo@labs', 0),
('stest2@gmail.com', 'Testing startUp', '2023-02-28', 'ssfdf', 'da', 'gggghrsrsr', 'ffgh', 'India', 'sfg', 0, 'sddf', 'E-Commerce', 'ddg', 'asf', 22000000, 450000, 55, 495, '', '', 'sfgh', 46789900000, '', 500, 'Yes', 40, 1, 22, 23, '2023-08-24', 'JAN', 'FEB', 'MAR', 777, 7890, 5678, '123', 9876543455),
('bvksnsandeep@gmail.com', 'Simply fit board', '2015-04-04', 'Make excersice fun and engaging\n\n', 'Albany', 'Albany', 'NY', 'United States', 'albany', 0, 'The Simply Fit Board is a startup company that produces a balance board for exercise and fitness purposes. The board is designed to engage the core muscles, improve balance and coordination, and provide a low-impact workout. The company was founded in 2015 by Gloria Hoffman and Linda Clark, who appeared on the TV show Shark Tank and secured funding from the investors. Since then, the company has grown rapidly, and the Simply Fit Board has become a popular fitness product with a large following. The board is portable, lightweight, and easy to use, making it an accessible option for people of all ages and fitness levels.', 'Others', 'The Simply Fit Board is a lightweight and durable fitness device that helps improve balance, core strength, and coordination. Its curved design enables low-impact exercises, making it suitable for all ages and fitness levels. The board is easy to use, requires no assembly, and is portable for use on-the-go. It comes in a variety of colors and patterns, with workout videos and instructions available for free. With Simply Fit Board, users can achieve their fitness goals and improve their overall health and well-being.', '\nGloria Hoffman and Linda Clark are the co-founders of the Simply Fit Board startup. Hoffman is a former nurse who had struggled with her weight and fitness for years before inventing the Simply Fit Board. She was inspired to create the board after using a similar device in a physical therapy session, and realizing how effective it was for improving her balance and core strength.\n', 50000, 100000, 20, 20, '', ' https://www.youtube.com/watch?v=pTOnM5K_WIM', 'BOFA', 11222222333, 'Bootstrap', 1000, '', 0, 34, 45, 100, '2023-04-29', 'JAN', 'FEB', 'MAR', 12000, 13000, 15000, 'Start@123', 9999999999);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `investors`
--
ALTER TABLE `investors`
  ADD PRIMARY KEY (`Email`),
  ADD UNIQUE KEY `SSN` (`SSN`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
