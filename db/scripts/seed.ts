import { seedUsers } from "../seed/seed-users";

async function seed() {
  try {
    console.log("Starting seed process...");

    // Generate fresh random-password users and write them to user.seed.ts
    const users = await seedUsers({ regenerate: true });

    console.log(`Created ${users.length} test users:`);
    for (const user of users) {
      console.log(`  ${user.email} / ${user.password}`);
    }
    console.log("Seed data inserted successfully");
    process.exit(0);
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
}

seed();
