/*
  Warnings:

  - You are about to alter the column `size` on the `models` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `cacheSize` on the `models` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to drop the `customers` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `invoices` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `revenue` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[name]` on the table `brands` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `invoices` DROP FOREIGN KEY `invoices_customerId_fkey`;

-- AlterTable
ALTER TABLE `models` MODIFY `size` INTEGER NOT NULL,
    MODIFY `cacheSize` INTEGER NOT NULL;

-- DropTable
DROP TABLE `customers`;

-- DropTable
DROP TABLE `invoices`;

-- DropTable
DROP TABLE `revenue`;

-- CreateIndex
CREATE UNIQUE INDEX `brands_name_key` ON `brands`(`name`);
