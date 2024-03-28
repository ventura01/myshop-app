-- CreateTable
CREATE TABLE "Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "ref" INTEGER,
    "desc" TEXT,
    "brand" TEXT,
    "img" TEXT,
    "inStock" BOOLEAN,
    "category" TEXT,
    "price" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Product_ref_key" ON "Product"("ref");
