const ffmpegLocation = "ffmpeg-master-latest-linux64-gpl/bin/"
const url = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

const command = new Deno.Command("yt-dlp", {
    args: [
        "--ffmpeg-location",
        ffmpegLocation,
        url,
    ],
    stdout: "piped",
    stderr: "piped",
});

const process = command.spawn();

/**
 * read and print stream data in real-time
 */
async function readStream(stream: ReadableStream<Uint8Array>) {
    const reader = stream.getReader();
    const decoder = new TextDecoder();
    
    while (true) {
        const { value, done } = await reader.read();
        if (done) break;

        const text = decoder.decode(value);  // Uint8Array to string
        console.log(`${text}`);
    }
}

(async () => {  // async IIFE
    try {
        await Promise.all([  // stdout and stderr concurrently
            readStream(process.stdout),
            readStream(process.stderr)
        ]);

        // wait for process completetion
        const { code } = await process.status;
        console.log(`${code}`);
    } catch (error) {
        console.error(error);
    }
})();
