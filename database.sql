SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


--
-- Database: `selaski`
--
CREATE DATABASE IF NOT EXISTS `Todo` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `Todo`;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `Todo`;


CREATE TABLE `todo` (
    `id` int NOT NULL AUTO_INCREMENT,
    `name` varchar(255) NOT NULL,
     `status` int(11),
    PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
