var routes = []

function chargeBDFormLocalStorage() {
    let aux = sessionStorage.getItem('routes') ?
        JSON.parse(sessionStorage.getItem('routes')) : [];
    for (let i in aux) {
        aux[i].ts = new Date(aux[i].ts);
    }
    routes = aux;
}

function saveRoutesArray() {
    sessionStorage.setItem('routes', JSON.stringify(routes));
}

function addRoute(route) {
    if (routes[0]) {
        route.id = routes[0].id + 1
    } else {
        route.id = 1
    }
    routes.unshift(route)
    sessionStorage.setItem('routes', JSON.stringify(routes));
}

function chargeExampleBD() {
    if (routes.length === 0) {

        var route1 = {
            id: 0,
            title: 'Camino de la via Verde de Alcoy',
            ts: new Date(),
            color: '#03A9F4',
            visible: false,
            positions: []
        };

        var route2 = {
            id: 0,
            title: 'Ruta la cruz de alcoy desde el Romeral por "Els llansols',
            ts: new Date(),
            color: '#FF5722',
            visible: false,
            positions: []
        };

        var route3 = {
            id: 0,
            title: 'Ruta de "Els canalons" desde Batoi por el rio Polop',
            ts: new Date(),
            color: '#795548',
            visible: false,
            positions: []
        };

        addRoute(route3)
        addRoute(route2)
        addRoute(route1)

    }
}

export {
    routes,
    chargeExampleBD,
    chargeBDFormLocalStorage,
    saveRoutesArray
}