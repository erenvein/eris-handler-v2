import { Client, Message } from "eris";
import Command from "../../Structures/Command";

export default new class PingCommand extends Command {
    public constructor() {
        super({
            name: 'ping',
            description: 'Shows the bot latency.',
            aliases: ['pong'],
            ownerOnly: false,
            cooldown: 5000,
            enabled: true
        })
    };

    async action(client: Client, message: Message, args: string[]) {
       message.channel.createMessage({ content: 'Pong!'})
    }
}