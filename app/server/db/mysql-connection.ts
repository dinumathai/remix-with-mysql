import * as mysql from 'mysql';
import { getAppConfig } from '../config/config';

export type AirportDetails = {
    id: number;
    name: string;
    city: string;
    country: string;
};

export class DBAccessor {
    connectionPool: mysql.Pool;
    constructor() {
        // TODO : Find a better way fool ts for accessing "global"
        if ((global as any).connectionPool) {
            this.connectionPool = (global as any).connectionPool;
            return
        }
        const appConf = getAppConfig();
        const pc: mysql.PoolConfig = {
            connectionLimit: appConf.dbConfig.connectionLimit,
            host: appConf.dbConfig.host,
            port: appConf.dbConfig.port,
            user: appConf.dbConfig.user,
            password: appConf.dbConfig.password,
            database: appConf.dbConfig.database
        };
        this.connectionPool = mysql.createPool(pc);
        // TODO : Find a better way fool ts for accessing "global"
        (global as any).connectionPool = this.connectionPool;
    };

    async getAllAirport(): Promise<AirportDetails[]> {
        const queryPromise = new Promise<AirportDetails[]>((resolve, reject) => {
            this.connectionPool.query("select * from airport", (err, data) => {
                if (err || data === null) {
                    console.error("GetAllAirport failed", err);
                    return resolve([]);
                }
                const details: AirportDetails[] = [];
                for (const index in data) {
                    details.push({
                        id: data[index].airport_id,
                        name: data[index].airport_name,
                        city: data[index].airport_city,
                        country: data[index].airport_country
                    });
                }
                return resolve(details);
            });
        });
        return queryPromise;
    };

    destroy(): void {
        this.connectionPool.end();
    }
}