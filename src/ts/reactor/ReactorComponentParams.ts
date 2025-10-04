export class PhysProperty {
    public name: string;
    public unit: string;

    constructor(name: string, unit: string) {
        this.name = name;
        this.unit = unit;
    }
}

export const Pressure = new PhysProperty("давление", "кПа")
export const Voltage = new PhysProperty("напряжение", "мВ")
export const Volume = new PhysProperty("объем", "м^3")
export const Temperature = new PhysProperty("температура", "к")

type ParamMeta = {
    default: number;
    min?: number;
    max?: number;
    phys: PhysProperty;
};

export class ReactorComponentParams {
    [key: string]: ParamMeta;

    constructor(config: Record<string, ParamMeta>) {
        for (const key in config) {
            this[key] = {...config[key]};
        }
    }
}
