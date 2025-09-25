import { Redis } from "npm:@upstash/redis";

const redis = new Redis({
    url: "https://special-racer-10669.upstash.io",
    token: Deno.env.get("REDIS_REST_TOKEN"),
    keepAlive: true,
});

await redis.set("foo", "bar");
console.log(await redis.get("foo"));
