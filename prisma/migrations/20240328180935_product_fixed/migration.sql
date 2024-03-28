/*
  Warnings:

  - You are about to alter the column `price` on the `Product` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Decimal`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "ref" INTEGER,
    "desc" TEXT,
    "brand" TEXT,
    "img" TEXT,
    "inStock" BOOLEAN,
    "category" TEXT,
    "price" DECIMAL NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Product" ("brand", "category", "desc", "id", "img", "inStock", "price", "ref") SELECT "brand", "category", "desc", "id", "img", "inStock", "price", "ref" FROM "Product";
DROP TABLE "Product";
ALTER TABLE "new_Product" RENAME TO "Product";
CREATE UNIQUE INDEX "Product_ref_key" ON "Product"("ref");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
