import { global } from "../global.ts";

Deno.serve({ port: global.WEBHOOK_PORT, hostname: "0.0.0.0" }, (req) => {
    console.log("url: ", req.url);

    return new Response("", {
        status: 200,
    });
});
