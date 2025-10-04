import { global } from "../global.ts";

Deno.serve({ port: global.WEBHOOK_PORT, hostname: "0.0.0.0" }, async (req) => {
    const url = new URL(req.url);
    console.log("url: ", url.toString());

    if (url.pathname == "/health") {
        return new Response(JSON.stringify({ version: "1.0.0", commitSHA: global.COMMIT_SHA }), {
            status: 200,
            headers: {
                "content-type": "application/json",
            },
        });
    }

    try {
        const jsonBody = await req.json();
        console.log("jsonBody: ", jsonBody);
        return new Response(null, { status: 200 });
    } catch (_e: unknown) {
        return new Response(null, { status: 400 });
    }
});
