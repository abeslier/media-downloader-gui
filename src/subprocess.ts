export async function isCommandOnPath(name: string): Promise<boolean> {
    try {
        await new Deno.Command(name).output();
        return true;
    } catch {
        return false;
    }
}
