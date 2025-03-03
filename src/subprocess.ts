export async function isCommandOnPath(name: string) {
    try {
        await new Deno.Command(name).output();
        return true;
    } catch (_error) {
        return false;
    }
}
