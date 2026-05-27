/*
  Warnings:

  - Added the required column `nombre` to the `Rabanoide` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Rabanoide" ADD COLUMN     "nombre" TEXT NOT NULL;
