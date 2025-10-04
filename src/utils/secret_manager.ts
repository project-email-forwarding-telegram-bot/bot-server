import type { enum_environment_type } from "../enum.ts";

const enum_secret_manager_key = {
    REDIS_REST_TOKEN: "REDIS_REST_TOKEN",
    TELEGRAM_BOT_TOKEN: "TELEGRAM_BOT_TOKEN",
} as const;

class secret_manager {
    static secret_dir = "/run/secrets";
    memo: Map<string, string>;

    constructor(public env_type: enum_environment_type) {
        this.memo = new Map<string, string>();
    }

    public get(key: typeof enum_secret_manager_key[keyof typeof enum_secret_manager_key]): string | null {
        if (this.memo.has(key)) {
            return this.memo.get(key) as string;
        }

        if (this.env_type == "local") {
            const value = Deno.env.get(key);

            if (value == null) {
                console.error(`Environment variable \`${key}\` not found`);
                return null;
            }

            if (value.length == 0) {
                console.error(`Environment variable \`${key}\` is an empty string`);
            }

            this.memo.set(key, value);
            return value;
        } else {
            const pathname = `${secret_manager.secret_dir}/${key}`;

            try {
                const data = Deno.readFileSync(`${pathname}`);

                if (data.length == 0) {
                    console.error(`Empty file \`${pathname}\``);
                    return null;
                }

                try {
                    const decoder = new TextDecoder("utf-8", { fatal: true });
                    const value = decoder.decode(data);

                    this.memo.set(key, value);
                    return value;
                } catch {
                    console.error(`Failed to decode file \`${pathname}\``);
                    return null;
                }
            } catch {
                console.error(`File \`${pathname}\` not found`);
                return null;
            }
        }
    }
}

export { enum_secret_manager_key, secret_manager };
