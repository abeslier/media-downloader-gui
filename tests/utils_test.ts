import { assertEquals } from "@std/assert"; // deno add jsr:@std/assert
import { extractPercentage } from "../src/utils.ts";

Deno.test(function extractPercentageTest() {
    assertEquals(extractPercentage("[youtube] dQw4w9WgXcQ: Downloading player 962b571b"), null);
    assertEquals(extractPercentage("[info] dQw4w9WgXcQ: Downloading 1 format(s): 18"), null);
    assertEquals(extractPercentage("[download] 0.00% of    8.68MiB in 00:00:01 at 4.76MiB/s"), 0);
    assertEquals(extractPercentage("[download] 50.0% of    8.68MiB in 00:00:01 at 4.76MiB/s"), 0.5);
    assertEquals(extractPercentage("[download] 100% of    8.68MiB in 00:00:01 at 4.76MiB/s"), 1);
});
