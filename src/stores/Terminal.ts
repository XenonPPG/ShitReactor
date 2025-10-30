import {defineStore} from 'pinia'
import {ref} from "vue";
import {Commands} from "@/ts/reactor/Commands.ts";

export enum TerminalMessageColors {
    inp = "var(--primary)",
    sys = "var(--secondary)",
    err = "var(--danger)"
}

export type TerminalMessageType = 'inp' | 'sys' | 'err'

export class TerminalMessage {
    text: string;
    type: TerminalMessageType;
    time: string | null = null;
    id: number | null = null;

    constructor(text: string, type: TerminalMessageType = 'inp') {
        this.text = text;
        this.type = type;
    }
}

export const ErrorLogCommandNotFound = new TerminalMessage("Error: command not found", "err");

export const useTerminal = defineStore('terminal', () => {
    const messages = ref<TerminalMessage[]>([
        new TerminalMessage("-- Running Linux Margiela v1.3.56 --", "sys"),
    ]);
    const lastMessageId = ref(0);

    const input = ref("");

    function SendMessage(msg: TerminalMessage) {
        const newMsg = {...msg}
        newMsg.id = lastMessageId.value++;
        const now = new Date(Date.now());
        newMsg.time = `[${now.getHours()}:${now.getMinutes()}]` //TODO: normalize time to 2 digits
        messages.value.push(newMsg);

        if(newMsg.type == 'inp'){
            const command = Commands.find(c => c.name == newMsg.text)
            if(command != undefined){
                command.func();
            }
            else{
                SendMessage(ErrorLogCommandNotFound);
            }
        }
    }

    return {messages, lastMessageId, SendMessage, input};
})
