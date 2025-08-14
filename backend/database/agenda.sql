SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

-- --------------------------------------------------------

--
-- Table structure for table `agenda`
--

CREATE TABLE `agendas` (
    `id` bigint(20) UNSIGNED NOT NULL,
    `created_at` datetime(3) DEFAULT NULL,
    `updated_at` datetime(3) DEFAULT NULL,
    `deleted_at` datetime(3) DEFAULT NULL,
    `coveragenda` longtext NOT NULL,
    `deskripsi` longtext NOT NULL,
    `posted_at` datetime(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for table `agenda`
--
ALTER TABLE `agendas`
    ADD PRIMARY KEY (`id`),
    ADD KEY `idx_agendas_deleted_at` (`deleted_at`);

--
-- AUTO_INCREMENT for table `agenda`
--
ALTER TABLE `agendas`
    
COMMIT;