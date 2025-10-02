export enum Status {
    OK,
    LIGHT_WARNING,
    WARNING,
    DANGER,
    DESTROYED,
    UNDEFINED
}

export const StatusColors: Record<Status, string> = {
    [Status.OK]: "#ffffff",
    [Status.LIGHT_WARNING]: "#ffff78",
    [Status.WARNING]: "#ffff00",
    [Status.DANGER]: "#ff0000",
    [Status.DESTROYED]: "#555555",
    [Status.UNDEFINED]: "#0000ff",
};