/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "ColorPiel" AS ENUM ('PIEL', 'AMARILLO', 'ROJO', 'PURPURA', 'PRIETO');

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Rabanoide" (
    "id" SERIAL NOT NULL,
    "colorpiel" "ColorPiel" NOT NULL DEFAULT 'PIEL',

    CONSTRAINT "Rabanoide_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Item" (
    "id" SERIAL NOT NULL,
    "itemId" INTEGER NOT NULL,

    CONSTRAINT "Item_pkey" PRIMARY KEY ("id")
);
