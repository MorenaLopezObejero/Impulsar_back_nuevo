/*
  Warnings:

  - You are about to drop the column `typo` on the `Productos` table. All the data in the column will be lost.
  - Added the required column `tipo` to the `Productos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Productos" DROP COLUMN "typo",
ADD COLUMN     "tipo" TEXT NOT NULL;
