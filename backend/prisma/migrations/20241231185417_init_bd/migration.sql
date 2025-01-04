-- CreateEnum
CREATE TYPE "userStatus" AS ENUM ('administrator', 'Reader');

-- CreateEnum
CREATE TYPE "statusReservations" AS ENUM ('Active', 'Finished', 'Overdue');

-- CreateEnum
CREATE TYPE "bookStatus" AS ENUM ('Available', 'Reserved');

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "password" VARCHAR(100) NOT NULL,
    "typeUser" "userStatus" NOT NULL DEFAULT 'Reader',

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "reservations" (
    "id" SERIAL NOT NULL,
    "reservedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "returnAt" TIMESTAMP(3) NOT NULL,
    "status" "statusReservations" NOT NULL DEFAULT 'Active',
    "userId" INTEGER NOT NULL,

    CONSTRAINT "reservations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "books" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "category" VARCHAR(255) NOT NULL,
    "launch" TIMESTAMP(3) NOT NULL,
    "status" "bookStatus" NOT NULL DEFAULT 'Available',
    "amount" INTEGER NOT NULL,
    "authorId" INTEGER NOT NULL,
    "reserveId" INTEGER,

    CONSTRAINT "books_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "authors" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL DEFAULT 'Desconhecido',

    CONSTRAINT "authors_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "reservations" ADD CONSTRAINT "reservations_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "books" ADD CONSTRAINT "books_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "authors"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "books" ADD CONSTRAINT "books_reserveId_fkey" FOREIGN KEY ("reserveId") REFERENCES "reservations"("id") ON DELETE SET NULL ON UPDATE CASCADE;
