export default class Listener {
    public name: string;
    public once: boolean;
    public constructor(data: { event: string; once?: boolean}) {
        this.name = data.event;
        this.once = data?.once || false;
    }
}
