/*
  Warnings:

  - Added the required column `descripcion` to the `Productos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Productos" ADD COLUMN     "descripcion" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Productos" ADD CONSTRAINT "Productos_tipo_fkey" FOREIGN KEY ("tipo") REFERENCES "Typo_emprendimiento"("typo") ON DELETE RESTRICT ON UPDATE CASCADE;
