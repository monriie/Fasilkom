SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

-- --------------------------------------------------------

-- Table structure for table `akademik`
CREATE TABLE `akademik` (
    `id` bigint(20) UNSIGNED NOT NULL,
    `created_at` datetime(3) DEFAULT NULL,
    `updated_at` datetime(3) DEFAULT NULL,
    `deleted_at` datetime(3) DEFAULT NULL,
    `coverakademik` longtext NOT NULL,
    `tanggal` datetime(3) NOT NULL,
    `deskripsi` longtext NOT NULL,
    `posted_at` datetime(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

-- Dumping data for table `akademik`

-- --------------------------------------------------------

-- Indexes for table `akademik`
ALTER TABLE `akademik`
    ADD PRIMARY KEY (`id`),
    ADD KEY `idx_akademik_deleted_at` (`deleted_at`);

-- --------------------------------------------------------

-- AUTO_INCREMENT for table `akademik`
ALTER TABLE `akademik`
    MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;
COMMIT;