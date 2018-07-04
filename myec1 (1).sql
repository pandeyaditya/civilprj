-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jul 04, 2018 at 09:03 AM
-- Server version: 5.7.22-0ubuntu0.16.04.1
-- PHP Version: 7.1.2-4+deb.sury.org~xenial+1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `myec1`
--

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
  `id` int(11) NOT NULL,
  `name` varchar(200) NOT NULL,
  `address` text NOT NULL,
  `email` varchar(200) NOT NULL,
  `phone` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`id`, `name`, `address`, `email`, `phone`) VALUES
(2, 'Nadya Eka', 'Jl. Ciwidey no 20', 'nadya@yahoo.com', '086454743743'),
(3, 'Amali', 'Jl. kemandoran no 10 Jakarta', 'amalia@langit.com', '03937263623'),
(4, 'Angel ', 'Jl. Ciledug no 45A. tanggerang', 'angel@gmail.com', '082271626121'),
(5, 'Ujang', 'Jl. ribut no 90 A', 'ujang@gmail.com', '07846352532'),
(6, 'Memet', 'Blok cepu no 14. Bandung', 'memet@ongkek.com', '038372636232'),
(9, 'Agung', 'Jl st Petersburg no 34. Russia', 'agung@yahoo.com', '038373273262'),
(10, 'Jhon Taylor', 'St paris A . Block 43. paris', 'jtaylor@yahoo.com', '039223232323');

-- --------------------------------------------------------

--
-- Table structure for table `dummyupload`
--

CREATE TABLE `dummyupload` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `file` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `images_tbl`
--

CREATE TABLE `images_tbl` (
  `id` int(11) NOT NULL,
  `property_id` int(11) NOT NULL,
  `property_image` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `images_tbl`
--

INSERT INTO `images_tbl` (`id`, `property_id`, `property_image`) VALUES
(118, 92, 'property3.jpg'),
(119, 92, 'property2.jpg'),
(120, 92, 'property1.jpg'),
(121, 93, 'property2.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `properties`
--

CREATE TABLE `properties` (
  `id` int(11) NOT NULL,
  `property_title` varchar(200) NOT NULL,
  `address` text NOT NULL,
  `location` varchar(200) NOT NULL,
  `category` varchar(20) NOT NULL,
  `bedroom` int(11) NOT NULL,
  `bathroom` int(11) NOT NULL,
  `carpet_area` varchar(15) NOT NULL,
  `builtup_area` varchar(15) NOT NULL,
  `description` text NOT NULL,
  `year_built` varchar(10) NOT NULL,
  `owner` varchar(50) NOT NULL,
  `country` varchar(20) NOT NULL,
  `city` varchar(20) NOT NULL,
  `is_featured` varchar(20) NOT NULL,
  `price` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `properties`
--

INSERT INTO `properties` (`id`, `property_title`, `address`, `location`, `category`, `bedroom`, `bathroom`, `carpet_area`, `builtup_area`, `description`, `year_built`, `owner`, `country`, `city`, `is_featured`, `price`) VALUES
(92, 'Metro Tower', 'This is test address', 'Near Metro Mall', 'Sale', 2, 2, '1400sq ft', '1000sq ft', 'this is test description                        ', '2012', 'Mr Kumar', 'India', 'Kalyan', 'yes', '1200000'),
(93, 'Raheja Towers', 'Test Address', 'Near Shil Phata', 'Rent', 2, 3, '1200', '1000', 'test description                        ', '2011', 'test', 'India', 'Mumbai', 'yes', '25000000'),
(94, 'Metro abc2 City', 'A-1,104,Rajshri Asha,Tejpal Nagri,Netivali Naka', 'Near Metro Mall', 'Sale', 1, 1, '1000sq ft', '800sq ft', 'test desc                        ', '2011', 'Aditya Pandey', 'India', 'Kalyan', 'yes', '2000000');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `email` text NOT NULL,
  `password` text NOT NULL,
  `firstname` text NOT NULL,
  `middle_name` text NOT NULL,
  `last_name` text NOT NULL,
  `description` varchar(5000) DEFAULT NULL,
  `company_logo` varchar(255) DEFAULT NULL,
  `country` varchar(20) DEFAULT NULL,
  `address` text NOT NULL,
  `phone` text NOT NULL,
  `fax` varchar(255) DEFAULT NULL,
  `user_level` int(2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `email`, `password`, `firstname`, `middle_name`, `last_name`, `description`, `company_logo`, `country`, `address`, `phone`, `fax`, `user_level`) VALUES
(1, 'pandeyaditya951@gmail.com', 'Adity@123', 'Aditya', '', 'Pandey', NULL, NULL, NULL, 'A-1,104,Rajshri Asha,Tejpal Nagri,Netivali Naka', '9702099730', NULL, 1),
(2, 'test@test.com', 'test123', 'undefined', 'undefined', 'undefined', NULL, NULL, NULL, 'A-1,104,Rajshri Asha,Tejpal Nagri,Netivali Naka', 'undefined', NULL, 2),
(3, 'aditya.pandey@printi.com.br', 'aditya123', 'undefined', 'undefined', 'undefined', NULL, NULL, NULL, 'test', 'undefined', NULL, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `dummyupload`
--
ALTER TABLE `dummyupload`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `images_tbl`
--
ALTER TABLE `images_tbl`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `properties`
--
ALTER TABLE `properties`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `customer`
--
ALTER TABLE `customer`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT for table `dummyupload`
--
ALTER TABLE `dummyupload`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `images_tbl`
--
ALTER TABLE `images_tbl`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=122;
--
-- AUTO_INCREMENT for table `properties`
--
ALTER TABLE `properties`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=95;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
