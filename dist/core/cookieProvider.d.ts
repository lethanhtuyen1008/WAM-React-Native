declare function set(key: string, value: string, timeoutInMinutes?: number): void;
declare function get(key: string, defaultValue?: string): string;
declare function has(key: string): boolean;
declare function remove(...keys: string[]): void;
declare function updateExpirationTime(key: string, value: string, timeoutInMinutes?: number): void;
export declare const cookieProvider: {
    set: typeof set;
    get: typeof get;
    remove: typeof remove;
    has: typeof has;
    updateExpirationTime: typeof updateExpirationTime;
};
export {};
