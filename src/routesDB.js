var routes = []

function chargeBDFormLocalStorage() {
    if (localStorage.getItem('routes')) {
        let aux = JSON.parse(localStorage.getItem('routes'))
        for (let i in aux) {
            aux[i].ts = new Date(aux[i].ts)
            routes = aux
        }
    } else {
        chargeExampleBD()
    }
}

function saveRoutesArray() {
    localStorage.setItem('routes', JSON.stringify(routes));
}

function addRoute(route) {
    if (routes[0]) {
        route.id = routes[0].id + 1
    } else {
        route.id = 1
    }
    routes.unshift(route)
    saveRoutesArray()
}

function chargeExampleBD() {
    if (routes.length === 0) {

        var route1 = {
            id: 0,
            title: 'Camino de la via Verde de Alcoy',
            ts: new Date(),
            color: '#03A9F4',
            visible: true,
            positions: [
                { lat: 38.690682, lng: -0.489175 },
                { lat: 38.685797, lng: -0.493620 },
                { lat: 38.683341, lng: -0.498983 },
                { lat: 38.680445, lng: -0.507188 },
                { lat: 38.677485, lng: -0.504999 },
                { lat: 38.677427, lng: -0.494381 },
                { lat: 38.678263, lng: -0.482160 },
                { lat: 38.678813, lng: -0.474796 },
                { lat: 38.683639, lng: -0.471660 },
                { lat: 38.691693, lng: -0.483748 }
            ]
        };

        var route2 = {
            id: 0,
            title: 'Ruta la cruz de alcoy desde el Romeral por "Els llansols',
            ts: new Date(),
            color: '#FF5722',
            visible: true,
            positions: [
                { lat: 38.697364, lng: -0.487534 },
                { lat: 38.697169, lng: -0.490521 },
                { lat: 38.697672, lng: -0.491832 },
                { lat: 38.700961, lng: -0.492233 },
                { lat: 38.703612, lng: -0.491934 },
                { lat: 38.704422, lng: -0.491238 }
            ]
        };

        var route3 = {
            id: 0,
            title: 'Ruta de "Els canalons" desde Batoi por el rio Polop',
            ts: new Date(),
            color: '#9C27B0',
            visible: true,
            positions: [
                { lat: 38.691203, lng: -0.488148 },
                { lat: 38.685808, lng: -0.493395 },
                { lat: 38.684165, lng: -0.495841 },
                { lat: 38.684913, lng: -0.497760 },
                { lat: 38.683282, lng: -0.498895 },
                { lat: 38.684002, lng: -0.501629 },
                { lat: 38.680369, lng: -0.507521 },
                { lat: 38.679294, lng: -0.519916 },
                { lat: 38.680087, lng: -0.522191 },
                { lat: 38.680909, lng: -0.523155 },
                { lat: 38.679396, lng: -0.524915 },
                { lat: 38.680221, lng: -0.527632 }
            ]
        };

        addRoute(route3)
        addRoute(route2)
        addRoute(route1)

    }
}

export {
    routes,
    chargeBDFormLocalStorage,
    saveRoutesArray,
    addRoute
}