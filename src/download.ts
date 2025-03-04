import { isCommandOnPath } from "./subprocess.ts";
import { extractPercentage } from "./utils.ts";

const _alreadyDownloadedRE = /(^\[download\]).*(has already been downloaded$)/;

export async function* download(ffmpegLocation: string, url: string) {
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
            // TODO if already downloaded set progress to 100 and break
            const progress = extractPercentage(decoder.decode(value));
            // TODO extract ETA, speed, size
            if (progress !== null) {
                yield progress;
            }
            if (done) break;
        }

        const { code } = await subprocess.status;
        console.log(`yt-dlp exit code : ${code}`);
    } else {
        console.error("yt-dlp not on PATH");
    }
}
