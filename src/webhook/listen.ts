import { global } from "../global.ts";

Deno.serve({ port: global.WEBHOOK_PORT, hostname: "0.0.0.0" }, async (req) => {
    console.log("url: ", req.url);

    const jsonBody = await req.json();
    console.log("jsonBody: ", jsonBody);

    return new Response("", { status: 200 });
});
