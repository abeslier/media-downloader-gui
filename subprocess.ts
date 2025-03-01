const command = new Deno.Command("yt-dlp", {
    args: [
      "--ffmpeg-location",
      "ffmpeg-master-latest-linux64-gpl/bin/",
      "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    ],
  });

const { code, stdout, stderr } = await command.output();

console.assert(code === 0);
console.log(new TextDecoder().decode(stdout));
console.log(new TextDecoder().decode(stderr));
