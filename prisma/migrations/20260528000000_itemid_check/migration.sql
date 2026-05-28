-- Add check constraint to limit itemId between 0 and 12
ALTER TABLE "Item" ADD CONSTRAINT "Item_itemId_check" CHECK ("itemId" >= 0 AND "itemId" <= 12);
