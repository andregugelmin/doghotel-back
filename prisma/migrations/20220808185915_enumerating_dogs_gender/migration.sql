/*
  Warnings:

  - You are about to drop the column `sex` on the `dogs` table. All the data in the column will be lost.
  - Added the required column `gender` to the `dogs` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('Male', 'Female');

-- AlterTable
ALTER TABLE "dogs" DROP COLUMN "sex",
ADD COLUMN     "gender" "Gender" NOT NULL;
