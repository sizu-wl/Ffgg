import Core from "./Structure/Client/Core";
import { setGlobalDispatcher, Agent } from "undici";

setGlobalDispatcher(new Agent({ connect: { timeout: 60_000 } }));

const guildIdList = [
    "1272621292629135513",
];

let names = [];

for (let guildId of guildIdList) {
    const core = new Core(guildId);

    setTimeout(() => {
        const guildName = core.initialize();
        names.push(guildName);
    }, 1_000);
}

setTimeout(() => console.log(names), 5_000);
