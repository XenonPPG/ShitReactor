import {useReactor} from "@/stores/Reactor.ts";

export function StartReactor(){
    setInterval(OnUpdate, 1000)
}

const reactor = useReactor();

function OnUpdate(){
    reactor.power.push(50);
}