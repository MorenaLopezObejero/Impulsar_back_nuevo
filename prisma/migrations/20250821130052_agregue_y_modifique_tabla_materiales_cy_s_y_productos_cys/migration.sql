/*
  Warnings:

  - Added the required column `emprendimiento` to the `Materiales_CyS` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Materiales_CyS" ADD COLUMN     "emprendimiento" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Productos_CyS" (
    "Id" SERIAL NOT NULL,
    "costo" TEXT NOT NULL,
    "stock" INTEGER NOT NULL,
    "producto" TEXT NOT NULL,
    "emprendimiento" INTEGER NOT NULL,

    CONSTRAINT "Productos_CyS_pkey" PRIMARY KEY ("Id")
);

-- AddForeignKey
ALTER TABLE "Productos_CyS" ADD CONSTRAINT "Productos_CyS_producto_fkey" FOREIGN KEY ("producto") REFERENCES "Productos"("nombre") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Productos_CyS" ADD CONSTRAINT "Productos_CyS_emprendimiento_fkey" FOREIGN KEY ("emprendimiento") REFERENCES "Emprendimiento"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Materiales_CyS" ADD CONSTRAINT "Materiales_CyS_emprendimiento_fkey" FOREIGN KEY ("emprendimiento") REFERENCES "Emprendimiento"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;
