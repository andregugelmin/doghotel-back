-- AlterTable
ALTER TABLE "dogs" ADD COLUMN     "requestId" INTEGER;

-- AddForeignKey
ALTER TABLE "dogs" ADD CONSTRAINT "dogs_requestId_fkey" FOREIGN KEY ("requestId") REFERENCES "requests"("id") ON DELETE SET NULL ON UPDATE CASCADE;
