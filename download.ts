import { isCommandOnPath } from "./subprocess.ts";

export async function download(ffmpegLocation: string, url: string) {
    if (await isCommandOnPath("yt-dlp")) {
        const command = new Deno.Command("yt-dlp", {
            args: [
                "--ffmpeg-location",
                ffmpegLocation,
                url,
            ],
        });
        
        await command.output();
    } else {
        console.error("yt-dlp not on PATH");
    }
}
