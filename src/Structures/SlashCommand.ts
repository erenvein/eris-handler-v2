import { ApplicationCommandOptions } from "eris";

export default class SlashCommand {
    public name: string;
    public id: number;
    public description: string;
    public options: Array<ApplicationCommandOptions>;
    public ownerOnly: boolean;
    public cooldown: number;
    public enabled: boolean;
    public register: boolean;
    public guildOnly: boolean;
    public constructor(data:{ name: string; description: string; options?: Array<ApplicationCommandOptions>; register?: boolean; ownerOnly?: boolean;cooldown?:number;enabled?: boolean;guildOnly?: boolean}) {
        this.id = 1;
        this.name = data.name;
        this.description = data.description;
        this.options = data.options || [];
        this.ownerOnly = data.ownerOnly || false;
        this.cooldown = data.cooldown || 5000;
        this.enabled = data.enabled || true;
        this.register = data.register ||true;
        this.guildOnly = data.guildOnly || false;
    }
}
