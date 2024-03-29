/*
  Warnings:

  - The primary key for the `Product` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Product" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "ref" INTEGER,
    "desc" TEXT,
    "brand" TEXT,
    "img" TEXT,
    "inStock" BOOLEAN,
    "category" TEXT,
    "price" DECIMAL NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Product" ("brand", "category", "createdAt", "desc", "id", "img", "inStock", "price", "ref") SELECT "brand", "category", "createdAt", "desc", "id", "img", "inStock", "price", "ref" FROM "Product";
DROP TABLE "Product";
ALTER TABLE "new_Product" RENAME TO "Product";
CREATE UNIQUE INDEX "Product_ref_key" ON "Product"("ref");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
