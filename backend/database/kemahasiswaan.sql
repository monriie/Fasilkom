SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

-- --------------------------------------------------------

-- Table structure for table `kemahasiswaan`

CREATE TABLE `kemahasiswaan` (
    `id` bigint(20) UNSIGNED NOT NULL,
    `created_at` datetime(3) DEFAULT NULL,
    `updated_at` datetime(3) DEFAULT NULL,
    `deleted_at` datetime(3) DEFAULT NULL,
    `cover_kemahasiswaan` longtext NOT NULL,
    `deskripsi` longtext NOT NULL,
    `posted_at` datetime(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

-- Dumping data for table `kemahasiswaan`

-- --------------------------------------------------------

-- Indexes for table `kemahasiswaan`

ALTER TABLE `kemahasiswaan`
    ADD PRIMARY KEY (`id`),
    ADD KEY `idx_kemahasiswaan_deleted_at` (`deleted_at`);

-- --------------------------------------------------------

-- AUTO_INCREMENT for table `kemahasiswaan`

ALTER TABLE `kemahasiswaan`
    MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;
COMMIT;