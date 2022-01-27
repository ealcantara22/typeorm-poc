
module.exports = {
    type: "postgres",
    host: "postgres",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "typeorm-poc",
    synchronize: false, // do not auto update schema
    logger: "advanced-console",
    logging: "all",
    cache: true,
    dropSchema: false,
    entities: ["dist/entity/*.js"],
    migrationsTableName: "typeorm_migrations",
    migrations: ["dist/migration/*.js"],
    cli: {
        migrationsDir: "src/migration"
    }
};
