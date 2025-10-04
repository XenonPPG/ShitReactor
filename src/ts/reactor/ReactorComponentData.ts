import ReactorComponent from "@/ts/reactor/ReactorComponent.ts";
import {Pressure, ReactorComponentParams, Voltage, Volume} from "@/ts/reactor/ReactorComponentParams.ts";

let ReactorComponentData = {
    "buffer": new ReactorComponent(
        "buffer",
        "Буфер накапливает дерьмо в моменты профицита энергии и выпускает в моменты дефицита. Объем кала не должен превышать 7800м^3",
        new ReactorComponentParams({
            volume: {default: 500, max: 7800, phys: Volume}
        })),

    "central-valve": new ReactorComponent(
        "central-valve",
        "Центральный клапан управляет потоком говна. Давление должно находиться в диапозоне 280-320кПа",
        new ReactorComponentParams({
            pressure: {default: 500, min: 280, max: 320, phys: Pressure}
        })),

    "fuel-pump": new ReactorComponent(
        "fuel-pump",
        "Насос для говна бля",
        new ReactorComponentParams({
            pressure: {default: 100, min: 50, max:300, phys: Pressure},
            voltage: {default: 100, min: 50, max:300, phys: Voltage}
        })),

    "turbine": new ReactorComponent(
        "turbine",
        "Центральный компонент конвертации энергии дерьма в электрическую. Является мостом между буфером и реактором",
        new ReactorComponentParams({
            voltage: {default: 8000, max: 12000, phys: Voltage},
        })
    ),

    "diesel-generators": new ReactorComponent(
        "diesel-generators",
        "Запасной источник энергии. Способен поддерживать весь комплекс на протяжении 3 минут",
        new ReactorComponentParams({
            voltage: {default: 8000, max: 12000, phys: Voltage},
        })
    )
}

export default ReactorComponentData;