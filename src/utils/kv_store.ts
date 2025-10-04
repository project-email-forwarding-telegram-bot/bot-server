import { Redis } from "npm:@upstash/redis";

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
        await this.redis.set(key, JSON.stringify(value));
    }

    async get(key: string): Promise<unknown | null> {
        const value = await this.redis.get(key) as string;

        if (value != null) {
            return JSON.parse(value);
        }
    }
}

export { kv_store };
