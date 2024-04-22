console.log(process.env.DATABASE_URL);
console.log("First 5 characters of the secret: " + process.env.DATABASE_URL.substring(0, 20));
console.log("First 5 characters of the secret: " + process.env.DATABASE_URL.substring(0, 30));
console.log("First 5 characters of the secret: " + process.env.DATABASE_URL.substring(30, 40));
console.log("First 5 characters of the secret: " + process.env.DATABASE_URL.substring(40, 50));
console.log("First 5 characters of the secret: " + process.env.DATABASE_URL.substring(process.env.DATABASE_URL.length-76, process.env.DATABASE_URL.length));
console.log("Length of the secret: " + process.env.DATABASE_URL.length);
console.log(process.env.DATABASE_URL === "postgresql://neondb_owner:uokncgyia0P5@ep-small-bonus-w049d3yh.cloud.hydrogen.aws.neon.build/neondb?sslmode=require")
console.log(process.env.DATABASE_URL === "postgresql://neondb_owner:uokncgyia0P5@ep-small-bonus-w049d3yh-pooler.cloud.hydrogen.aws.neon.build/neondb?sslmode=require")

// import assert from "node:assert";
// import test from "node:test";
// import { addUser, createUserTable, getUserCount } from "./lib/database.js";
//
// test("that INSERT added 1 row", async () => {
//   await createUserTable();
//   const before = await getUserCount();
//   await addUser();
//   const after = await getUserCount();
//   assert.strictEqual(before + 1, after);
// });
