export default class Command {
    public name: string;
    public id: number;
    public description: string;
    public aliases: string[];
    public ownerOnly: boolean;
    public cooldown: number;
    public enabled: boolean;
    public constructor(data:{ name: string; description?: string; aliases?: string[]; ownerOnly?: boolean;cooldown?:number;enabled?: boolean;}) {
        this.name = data.name;
        this.id = 1;
        this.description = data.description || "No description provided.";
        this.aliases = data?.aliases || [];
        this.ownerOnly = data?.ownerOnly || false;
        this.cooldown = data?.cooldown || 5000;
        this.enabled = data?.enabled || true;
    }
}
