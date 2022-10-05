import { Server } from "@hapi/hapi";

export const loginRoutes = (server: Server) => {
    server.route({
        method: 'POST',
        path: '/login',
        handler: () => {}
    })
};