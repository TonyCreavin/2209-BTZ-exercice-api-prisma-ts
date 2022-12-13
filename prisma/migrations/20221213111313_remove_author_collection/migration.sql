/*
  Warnings:

  - You are about to drop the column `authorId` on the `Collection` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `Collection` DROP FOREIGN KEY `Collection_authorId_fkey`;

-- AlterTable
ALTER TABLE `Collection` DROP COLUMN `authorId`;
