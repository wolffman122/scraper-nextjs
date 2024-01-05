/*
  Warnings:

  - Added the required column `cacheSize` to the `models` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `models` ADD COLUMN `cacheSize` VARCHAR(191) NOT NULL;
