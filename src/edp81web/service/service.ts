import { Server } from "../server/server";

export interface Service {
    onInitialize(server: Server, root: string, apiRoot: string): void
}