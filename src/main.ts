import { download } from "./download.ts";

const ffmpegLocationLinux = "ffmpeg-master-latest-linux64-gpl/bin/";
const url = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

await download(ffmpegLocationLinux, url);

prompt("Press Enter to continue...");
