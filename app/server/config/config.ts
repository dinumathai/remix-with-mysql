export type AppConfig = {
    dbConfig: DBConfig
}

export type DBConfig = {
    connectionLimit: number;
    host: string;
    port: number;
    user: string;
    password: string | undefined;
    database: string;
};

function loadAppConfig(): AppConfig {
    return {
        dbConfig: {
            connectionLimit: Number(process.env.MYSQL_POOL_MAX_CONNECTIONS || 10),
            host: process.env.MYSQL_HOST || 'localhost',
            port: Number(process.env.MYSQL_PORT || 3306),
            user: process.env.MYSQL_USER || 'root',
            password: process.env.MYSQL_PASSWORD,
            database: process.env.MYSQL_SCHEMA || 'root'
        }
    }
}

export function getAppConfig(): AppConfig {
    // TODO : Find a better way fool "ts" for accessing "global"
    if ((global as any).appConfig) {
        return (global as any).appConfig as AppConfig;
    }
    const appConf = loadAppConfig();
    // TODO : Find a better way fool "ts" for accessing "global"
    (global as any).appConfig = appConf;
    return appConf;
}