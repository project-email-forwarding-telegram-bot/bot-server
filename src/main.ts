import { ExistsCommand, Redis } from "npm:@upstash/redis";
import "./webhook/listen.ts";

const REDIS_REST_TOKEN = Deno.env.get("REDIS_REST_TOKEN");

if (REDIS_REST_TOKEN == null) {
    console.error("Environment variable `REDIS_REST_TOKEN` not present");
    Deno.exit(-2);
}

const redis = new Redis({
    url: "https://special-racer-10669.upstash.io",
    token: Deno.env.get("REDIS_REST_TOKEN"),
    keepAlive: true,
});

await redis.set("foo", "bar");
console.log(await redis.get("foo"));
