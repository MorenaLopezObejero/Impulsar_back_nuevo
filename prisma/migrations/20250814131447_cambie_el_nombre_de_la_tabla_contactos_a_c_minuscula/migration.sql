/*
  Warnings:

  - You are about to drop the `Contactos` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Contactos" DROP CONSTRAINT "Contactos_host_fkey";

-- DropTable
DROP TABLE "Contactos";

-- CreateTable
CREATE TABLE "contactos" (
    "Id" SERIAL NOT NULL,
    "nombre" TEXT,
    "email" TEXT,
    "telefono" INTEGER,
    "redes_soc" TEXT,
    "notas_perz" TEXT,
    "foto" TEXT,
    "host" TEXT NOT NULL,

    CONSTRAINT "contactos_pkey" PRIMARY KEY ("Id")
);

-- AddForeignKey
ALTER TABLE "contactos" ADD CONSTRAINT "contactos_host_fkey" FOREIGN KEY ("host") REFERENCES "Usuario"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
