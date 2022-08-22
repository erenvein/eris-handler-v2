import { Client } from "eris";
import { sep } from 'path';
import { readdirSync } from "fs";

export default class CommandHandler {
    public constructor(client: Client, commandFolder: string) {
        readdirSync(`${process.cwd()}${sep}dist${sep}${commandFolder}`).forEach(async dir => {
            const commands = readdirSync(`${process.cwd()}${sep}dist${sep}${commandFolder}\\${dir}`);
            for (let file of commands) {
                const commandName = file.split('.')[0];
                import(`${process.cwd()}${sep}dist${sep}${commandFolder}${sep}${dir}\\${commandName}`).then(cmd =>{ client.commands.set(cmd.default.name, cmd.default)})
            };
        });
    };
};