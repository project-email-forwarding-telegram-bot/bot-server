import { Redis } from "npm:@upstash/redis";
import { global } from "../global.ts";

class kv_store {
    private redis: Redis;

    constructor(public url: string, public token: string) {
        this.redis = new Redis({
            url,
            token,
            keepAlive: true,
        });
    }

    async set(key: string, value: unknown): Promise<void> {
        await this.redis.set<{ version: string; value: unknown }>(key, { version: global.version, value });
        console.log("kv_store set value:", value);
    }

    async get(key: string): Promise<unknown | null> {
        const value = await this.redis.get<{ version: string; value: unknown }>(key);
        console.log("kv_store get value:", value);

        if (value != null) {
            return value.value;
        }
    }
}

export { kv_store };
