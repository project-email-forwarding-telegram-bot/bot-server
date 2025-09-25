Deno.serve((req) => {
    console.log("url: ", req.url);
    return new Response("", {
        status: 200,
    });
});
