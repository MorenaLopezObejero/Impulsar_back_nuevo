/*
  Warnings:

  - Made the column `nombre` on table `Contactos` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Contactos" ALTER COLUMN "nombre" SET NOT NULL;
