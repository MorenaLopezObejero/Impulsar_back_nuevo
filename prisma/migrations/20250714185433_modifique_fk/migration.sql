/*
  Warnings:

  - You are about to drop the column `producto` on the `Typo_emprendimiento` table. All the data in the column will be lost.
  - Added the required column `typo` to the `Productos` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Typo_emprendimiento" DROP CONSTRAINT "Typo_emprendimiento_producto_fkey";

-- AlterTable
ALTER TABLE "Productos" ADD COLUMN     "typo" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Typo_emprendimiento" DROP COLUMN "producto";

-- AddForeignKey
ALTER TABLE "Productos" ADD CONSTRAINT "Productos_typo_fkey" FOREIGN KEY ("typo") REFERENCES "Typo_emprendimiento"("typo") ON DELETE RESTRICT ON UPDATE CASCADE;
