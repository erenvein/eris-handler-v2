import { Client, CommandInteraction } from "eris";
import SlashCommand from "../../Structures/SlashCommand";

export default new class PingCommand extends SlashCommand {
    public constructor() {
        super({
            name: 'ping',
            description: 'Shows the bot latency.',
            options: [],
            guildOnly: true,
            register: true,
            ownerOnly: false,
            cooldown: 5000,
            enabled: true
        });
    };

    action(client: Client, interaction: CommandInteraction) {
       interaction.createMessage({ content: 'Pong'})
    }
}