import { Client } from "eris";
import { sep } from 'path';
import { readdirSync } from "fs";

export default class ListenerHandler {
    public constructor(client: Client, listenerFolder: string) {
        readdirSync(`${process.cwd()}${sep}dist${sep}${listenerFolder}`).forEach(async dir => {
            const commands = readdirSync(`${process.cwd()}${sep}dist${sep}${listenerFolder}\\${dir}`);
            for (let file of commands) {
                const commandName = file.split('.')[0];
                import(`${process.cwd()}${sep}dist${sep}${listenerFolder}${sep}${dir}\\${commandName}`).then(listener =>{ 
                    if(listener.default.once === true) {
                    client.once(listener.default.name, async (...args) =>
                    listener.default.action(client, ...args));
                    } else {
                    client.on(listener.default.name, async (...args) =>
                    listener.default.action(client, ...args));
                    }
            });
             
            };
        });
    };
};