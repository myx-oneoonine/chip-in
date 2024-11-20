-- CreateTable
CREATE TABLE "Trips" (
    "id" TEXT NOT NULL,
    "title" TEXT,
    "expired_date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Trips_pkey" PRIMARY KEY ("id")
);
