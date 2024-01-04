-- CreateTable
CREATE TABLE `models` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `modelNumber` VARCHAR(191) NOT NULL,
    `link` VARCHAR(191) NOT NULL,
    `scraperCode` VARCHAR(191) NOT NULL,
    `brandsId` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `models` ADD CONSTRAINT `models_brandsId_fkey` FOREIGN KEY (`brandsId`) REFERENCES `brands`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
