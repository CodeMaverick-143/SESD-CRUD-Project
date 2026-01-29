export namespace RoleModule {
    export const ADMIN = "ADMIN";
    export const USER = "USER";
}

export type Role = typeof RoleModule.ADMIN | typeof RoleModule.USER;