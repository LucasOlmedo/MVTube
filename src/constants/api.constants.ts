import { SettingsProvider } from "../providers/settings/settings";

export const API_URL = 'https://tv-v2.api-fetch.website/';
export const WEBSITE = 'https://popcorntime.sh/';

const GENRE = {
    movie_tvshow: [
        {
            value: 'action',
            title: 'FILTER.GENRE.MOVIE_TVSHOW.ACTION'
        },
        {
            value: 'adventure',
            title: 'FILTER.GENRE.MOVIE_TVSHOW.ADVENTURE'
        },
        {
            value: 'animation',
            title: 'FILTER.GENRE.MOVIE_TVSHOW.ANIMATION'
        },
        {
            value: 'comedy',
            title: 'FILTER.GENRE.MOVIE_TVSHOW.COMEDY'
        },
        {
            value: 'crime',
            title: 'FILTER.GENRE.MOVIE_TVSHOW.CRIME'
        },
        {
            value: 'disaster',
            title: 'FILTER.GENRE.MOVIE_TVSHOW.DISASTER'
        },
        {
            value: 'documentary',
            title: 'FILTER.GENRE.MOVIE_TVSHOW.DOCUMENTARY'
        },
        {
            value: 'drama',
            title: 'FILTER.GENRE.MOVIE_TVSHOW.DRAMA'
        },
        {
            value: 'eastern',
            title: 'FILTER.GENRE.MOVIE_TVSHOW.EASTERN'
        },
        {
            value: 'family',
            title: 'FILTER.GENRE.MOVIE_TVSHOW.FAMILY'
        },
        {
            value: 'fan-film',
            title: 'FILTER.GENRE.MOVIE_TVSHOW.FAN_FILM'
        },
        {
            value: 'fantasy',
            title: 'FILTER.GENRE.MOVIE_TVSHOW.FANTASY'
        },
        {
            value: 'film-noir',
            title: 'FILTER.GENRE.MOVIE_TVSHOW.FILM_NOIR'
        },
        {
            value: 'history',
            title: 'FILTER.GENRE.MOVIE_TVSHOW.HISTORY'
        },
        {
            value: 'holiday',
            title: 'FILTER.GENRE.MOVIE_TVSHOW.HOLIDAY'
        },
        {
            value: 'horror',
            title: 'FILTER.GENRE.MOVIE_TVSHOW.HORROR'
        },
        {
            value: 'indie',
            title: 'FILTER.GENRE.MOVIE_TVSHOW.INDIE'
        },
        {
            value: 'music',
            title: 'FILTER.GENRE.MOVIE_TVSHOW.MUSIC'
        },
        {
            value: 'mystery',
            title: 'FILTER.GENRE.MOVIE_TVSHOW.MYSTERY'
        },
        {
            value: 'none',
            title: 'FILTER.GENRE.MOVIE_TVSHOW.NONE'
        },
        {
            value: 'road',
            title: 'FILTER.GENRE.MOVIE_TVSHOW.ROAD'
        },
        {
            value: 'romance',
            title: 'FILTER.GENRE.MOVIE_TVSHOW.ROMANCE'
        },
        {
            value: 'science-fiction',
            title: 'FILTER.GENRE.MOVIE_TVSHOW.SCIENCE_FICTION'
        },
        {
            value: 'short',
            title: 'FILTER.GENRE.MOVIE_TVSHOW.SHORT'
        },
        {
            value: 'sports',
            title: 'FILTER.GENRE.MOVIE_TVSHOW.SPORTS'
        },
        {
            value: 'sporting-event',
            title: 'FILTER.GENRE.MOVIE_TVSHOW.SPORTING_EVENT'
        },
        {
            value: 'suspense',
            title: 'FILTER.GENRE.MOVIE_TVSHOW.SUSPENSE'
        },
        {
            value: 'thriller',
            title: 'FILTER.GENRE.MOVIE_TVSHOW.THRILLER'
        },
        {
            value: 'tv-movie',
            title: 'FILTER.GENRE.MOVIE_TVSHOW.TV_MOVIE'
        },
        {
            value: 'war',
            title: 'FILTER.GENRE.MOVIE_TVSHOW.WAR'
        },
        {
            value: 'western',
            title: 'FILTER.GENRE.MOVIE_TVSHOW.WESTERN'
        },
    ],
    anime: [
        {
            value: 'Action',
            title: 'FILTER.GENRE.ANIME.ACTION'
        },
        {
            value: 'Ecchi',
            title: 'FILTER.GENRE.ANIME.ECCHI'
        },
        {
            value: 'Harem',
            title: 'FILTER.GENRE.ANIME.HAREM'
        },
        {
            value: 'Romance',
            title: 'FILTER.GENRE.ANIME.ROMANCE'
        },
        {
            value: 'School',
            title: 'FILTER.GENRE.ANIME.SCHOOL'
        },
        {
            value: 'Supernatural',
            title: 'FILTER.GENRE.ANIME.SUPERNATURAL'
        },
        {
            value: 'Drama',
            title: 'FILTER.GENRE.ANIME.DRAMA'
        },
        {
            value: 'Comedy',
            title: 'FILTER.GENRE.ANIME.COMEDY'
        },
        {
            value: 'Mystery',
            title: 'FILTER.GENRE.ANIME.MYSTERY'
        },
        {
            value: 'Police',
            title: 'FILTER.GENRE.ANIME.POLICE'
        },
        {
            value: 'Sports',
            title: 'FILTER.GENRE.ANIME.SPORTS'
        },
        {
            value: 'Mecha',
            title: 'FILTER.GENRE.ANIME.MECHA'
        },
        {
            value: 'Sci-Fi',
            title: 'FILTER.GENRE.ANIME.SCI_FI'
        },
        {
            value: 'Slice of Life',
            title: 'FILTER.GENRE.ANIME.SLICE_OF_LIFE'
        },
        {
            value: 'Fantasy',
            title: 'FILTER.GENRE.ANIME.FANTASY'
        },
        {
            value: 'Adventure',
            title: 'FILTER.GENRE.ANIME.ADVENTURE'
        },
        {
            value: 'Gore',
            title: 'FILTER.GENRE.ANIME.GORE'
        },
        {
            value: 'Music',
            title: 'FILTER.GENRE.ANIME.MUSIC'
        },
        {
            value: 'Psychological',
            title: 'FILTER.GENRE.ANIME.PSYCHOLOGICAL'
        },
        {
            value: 'Shoujo Ai',
            title: 'FILTER.GENRE.ANIME.SHOUJO_AI'
        },
        {
            value: 'Yuri',
            title: 'FILTER.GENRE.ANIME.YURI'
        },
        {
            value: 'Magic',
            title: 'FILTER.GENRE.ANIME.MAGIC'
        },
        {
            value: 'Horror',
            title: 'FILTER.GENRE.ANIME.HORROR'
        },
        {
            value: 'Thriller',
            title: 'FILTER.GENRE.ANIME.THRILLER'
        },
        {
            value: 'Gender Bender',
            title: 'FILTER.GENRE.ANIME.GENDER_BENDER'
        },
        {
            value: 'Parody',
            title: 'FILTER.GENRE.ANIME.PARODY'
        },
        {
            value: 'Historical',
            title: 'FILTER.GENRE.ANIME.HISTORICAL'
        },
        {
            value: 'Racing',
            title: 'FILTER.GENRE.ANIME.RACING'
        },
        {
            value: 'Demons',
            title: 'FILTER.GENRE.ANIME.DEMONS'
        },
        {
            value: 'Samurai',
            title: 'FILTER.GENRE.ANIME.SAMURAI'
        },
        {
            value: 'Super Power',
            title: 'FILTER.GENRE.ANIME.SUPER_POWER'
        },
        {
            value: 'Military',
            title: 'FILTER.GENRE.ANIME.MILITARY'
        },
        {
            value: 'Dementia',
            title: 'FILTER.GENRE.ANIME.DEMENTIA'
        },
        {
            value: 'Mahou Shounen',
            title: 'FILTER.GENRE.ANIME.MAHOU_SHOUNEN'
        },
        {
            value: 'Game',
            title: 'FILTER.GENRE.ANIME.GAME'
        },
        {
            value: 'Martial Arts',
            title: 'FILTER.GENRE.ANIME.MARTIAL_ARTS'
        },
        {
            value: 'Vampire',
            title: 'FILTER.GENRE.ANIME.VAMPIRE'
        },
        {
            value: 'Kids',
            title: 'FILTER.GENRE.ANIME.KIDS'
        },
        {
            value: 'Mahou Shoujo',
            title: 'FILTER.GENRE.ANIME.MAHOU_SHOUJO'
        },
        {
            value: 'Space',
            title: 'FILTER.GENRE.ANIME.SPACE'
        },
        {
            value: 'Shounen Ai',
            title: 'FILTER.GENRE.ANIME.SHONEN_AI'
        },
    ]
};

const SORT = [
    {
        value: 'last added',
        title: 'FILTER.SORT.LAST_ADDED'
    },
    {
        value: 'rating',
        title: 'FILTER.SORT.RATING'
    },
    {
        value: 'title',
        title: 'FILTER.SORT.TITLE'
    },
    {
        value: 'trending',
        title: 'FILTER.SORT.TRENDING'
    },
    {
        value: 'year',
        title: 'FILTER.SORT.YEAR'
    }
];

const ORDER = [
    {
        value: '1',
        title: 'FILTER.ORDER.INCREASING'
    },
    {
        value: '-1',
        title: 'FILTER.ORDER.DECREASING'
    }
];

export const FILTER = {
    genre: GENRE,
    sort: SORT,
    order: ORDER
}