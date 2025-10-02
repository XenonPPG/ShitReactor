type ParamMeta = {
    default: number;
    min?: number;
    max?: number;
    name: string;
    unit: string;
};

export class ReactorComponentParams {
    [key: string]: ParamMeta;

    constructor(config: Record<string, ParamMeta>) {
        for (const key in config) {
            this[key] = { ...config[key] };
        }
    }
}
