SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


--
-- Database: `selaski`
--
CREATE DATABASE IF NOT EXISTS `selaski` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `selaski`;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
CREATE TABLE `orders` (
  `IdOrder` bigint(20) UNSIGNED NOT NULL,
  `IdUser` bigint(20) UNSIGNED NOT NULL,
  `OrderNumber` int(11) NOT NULL,
  `DateTime` datetime NOT NULL,
  `ProviderName` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `DateCreated` date NOT NULL,
  `Observation` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `TotalValue` double(8,2) NOT NULL,
  `Status` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `orders` (`IdOrder`, `IdUser`, `OrderNumber`, `DateTime`, `ProviderName`, `DateCreated`, `Observation`, `TotalValue`, `Status`) VALUES
(1, 1, 123, '2022-06-02 19:07:02', '123', '2022-06-02', 'observation test', 12456.12, 1);


--
-- Table structure for table `ordersproducts`
--

DROP TABLE IF EXISTS `ordersproducts`;
CREATE TABLE `ordersproducts` (
  `IdOrdersProducts` bigint(20) UNSIGNED NOT NULL,
  `IdOrder` bigint(20) UNSIGNED NOT NULL,
  `ValueUnit` double(8,2) NOT NULL,
  `Unit` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Description` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `SKU` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Quantity` int(11) NOT NULL,
  `QtyBox` int(11) NOT NULL,
  `Weight` double(8,2) NOT NULL,
  `Volumen` double(8,2) NOT NULL,
  `Mark` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Status` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `ordersproducts`
--

INSERT INTO `ordersproducts` (`IdOrdersProducts`, `IdOrder`, `ValueUnit`, `Unit`, `Description`, `SKU`, `Quantity`, `QtyBox`, `Weight`, `Volumen`, `Mark`, `Status`) VALUES
(7, 1, 0.00, 'Unit2', 'Description2', 'SKU', 0, 0, 0.00, 0.00, 'Mark', 1),
(8, 1, 0.00, 'Unit4', 'Description4', 'SKU', 0, 0, 0.00, 0.00, 'Mark', 1),
(11, 1, 0.00, 'Unit', 'Description', 'SKU', 0, 0, 0.00, 0.00, 'Mark', 1);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `IdUser` bigint(20) UNSIGNED NOT NULL,
  `Name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Status` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`IdUser`, `Name`, `Email`, `Status`) VALUES
(1, 'test', 'test15@email.com', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`IdOrder`),
  ADD KEY `orders_iduser_foreign` (`IdUser`);

--
-- Indexes for table `ordersproducts`
--
ALTER TABLE `ordersproducts`
  ADD PRIMARY KEY (`IdOrdersProducts`),
  ADD KEY `ordersproducts_idorder_foreign` (`IdOrder`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`IdUser`),
  ADD UNIQUE KEY `user_email_unique` (`Email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `IdOrder` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `ordersproducts`
--
ALTER TABLE `ordersproducts`
  MODIFY `IdOrdersProducts` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `IdUser` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_iduser_foreign` FOREIGN KEY (`IdUser`) REFERENCES `user` (`IdUser`);

--
-- Constraints for table `ordersproducts`
--
ALTER TABLE `ordersproducts`
  ADD CONSTRAINT `ordersproducts_idorder_foreign` FOREIGN KEY (`IdOrder`) REFERENCES `orders` (`IdOrder`);
COMMIT;

