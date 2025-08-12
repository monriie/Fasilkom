SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

-- --------------------------------------------------------

-- Table structure for table `programstudi`
CREATE TABLE `programstudi` (
    `id` bigint(20) UNSIGNED NOT NULL,
    `created_at` datetime(3) DEFAULT NULL,
    `updated_at` datetime(3) DEFAULT NULL,
    `deleted_at` datetime(3) DEFAULT NULL,
    `logo` longtext NOT NULL,
    `jurusan` longtext NOT NULL,
    `deskripsi` longtext NOT NULL,
    `akreditasi` longtext NOT NULL,
    `jenjang` longtext NOT NULL,
    `posted_at` datetime(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table `programstudi`
INSERT INTO `programstudi` (`id`, `created_at`, `updated_at`, `deleted_at`, `logo`, `jurusan`, `deskripsi`, `akreditasi`, `jenjang`, `posted_at`) VALUES
(1, '2024-05-15 10:00:00.000', '2024-05-15 10:00:00.000', NULL, './assets/programstudi/1754436830183529000.jpeg', 'Teknik Informatika', 'Program studi yang berfokus pada pengembangan perangkat lunak, sistem informasi, dan teknologi komputer.', 'A', 'S1', '2024-05-15 10:00:00.000'),
(2, '2024-05-16 11:30:00.000', '2024-05-16 11:30:00.000', NULL, './assets/programstudi/1754436830183529000.jpeg', 'Sistem Informasi', 'Studi yang menggabungkan ilmu komputer dan bisnis untuk merancang, mengembangkan, dan mengelola sistem informasi.', 'A', 'S1', '2024-05-16 11:30:00.000'),
(3, '2024-05-17 12:45:00.000', '2024-05-17 12:45:00.000', NULL, './assets/programstudi/1754436830183529000.jpeg', 'Ilmu Hukum', 'Mempelajari dasar-dasar hukum, peradilan, dan sistem perundang-undangan.', 'B', 'S1', '2024-05-17 12:45:00.000'),
(4, '2024-05-18 14:00:00.000', '2024-05-18 14:00:00.000', NULL, './assets/programstudi/1754436830183529000.jpeg', 'Pendidikan Dokter', 'Mempelajari ilmu kedokteran untuk menjadi seorang dokter yang profesional.', 'A', 'S1', '2024-05-18 14:00:00.000'),
(5, '2024-05-19 15:20:00.000', '2024-05-19 15:20:00.000', NULL, './assets/programstudi/1754436830183529000.jpeg', 'Akuntansi', 'Program studi yang berfokus pada pencatatan, pengklasifikasian, dan pelaporan transaksi keuangan.', 'B', 'S1', '2024-05-19 15:20:00.000');
-- --------------------------------------------------------

-- Indexes for table `programstudi`

ALTER TABLE `programstudi`
    ADD PRIMARY KEY (`id`),
    ADD KEY `idx_programstudi_deleted_at` (`deleted_at`);

-- --------------------------------------------------------

-- AUTO_INCREMENT for table `programstudi`

ALTER TABLE `programstudi`
    MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;
COMMIT;


