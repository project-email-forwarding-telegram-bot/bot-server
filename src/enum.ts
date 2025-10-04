const enum_environment = {
    LOCAL: "local",
    STAGING: "staging",
    PRODUCTION: "production",
} as const;

type enum_environment_type = typeof enum_environment[keyof typeof enum_environment];
export { enum_environment, type enum_environment_type };
