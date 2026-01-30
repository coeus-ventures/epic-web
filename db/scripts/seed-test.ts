import { expand } from "dotenv-expand";
import { config } from "dotenv";
import { db } from "../index";
import * as schema from "../schema";
import { auth } from "../../lib/auth";
import { userSeed } from "../seed/user.seed";

// Load .env, then overlay .env.test
expand(config({ path: ".env" }));
expand(config({ path: ".env.test", override: true }));

async function seedTestDatabase() {
  try {
    console.log("Setting up test database...");
    console.log(`DATABASE_URL: ${process.env.DATABASE_URL}`);

    // Push schema to test database
    console.log("Pushing schema...");
    const drizzleKit = await import("drizzle-kit/api");
    const { pushSQLiteSchema } = drizzleKit;
    const { apply } = await pushSQLiteSchema(schema, db);
    await apply();
    console.log("✅ Schema pushed");

    // Create test user
    console.log("Creating test user...");
    try {
      const result = await auth.api.signUpEmail({
        body: {
          email: userSeed.email,
          password: userSeed.password,
          name: "Test User",
        },
      });

      if (result?.user) {
        console.log(`✅ Created test user: ${result.user.email}`);
        console.log(`Test credentials: ${userSeed.email} / ${userSeed.password}`);
      }
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      if (errorMessage.includes("already exists") || errorMessage.includes("duplicate")) {
        console.log("ℹ️  Test user already exists, skipping creation");
      } else {
        throw error;
      }
    }

    console.log("✅ Test database seeded successfully!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Error seeding test database:", error);
    process.exit(1);
  }
}

seedTestDatabase();
