import Eris, { Collection } from "eris"
import 'dotenv/config';
import CommandHandler from "../Handlers/CommandHandler";
import ListenerHandler from "../Handlers/ListenerHandler";
import SlashCommandHandler from "../Handlers/SlashCommandHandler";
import Command from "./Command";
import SlashCommand from "./SlashCommand";


export class EvilsClient extends Eris.Client {
    commands = new Collection(Command, Infinity);
    slashCommands = new Collection(SlashCommand, Infinity);
    public constructor() {
        super(`${process.env.DISCORD_TOKEN}`, {
            defaultImageFormat: 'png',
            restMode: true,
            getAllUsers: true,
            intents: ['all'],
        })
        new CommandHandler(this, 'Commands')
        new ListenerHandler(this, 'Listeners')
        new SlashCommandHandler(this, 'SlashCommands')
    }
}

declare module "eris" {
    interface Client {
        commands: any;
        slashCommands: any;
    }
}