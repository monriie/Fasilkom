SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

-- --------------------------------------------------------

-- Table structure for table `files`

CREATE TABLE `files` (
    `id` bigint(20) UNSIGNED NOT NULL,
    `created_at` datetime(3) DEFAULT NULL,
    `updated_at` datetime(3) DEFAULT NULL,
    `deleted_at` datetime(3) DEFAULT NULL,
    `file_name` longtext DEFAULT NULL,
    `file_path` longtext DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

-- Dumping data for table `files`

-- --------------------------------------------------------

-- Indexes for table `files`

ALTER TABLE `files`
    ADD PRIMARY KEY (`id`),
    ADD KEY `idx_files_deleted_at` (`deleted_at`);

-- --------------------------------------------------------

-- AUTO_INCREMENT for table `files`

ALTER TABLE `files`
    MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;
COMMIT;