import {Client} from "discord.js";
import ReadyEvent from "../events/ReadyEvent";
import CommandBase from "./CommandBase";

export default class EventBase {

    private readonly client: Client;

    constructor(client: Client) {
        this.client = client;
        this.initAllEvents().then(() => {});
    }

    private async initAllEvents(): Promise<any> {

        this.client
            .on("ready", async () => {
                await new ReadyEvent(this.client, "ready", true).execute();
            })
            .on("interactionCreate", async interaction => {
                if (interaction.isCommand()) {
                    await CommandBase.respondToApplicationCommands(this.client, interaction);
                }
            });
    }
}