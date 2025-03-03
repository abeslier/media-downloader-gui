# yt-dlp

- https://github.com/yt-dlp/yt-dlp/wiki/Installation

```sh
wget https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp -O /usr/bin/yt-dlp
chmod a+rx /usr/bin/yt-dlp
```

```sh
yt-dlp --version
```

## ffmpeg

- https://github.com/yt-dlp/FFmpeg-Builds?tab=readme-ov-file#ffmpeg-static-auto-builds

```sh
wget https://github.com/yt-dlp/FFmpeg-Builds/releases/download/latest/ffmpeg-master-latest-linux64-gpl.tar.xz
tar -xvf ffmpeg-master-latest-linux64-gpl.tar.xz
```

# Deno

- https://docs.deno.com/runtime/
  - https://docs.deno.com/runtime/fundamentals/security/

## installation + shell completion

### Windows + PowerShell

```ps1
irm https://deno.land/install.ps1 | iex
```

```ps1
# https://learn.microsoft.com/en-us/powershell/scripting/learn/shell/creating-profiles?view=powershell-7.5
if (!(Test-Path -Path $PROFILE)) {
  New-Item -ItemType File -Path $PROFILE -Force
}

deno completions powershell >> $profile
.$profile
```

### Linux + bash

```sh
curl -fsSL https://deno.land/install.sh | sh
```

```
# https://docs.deno.com/runtime/getting_started/setup_your_environment/#bash-example
```
