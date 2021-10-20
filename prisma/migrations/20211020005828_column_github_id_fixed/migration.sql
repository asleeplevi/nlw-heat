/*
  Warnings:

  - You are about to drop the column `github_di` on the `users` table. All the data in the column will be lost.
  - Added the required column `github_id` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `users` DROP COLUMN `github_di`,
    ADD COLUMN `github_id` INTEGER NOT NULL;
