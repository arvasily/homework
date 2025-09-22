import { Film } from "../models/film.models";

export const FILMS: Film[] = [
    {
        id: 0,
        title: 'Пандорум',
        original: 'Pandorum 2009',
        category: 'ужасы, фантастика, боевик, триллер, детектив',
        rating: '7.1',
        link: './film_pandorum.html',
        Image: '../public/images/pandorum.jpg'
    },
    {
        id: 1,
        title: 'Гравитация',
        original: 'Gravity 2013',
        category: 'фантастика, триллер, драма',
        rating: '7.5',
        link: './film_gravity.html',
        Image: '../public/images/gravitaciya.jpg'
    },
    {
        id: 2,
        title: 'Пекло',
        original: 'Sunshine 2007',
        category: 'фантастика, триллер',
        rating: '7.3',
        link: './film_sunshine.html',
        Image: '../public/images/peklo.jpg'
    },
    {
        id: 3,
        title: 'Прометей',
        original: 'Prometheus 2012',
        category: 'фантастика, ужасы',
        rating: '7.0',
        link: './film_prometheus.html',
        Image: '../public/images/prometei.jpg'
    },
    {
        id: 4,
        title: 'К звёздам',
        original: 'Ad Astra 2019',
        category: 'фантастика, триллер, драма, детектив, приключения',
        rating: '6.4',
        link: './film_ad_astra.html',
        Image: '../public/images/k_zvezdam.jpg'
    },
    {
        id: 5,
        title: 'Сквозь горизонт',
        original: 'Event Horizon 1997',
        category: 'ужасы, фантастика, триллер, детектив',
        rating: '6.9',
        link: './film_event_horizon .html',
        Image: '../public/images/skvoz_gorizont.jpg'
    }
]