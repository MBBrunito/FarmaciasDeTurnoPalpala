-- CreateTable
CREATE TABLE "Farmacias" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "picture" TEXT,
    "logo" TEXT,
    "comment" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Farmacias_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Phone" (
    "id" TEXT NOT NULL,
    "number" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "farmaciasID" TEXT NOT NULL,

    CONSTRAINT "Phone_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Shift" (
    "id" TEXT NOT NULL,
    "sifhtDay" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "farmaciasId" TEXT NOT NULL,

    CONSTRAINT "Shift_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Farmacias_name_key" ON "Farmacias"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Farmacias_address_key" ON "Farmacias"("address");

-- CreateIndex
CREATE UNIQUE INDEX "Phone_number_key" ON "Phone"("number");

-- CreateIndex
CREATE UNIQUE INDEX "Phone_farmaciasID_key" ON "Phone"("farmaciasID");

-- AddForeignKey
ALTER TABLE "Phone" ADD CONSTRAINT "Phone_farmaciasID_fkey" FOREIGN KEY ("farmaciasID") REFERENCES "Farmacias"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Shift" ADD CONSTRAINT "Shift_farmaciasId_fkey" FOREIGN KEY ("farmaciasId") REFERENCES "Farmacias"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
