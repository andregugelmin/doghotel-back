/*
  Warnings:

  - Added the required column `totalPrice` to the `hostings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isAccepted` to the `requests` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isActive` to the `requests` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalPrice` to the `requests` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "hostings" ADD COLUMN     "totalPrice" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "requests" ADD COLUMN     "isAccepted" BOOLEAN NOT NULL,
ADD COLUMN     "isActive" BOOLEAN NOT NULL,
ADD COLUMN     "totalPrice" INTEGER NOT NULL;
