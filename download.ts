export function download(ffmpegLocation: string, url: string) {
    const command = new Deno.Command("yt-dlp", {  // subprocess
        args: [
            "--ffmpeg-location",
            ffmpegLocation,
            url,
        ],
        stdout: "piped",
        stderr: "piped",
    });

    const process = command.spawn();
}
