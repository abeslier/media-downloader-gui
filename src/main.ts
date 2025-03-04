import { download } from "./download.ts";

const ffmpegLocationLinux: string = "ffmpeg-master-latest-linux64-gpl/bin/";
const url: string = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

for await (const progress of download(ffmpegLocationLinux, url)) {
    console.log(`${progress}`);
}

prompt("Press Enter to continue...");
