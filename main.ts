import { download } from "./download.ts";

const ffmpegLocation = "ffmpeg-master-latest-linux64-gpl/bin/"
const url = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

download(ffmpegLocation, url);
