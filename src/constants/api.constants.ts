import { SettingsProvider } from "../providers/settings/settings";

export const WEBSITE = 'https://popcorntime.sh/';
export const API_URL = 'https://tv-v2.api-fetch.website/';

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
            title: 'FILTER.GENRE.ANIME.SHOUNEN_AI'
        },
    ]
};

const SORT = {
    movie: [
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
    ],
    tvshow: [
        {
            value: 'name',
            title: 'FILTER.SORT.TITLE'
        },
        {
            value: 'rating',
            title: 'FILTER.SORT.RATING'
        },
        {
            value: 'trending',
            title: 'FILTER.SORT.TRENDING'
        },
        {
            value: 'updated',
            title: 'FILTER.SORT.UPDATED'
        },
        {
            value: 'year',
            title: 'FILTER.SORT.YEAR'
        }
    ],
    anime: [
        {
            value: 'name',
            title: 'FILTER.SORT.TITLE'
        },
        {
            value: 'rating',
            title: 'FILTER.SORT.RATING'
        },
        {
            value: 'year',
            title: 'FILTER.SORT.YEAR'
        },
    ]
};

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
    sort: SORT,
    genre: GENRE,
    order: ORDER,
}

export const SUBTITLE_LANG = [
    {
        lang: 'English',
        code: 'en',
        flag: 'https://restcountries.eu/data/usa.svg'
    },
    {
        lang: 'Afrikaans',
        code: 'af',
        flag: 'https://restcountries.eu/data/zaf.svg'
    },
    {
        lang: 'العربية',
        code: 'ar',
        flag: 'https://restcountries.eu/data/sau.svg'
    },
    {
        lang: 'Български',
        code: 'bg',
        flag: 'https://restcountries.eu/data/bgr.svg'
    },
    {
        lang: 'বাংলা',
        code: 'bn',
        flag: 'https://restcountries.eu/data/bgd.svg'
    },
    {
        lang: 'Català',
        code: 'ca',
        flag: 'https://restcountries.eu/data/and.svg'
    },
    {
        lang: 'Český',
        code: 'cs',
        flag: 'https://restcountries.eu/data/cze.svg'
    },
    {
        lang: 'Dansk',
        code: 'da',
        flag: 'https://restcountries.eu/data/dnk.svg'
    },
    {
        lang: 'Deutsch',
        code: 'de',
        flag: 'https://restcountries.eu/data/deu.svg'
    },
    {
        lang: 'Ελληνικά',
        code: 'el',
        flag: 'https://restcountries.eu/data/grc.svg'
    },
    {
        lang: 'Español',
        code: 'es',
        flag: 'https://restcountries.eu/data/esp.svg'
    },
    {
        lang: 'Eesti',
        code: 'et',
        flag: 'https://restcountries.eu/data/est.svg'
    },
    {
        lang: 'فارسی',
        code: 'fa',
        flag: 'https://restcountries.eu/data/irn.svg'
    },
    {
        lang: 'Suomi',
        code: 'fi',
        flag: 'https://restcountries.eu/data/fin.svg'
    },
    {
        lang: 'Français',
        code: 'fr',
        flag: 'https://restcountries.eu/data/fra.svg'
    },
    {
        lang: 'עברית',
        code: 'he',
        flag: 'https://restcountries.eu/data/isr.svg'
    },
    {
        lang: 'Hrvatski',
        code: 'hr',
        flag: 'https://restcountries.eu/data/hrv.svg'
    },
    {
        lang: 'Magyar',
        code: 'hu',
        flag: 'https://restcountries.eu/data/hun.svg'
    },
    {
        lang: 'Bahasa Indonesia',
        code: 'id',
        flag: 'https://restcountries.eu/data/idn.svg'
    },
    {
        lang: 'Íslenska',
        code: 'is',
        flag: 'https://restcountries.eu/data/isl.svg'
    },
    {
        lang: 'Italiano',
        code: 'it',
        flag: 'https://restcountries.eu/data/ita.svg'
    },
    {
        lang: '日本語',
        code: 'ja',
        flag: 'https://restcountries.eu/data/jpn.svg'
    },
    {
        lang: '한국어',
        code: 'ko',
        flag: 'https://restcountries.eu/data/kor.svg'
    },
    {
        lang: 'lietuvių kalba',
        code: 'lt',
        flag: 'https://restcountries.eu/data/ltu.svg'
    },
    {
        lang: 'македонски јазик',
        code: 'mk',
        flag: 'https://restcountries.eu/data/mkd.svg'
    },
    {
        lang: 'بهاس ملايو',
        code: 'ms',
        flag: 'https://restcountries.eu/data/sgp.svg'
    },
    {
        lang: 'Norsk bokmål',
        code: 'nb',
        flag: 'https://restcountries.eu/data/nor.svg'
    },
    {
        lang: 'Nederlands',
        code: 'nl',
        flag: 'https://restcountries.eu/data/nld.svg'
    },
    {
        lang: 'Norsk nynorsk',
        code: 'nn',
        flag: 'https://restcountries.eu/data/bvt.svg'
    },
    {
        lang: 'Polski',
        code: 'pl',
        flag: 'https://restcountries.eu/data/pol.svg'
    },
    {
        lang: 'Português',
        code: 'pt',
        flag: 'https://restcountries.eu/data/bra.svg'
    },
    {
        lang: 'română',
        code: 'ro',
        flag: 'https://restcountries.eu/data/rou.svg'
    },
    {
        lang: 'русский язык',
        code: 'ru',
        flag: 'https://restcountries.eu/data/rus.svg'
    },
    {
        lang: 'slovenčina',
        code: 'sk',
        flag: 'https://restcountries.eu/data/cze.svg'
    },
    {
        lang: 'slovenščina',
        code: 'sl',
        flag: 'https://restcountries.eu/data/svn.svg'
    },
    {
        lang: 'српски језик',
        code: 'sr',
        flag: 'https://restcountries.eu/data/srb.svg'
    },
    {
        lang: 'svenska',
        code: 'sv',
        flag: 'https://restcountries.eu/data/swe.svg'
    },
    {
        lang: 'Türkçe',
        code: 'tr',
        flag: 'https://restcountries.eu/data/tur.svg'
    },
    {
        lang: 'українська',
        code: 'uk',
        flag: 'https://restcountries.eu/data/ukr.svg'
    },
    {
        lang: '简体中文',
        code: 'zh',
        flag: 'https://restcountries.eu/data/chn.svg'
    },
];
