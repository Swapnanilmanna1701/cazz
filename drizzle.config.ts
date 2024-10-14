import { defineConfig } from 'drizzle-kit';
export default defineConfig({
  out: './drizzle',
  schema: './utils/db/schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: "postgresql://neondb_owner:aszq1rR3cZSv@ep-holy-darkness-a1pah0h7.ap-southeast-1.aws.neon.tech/cazz_ai?sslmode=require",
  },
});