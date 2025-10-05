import { global } from "../global.ts";
import { handle_update } from "../telegram/bot/handle_update.ts";

Deno.serve({ port: global.WEBHOOK_PORT, hostname: "0.0.0.0" }, async (req) => {
    const url = new URL(req.url);
    console.log("url: ", url.toString());

    if (url.pathname == "/health") {
        return new Response(JSON.stringify({ version: global.version, commit_sha: global.commit_sha }, null, 4), {
            status: 200,
            headers: {
                "content-type": "application/json",
            },
        });
    }

    try {
        const json_body = await req.json();
        handle_update(json_body);
        return new Response(null, { status: 200 });
    } catch (_e: unknown) {
        return new Response(null, { status: 400 });
    }
});
