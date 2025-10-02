import ReactorComponent from "@/ts/reactor/ReactorComponent.ts";
import {ReactorComponentParams} from "@/ts/reactor/ReactorComponentParams.ts";

let ReactorComponentData = {
    "buffer": new ReactorComponent(
        "Буффер",
        "Буфер накапливает дерьмо в моменты профицита энергии и выпускает в моменты дефицита. Объем кала не должен превышать 7800м^3",
        new ReactorComponentParams({
            volume: {default: 500, max: 7800, name:"объем", unit:"м^3"}
        })),

    "central valve": new ReactorComponent(
        "Центральный клапан",
        "Центральный клапан управляет потоком говна. Давление должно находиться в диапозоне 280-320кПа",
        new ReactorComponentParams({
            pressure: {default: 500, min: 280, max: 320, name:"давление", unit:"кПа"}
        })),

    "fuel pump": new ReactorComponent(
        "Топливный насос",
        "Насос для говна бля",
        new ReactorComponentParams({
            pressure: {default: 100, min: 50, max:300, name:"давление", unit:"кПа"},
            voltage: {default: 100, min: 50, max:300, name:"напряжение", unit:"кВ"}
        })),
}

export default ReactorComponentData;