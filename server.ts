function handler(req: Request): Response {
  return new Response("req.url = " + req.url);
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
