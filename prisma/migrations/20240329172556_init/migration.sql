-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "ref" INTEGER,
    "desc" TEXT,
    "brand" TEXT,
    "img" TEXT,
    "inStock" BOOLEAN,
    "category" TEXT,
    "price" DECIMAL(65,30) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Product_ref_key" ON "Product"("ref");
