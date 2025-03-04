import { isCommandOnPath } from "./subprocess.ts";
import { extractPercentage } from "./utils.ts";

export async function download(ffmpegLocation: string, url: string) {
    if (await isCommandOnPath("yt-dlp")) {
        const command = new Deno.Command("yt-dlp", { // TODO try-catch
            args: [
                "--ffmpeg-location",
                ffmpegLocation,
                url,
            ],
            stdout: "piped",
            stderr: "piped",
        });
        const subprocess = command.spawn();

        const stream = subprocess.stdout; // TODO stderr
        const reader = stream.getReader();
        const decoder = new TextDecoder();
        while (true) {
            const { value, done } = await reader.read();
            const progress = extractPercentage(decoder.decode(value));
            if (progress !== null) {
                console.log(`${progress}`);
            }
            if (done) break;
        }

        const { code } = await subprocess.status;
        console.log(`yt-dlp exit code : ${code}`);
    } else {
        console.error("yt-dlp not on PATH");
    }
}
