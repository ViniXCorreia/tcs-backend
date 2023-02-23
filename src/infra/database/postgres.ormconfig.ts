import { DataSource } from 'typeorm';
require('dotenv').config({ path: '.env' });

export const postgres = new DataSource({
	name: 'default',
	type: 'postgres',
	host: 'localhost',
	port: 5432,
	username: 'postgres',
	password: 'postgres',
	database: 'tcs_backend',
	entities: [
		'dist/infra/database/entities/*.entity.{ts,js}',
		'dist/modules/**/*.entity.{ts,js}',
	],
	migrationsTableName: 'migration_table',
	migrations: ['dist/infra/database/migration/*.js'],
	logging: process.env.DB_LOG === 'true',
});
