async function handler(_req: Request): Promise<Response> {
    try {
        const file = await Deno.open("index.html");
        return new Response(file.readable, {
            headers: {
                "content-type": "text/html; charset=utf-8"
            }
        });
    } catch (error) {
        console.error(error);
        return new Response("404 Not Found", {
            status: 404
        });
    }
}

const _server = Deno.serve({  // https://docs.deno.com/api/deno/~/Deno.serve
    port: 8000,  // default, 0 for any available port
    hostname: "0.0.0.0",  // default
    onListen({ port, hostname }) {
        // browser on Windows don't work with "0.0.0.0"
        console.log(`http://127.0.0.1:${port}`);
    },
  },
  handler
);
