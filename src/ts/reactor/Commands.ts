import {StartReactor} from "@/ts/reactor/ReactorUpdate.ts";

export class Command {
    name: string;
    func: Function
    constructor(name: string, func: Function) {
        this.name = name;
        this.func = func;
    }
}

export const Commands: Command[] = [
    new Command("reactor start", StartReactor)
]