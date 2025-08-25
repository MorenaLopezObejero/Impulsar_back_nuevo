/*
  Warnings:

  - You are about to drop the `contactos` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "contactos" DROP CONSTRAINT "contactos_host_fkey";

-- DropTable
DROP TABLE "contactos";

-- CreateTable
CREATE TABLE "Materiales_CyS" (
    "Id" SERIAL NOT NULL,
    "costo" TEXT NOT NULL,
    "stock" INTEGER NOT NULL,
    "materiales" TEXT NOT NULL,

    CONSTRAINT "Materiales_CyS_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Contactos" (
    "Id" SERIAL NOT NULL,
    "nombre" TEXT,
    "email" TEXT,
    "telefono" INTEGER,
    "redes_soc" TEXT,
    "notas_perz" TEXT,
    "foto" TEXT,
    "host" TEXT NOT NULL,

    CONSTRAINT "Contactos_pkey" PRIMARY KEY ("Id")
);

-- AddForeignKey
ALTER TABLE "Materiales_CyS" ADD CONSTRAINT "Materiales_CyS_materiales_fkey" FOREIGN KEY ("materiales") REFERENCES "Materiales"("nombreMat") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contactos" ADD CONSTRAINT "Contactos_host_fkey" FOREIGN KEY ("host") REFERENCES "Usuario"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
