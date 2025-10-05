import { update } from "../interface/update.ts";

async function handle_update(json: update): Promise<void> {
    console.log("update:", json);
}

export { handle_update };
