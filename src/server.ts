import { serveDir } from "@std/http/file-server"; // `deno add jsr:@std/http`

async function handler(req: Request): Promise<Response> {
    const url = new URL(req.url);

    if (url.pathname == "/api/download" && req.method == "POST") {
        console.log(await req.json());
        return new Response();
    }
    return await serveDir(req, { // https://jsr.io/@std/http/doc/~/serveDir
        fsRoot: "public",
    });
}

const _server = Deno.serve({ // https://docs.deno.com/api/deno/~/Deno.serve
    port: 8000, // default, 0 for any available port
    hostname: "0.0.0.0", // default
    onListen({ port }) {
        // `, hostname` browser on Windows do not work with "0.0.0.0"
        console.log(`http://127.0.0.1:${port}`);
    },
}, handler);
