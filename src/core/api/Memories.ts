import img01 from '../../assets/memories/01/IMG-20250417-WA0062.jpg';
import art01 from '../../assets/memories/01/art_001.png';

import img02 from '../../assets/memories/02/20250419_161752.jpg';
import art02 from '../../assets/memories/02/art_002.png';

import img03 from '../../assets/memories/03/IMG-20250425-WA0003.jpg'
import art03 from '../../assets/memories/03/art_003.png';

import img04 from '../../assets/memories/04/IMG-20250425-WA0000.jpg';
import art04 from '../../assets/memories/04/art_004.png';

import img05 from '../../assets/memories/05/20250526_014733.jpg';
import art05 from '../../assets/memories/05/art_005.png';

export interface IMemories {
    id: number;
    date: string;
    banner: {
        picture: string;
        poem: string[];
        coloringArt: string;
        pdf: string;
    };
    music: string;
}

export const Memories: IMemories[] = [
    {
        id: 1,
        date: "29-03-2025",
        banner: {
            picture: img01,
            poem: ["De repente era você", "Sem hora marcada", "Uma paixão inesperada", "De repente era você"],
            coloringArt: art01,
            pdf: '/public/arts/art_001.pdf'
        },
        music: ""
    },
    {
        "id": 2,
        "date": "19-04-2025",
        banner: {
            picture: img02,
            poem: ["Teu olhar carrega a sinceridade das verdades não ditas", "No fundo dos teus olhos eu posso ler as palavras que a sua boca não expressa", "Palavras de dúvida, de admiração, de excitação e paixão", "Foi na verdade de seus olhos que me despi dos meus medos e me cobri com paixão"],
            coloringArt: art02,
            pdf: '/public/arts/art_002.pdf'
        },
        "music": ""
    },
    {
        "id": 3,
        "date": "03-05-2025",
        banner: {
            picture: img03,
            poem: [],
            coloringArt: art03,
            pdf: '/public/arts/art_003.pdf'
        },
        "music": ""
    },
    {
        "id": 4,
        "date": "",
        banner: {
            picture: img04,
            poem: [],
            coloringArt: art04,
            pdf: '/public/arts/art_004.pdf'
        },
        "music": ""
    },
    {
        "id": 5,
        "date": "",
        banner: {
            picture: img05,
            poem: [],
            coloringArt: art05,
            pdf: '/public/arts/art_005.pdf'
        },
        "music": ""
    },
]