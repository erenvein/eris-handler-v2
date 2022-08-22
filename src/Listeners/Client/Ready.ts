import { Client } from "eris";
import Listener from "../../Structures/Listener";

export default new class ReadyListener extends Listener {
    constructor() {
        super({
            event: 'ready',
            once: false
        })
    }
    action(client: Client) {
        console.log(client.user.username)
        client.editStatus([{ type: 1, name: 'Evils'}])
    }
}