-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'USER');

-- CreateTable
CREATE TABLE "customers" (
    "id" TEXT NOT NULL,
    "nameAr" TEXT,
    "nameEng" TEXT,
    "idNumber" TEXT,
    "taxNumber" TEXT,
    "country" TEXT,
    "city" TEXT,
    "crNumber" TEXT,
    "location" TEXT,
    "address" TEXT,
    "buildingNum" TEXT,
    "phone" TEXT,
    "email" TEXT,
    "notes" TEXT,
    "compNameEng" TEXT,
    "compNameAr" TEXT,
    "gmNameEng" TEXT,
    "gmNameAr" TEXT,
    "gmIdNumber" TEXT,
    "companyActiv" TEXT,
    "natAddress" TEXT,
    "govNameEng" TEXT,
    "govNameAr" TEXT,
    "respPersonEng" TEXT,
    "respPersonAr" TEXT,
    "respPersonId" TEXT,
    "intCusNameEng" TEXT,
    "intCusNameAr" TEXT,
    "contractId" TEXT,
    "quotationId" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "type" TEXT,

    CONSTRAINT "customers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "first_name" TEXT,
    "last_name" TEXT,
    "sub" VARCHAR(50),
    "role" "Role" NOT NULL DEFAULT 'ADMIN',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
