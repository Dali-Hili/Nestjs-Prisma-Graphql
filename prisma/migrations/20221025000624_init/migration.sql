-- CreateTable
CREATE TABLE "customers" (
    "id" TEXT NOT NULL,
    "nameAr" TEXT NOT NULL,
    "nameEng" TEXT NOT NULL,
    "idNumber" TEXT NOT NULL,
    "taxNumber" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "crNumber" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "buildingNum" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "notes" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "type" TEXT NOT NULL DEFAULT 'INDIVIDUAL',

    CONSTRAINT "customers_pkey" PRIMARY KEY ("id")
);
