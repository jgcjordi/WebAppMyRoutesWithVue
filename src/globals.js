var routes = [{
        id: 0,
        title: 'Ruta 1',
        ts: new Date(),
        color: 'red',
        positions: []
    },
    {
        id: 1,
        title: 'Ruta 2',
        ts: new Date(),
        color: 'blue',
        positions: []
    }
];
routes.nextRouteId = 2;


var globals = {
    recording: false,
    route: {}
}

export { routes, globals }