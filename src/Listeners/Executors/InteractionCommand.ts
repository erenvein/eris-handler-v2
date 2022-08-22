import { Client, CommandInteraction, GuildTextableChannel } from "eris";
import Listener from "../../Structures/Listener";

export default new class InteractionEvils extends Listener {
    constructor() {
        super({
            event: 'interactionCreate',
            once: false
        })
    }
    action(client: Client, interaction: CommandInteraction<GuildTextableChannel>) {
        const Eris = require('eris');
        const cooldowns = new Eris.Collection();
        const cmdCooldown = new Map();
        let user = interaction.user ? interaction.user : interaction.member?.user;
        if(interaction.data.type !== 1) return;
        const command = client.slashCommands.get(`${interaction.data.name}`);
        if (!command) return;
        if(command.enabled === false) return;
        if(command.guildOnly === true) {
            if(!interaction.channel.guild) return;
        }
        if (!cooldowns.has(command.name)) {
            cooldowns.set(command.name, new Eris.Collection());
        }
    
        const now = Date.now();
        const cooldownss = cooldowns.get(command.name);
        const amount = command.cooldown;
    
        if (cooldownss.has(user?.id)) {
            const gec = cooldownss.get(user?.id) + amount;
    
            if (now < gec) {
                const time = (gec - now) / 1000;
                return interaction.createMessage(`${user?.mention}, wait **${time.toFixed(1)}** seconds to use this command.`);
            }
        }
    
        cooldownss.set(user?.id, now);
        setTimeout(() => cooldownss.delete(user?.id), amount);
    
        cooldownss.set(user?.id, now);
        if (!cmdCooldown.has(user?.id)) cmdCooldown.set(user?.id, [ Date.now() ]);
        else {
            cmdCooldown.set(user?.id, cooldownss);
        }
        
            try {
                command.action(client, interaction)
            } catch(e) {
                console.log(e)
            
        }
    }
}