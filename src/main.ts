import { download } from "./download.ts";

const ffmpegLocationLinux: string = "ffmpeg-master-latest-linux64-gpl/bin/";
const url: string = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

await download(ffmpegLocationLinux, url);

prompt("Press Enter to continue...");
