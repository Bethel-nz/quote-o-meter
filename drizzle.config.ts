import type { Config } from 'drizzle-kit';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

type DbCredentials = {
	wranglerConfigPath: string;
	dbName: string;
	uri?: string;
};

export default {
	driver: 'mysql2',
	schema: './db/schema.ts',
	out: './drizzle',
	dbCredentials: {
		uri: process.env.DATABASE_URL,
	} as DbCredentials,
} as Config;
