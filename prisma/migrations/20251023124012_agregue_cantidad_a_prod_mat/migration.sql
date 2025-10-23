/*
  Warnings:

  - Added the required column `cantidad` to the `Prod_Mat` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Prod_Mat" ADD COLUMN     "cantidad" TEXT NOT NULL;
