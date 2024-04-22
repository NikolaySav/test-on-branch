console.log(process.env.DATABASE_URL);
console.log("First 5 characters of the secret: " + process.env.DATABASE_URL.substring(0, 10));
console.log("Length of the secret: " + process.env.DATABASE_URL.length);

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
