# Migration `20201026140944-init`

This migration has been generated by fabianmoronzirfas at 10/26/2020, 3:09:44 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "public"."Cat" (
"id" SERIAL,
"createdAt" timestamp(3)   NOT NULL DEFAULT CURRENT_TIMESTAMP,
"name" text   NOT NULL ,
"catchPhrase" text   ,
PRIMARY KEY ("id")
)

CREATE TABLE "public"."Mood" (
"id" SERIAL,
"name" text   NOT NULL ,
"catId" integer   ,
PRIMARY KEY ("id")
)

ALTER TABLE "public"."Mood" ADD FOREIGN KEY ("catId")REFERENCES "public"."Cat"("id") ON DELETE SET NULL ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20201026140944-init
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,26 @@
+// This is your Prisma schema file,
+// learn more about it in the docs: https://pris.ly/d/prisma-schema
+
+datasource db {
+  provider = "postgresql"
+  url = "***"
+}
+
+generator client {
+  provider = "prisma-client-js"
+}
+
+model Cat {
+  id          Int      @id @default(autoincrement())
+  createdAt   DateTime @default(now())
+  name        String
+  catchPhrase String?
+  moods       Mood[]
+}
+
+model Mood {
+  id    Int    @id @default(autoincrement())
+  name  String
+  Cat   Cat?   @relation(fields: [catId], references: [id])
+  catId Int?
+}
```

