SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

-- --------------------------------------------------------

-- Table structure for table `admins`
CREATE TABLE `admins` (
    `id` bigint(20) UNSIGNED NOT NULL,
    `created_at` datetime(3) DEFAULT NULL,
    `updated_at` datetime(3) DEFAULT NULL,
    `deleted_at` datetime(3) DEFAULT NULL,
    `username` varchar(191) NOT NULL,
    `password` longtext NOT NULL,
    `token` longtext DEFAULT NULL,
    `token_exp` datetime(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table `admins`

-- --------------------------------------------------------

-- Indexes for table `admins`

ALTER TABLE `admins`
    ADD PRIMARY KEY (`id`),
    ADD UNIQUE KEY `uni_admins_username` (`username`),
    ADD KEY `idx_admins_deleted_at` (`deleted_at`);

-- --------------------------------------------------------
-- AUTO_INCREMENT for table `admins`

ALTER TABLE `admins`
    MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;
    COMMIT;