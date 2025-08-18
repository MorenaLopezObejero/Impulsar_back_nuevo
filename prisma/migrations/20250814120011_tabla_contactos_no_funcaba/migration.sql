/*
  Warnings:

  - You are about to drop the `Contactos` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Contactos" DROP CONSTRAINT "Contactos_host_fkey";

-- DropTable
DROP TABLE "Contactos";
