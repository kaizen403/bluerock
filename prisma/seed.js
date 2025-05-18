// prisma/seed.js
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcryptjs");
const prisma = new PrismaClient();

function getRandomBalance() {
  return parseFloat((Math.random() * (100_000 - 10_000) + 10_000).toFixed(2));
}

const names = [
  ["Alice", "Johnson"],
  ["Bob", "Smith"],
  ["Carol", "Williams"],
  ["David", "Brown"],
  ["Emma", "Davis"],
  ["Frank", "Miller"],
  ["Grace", "Wilson"],
  ["Henry", "Moore"],
  ["Irene", "Taylor"],
  ["Jack", "Anderson"],
  ["Karen", "Thomas"],
  ["Liam", "Jackson"],
  ["Mia", "White"],
  ["Noah", "Harris"],
];

async function main() {
  const defaultPwd = "Password123";
  const specialPwd = "TopSecret!2025";
  const [hashedDefault, hashedSpecial] = await Promise.all([
    bcrypt.hash(defaultPwd, 10),
    bcrypt.hash(specialPwd, 10),
  ]);

  // Create 14 regular users
  for (let i = 0; i < names.length; i++) {
    const [firstName, lastName] = names[i];
    await prisma.user.create({
      data: {
        firstName,
        lastName,
        email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@bank.com`,
        passwordHash: hashedDefault,
        accountNumber: `ACC${String(10000 + i).padStart(6, "0")}`,
        balance: getRandomBalance(),
        accountType: ["checking", "savings", "credit"][i % 3],
        status: "active",
      },
    });
    console.log(`Created ${firstName} ${lastName}`);
  }

  // Create 1 special high‑balance user
  await prisma.user.create({
    data: {
      firstName: "Eleanor",
      lastName: "Parker",
      email: "eleanor.parker@bank.com",
      passwordHash: hashedSpecial,
      accountNumber: `ACC${String(10000 + names.length).padStart(6, "0")}`,
      balance: 1_500_000.0,
      accountType: "savings",
      status: "active",
    },
  });
  console.log("Created special user Eleanor Parker with $1.5M");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
