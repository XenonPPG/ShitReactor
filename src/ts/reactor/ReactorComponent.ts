import {Status} from "@/ts/reactor/Status.ts";
import type {ReactorComponentParams} from "@/ts/reactor/ReactorComponentParams.ts";


class ReactorComponent {
    public name: string;
    public status: Status;
    public description: string;
    public params: ReactorComponentParams;

    public constructor(name: string, description: string, params: ReactorComponentParams) {
        this.name = name;
        this.status = Status.OK;
        this.description = description;
        this.params = params;
    }
}

export default ReactorComponent;