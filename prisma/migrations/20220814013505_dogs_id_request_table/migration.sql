/*
  Warnings:

  - You are about to drop the column `requestId` on the `dogs` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "dogs" DROP CONSTRAINT "dogs_requestId_fkey";

-- AlterTable
ALTER TABLE "dogs" DROP COLUMN "requestId";

-- AlterTable
ALTER TABLE "requests" ADD COLUMN     "dogsIds" INTEGER[];
