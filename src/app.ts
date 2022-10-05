import { Server } from "@hapi/hapi";

export const init = async () => {
    const server: Server = new Server({
        port: 3333,
        host: "localhost"
    });

    await server.start();
    console.log("Server is running on port", server.info.uri)
}

process.on('unhandledRejection', err => {   //handled an error if there's a problem
    console.log(err);
    process.exit(0);
});