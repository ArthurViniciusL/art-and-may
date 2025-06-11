import img01 from '../../assets/memories/01/IMG-20250417-WA0062.jpg';
import art01 from '../../assets/memories/01/art_001.png';
import music01 from "../../assets/memories/01/pra_voce_guardei_o_amor.mp3";
import cover01 from "../../assets/memories/01/ab67616d00001e02e7b3846305a0b135e675e9af.jpeg";

import img02 from '../../assets/memories/02/20250419_161752.jpg';
import art02 from '../../assets/memories/02/art_002.png';
import music02 from "../../assets/memories/02/Deusa_Do_Amor_Ao_Vivo.mp3";
import cover02 from "../../assets/memories/02/ab67616d00001e02042f939bfd3b88b2adc88ae0.jpeg";

import img03 from '../../assets/memories/03/IMG-20250425-WA0003.jpg'
import art03 from '../../assets/memories/03/art_003.png';
import music03 from "../../assets/memories/03/so_nos_dois.mp3";
import cover03 from "../../assets/memories/03/ab67616d00001e024c13c0ccec794b20803e7f69.jpeg";

import img04 from '../../assets/memories/04/IMG-20250425-WA0000.jpg';
import art04 from '../../assets/memories/04/art_004.png';
import music04 from "../../assets/memories/04/3x4_Ao_Vivo.mp3";
import cover04 from "../../assets/memories/04/ab67616d00001e02f98de08cd017b515c9e61344.jpeg";

import img05 from '../../assets/memories/05/20250526_014733.jpg';
import art05 from '../../assets/memories/05/art_005.png';
import music05 from "../../assets/memories/05/ultimo_romance.mp3";
import cover05 from "../../assets/memories/05/ab67616d00001e02376d029f01458b3e714603b1.jpeg";

import img06 from '../../assets/memories/06/IMG-20250504-WA0030.jpg';
import art06 from '../../assets/memories/06/art_006.png';
import music06 from "../../assets/memories/06/Partilhar.mp3";
import cover06 from "../../assets/memories/06/ab67616d00001e028e8c5d9bc3f929c04b15cfb4.jpeg";

import img07 from '../../assets/memories/07/20250510_180211.jpg';
import art07 from '../../assets/memories/07/art_007.png';
import music07 from "../../assets/memories/07/ter_o_coracao_no_chao.mp3";
import cover07 from "../../assets/memories/07/ab67616d00001e02190aaad879fd91cebab37efd.jpeg";

import img08 from '../../assets/memories/08/20250512_141006.jpg';
import art08 from '../../assets/memories/08/art_008.png';
import music08 from "../../assets/memories/08/quando_bate_aquela_saudade.mp3";
import cover08 from "../../assets/memories/08/ab67616d00001e02c87ac0b25bb1791cbb8d0c33.jpeg";

import img09 from '../../assets/memories/09/20250512_141021.jpg';
import art09 from '../../assets/memories/09/art_009.png';
import music09 from "../../assets/memories/09/as_coisas_tao_mais_lindas.mp3";
import cover09 from "../../assets/memories/09/ab67616d00001e02e7b3846305a0b135e675e9af.jpeg";


import img10 from '../../assets/memories/10/20250526_021101.jpg';
import art10 from '../../assets/memories/10/art_010.png';
import music10 from "../../assets/memories/10/Xuxuzinho.mp3";
import cover10 from "../../assets/memories/10/ab67616d00001e0294a7595bc84d1f323a7f4e2e.jpeg";

export interface IMemories {
    id: number;
    date: string;
    banner: {
        picture: string;
        poem: string[];
        coloringArt: string;
        pdf: string;
    };
    music: {
        src: string,
        title: string,
        artist: string,
        cover: string
    };
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
        music: {
            src: music01,
            title: "pra você guardei o amor",
            artist: "anavitória",
            cover: cover01
        }
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
        music: {
            src: music02,
            title: "Deusa do amor",
            artist: "Caetano Veloso, Moreno Veloso",
            cover: cover02
        }
    },
    {
        "id": 3,
        "date": "25-04-2025",
        banner: {
            picture: img03,
            poem: [],
            coloringArt: art03,
            pdf: '/public/arts/art_003.pdf'
        },
        music: {
            src: music03,
            title: "Só nós dois",
            artist: "Tim Bernades",
            cover: cover03
        }
    },
    {
        "id": 4,
        "date": "25-04-25",
        banner: {
            picture: img04,
            poem: [],
            coloringArt: art04,
            pdf: '/public/arts/art_004.pdf'
        },
        music: {
            src: music04,
            title: "3x4 (Ao vivo)",
            artist: "Engenheiros do Hawaii",
            cover: cover04
        }
    },
    {
        "id": 5,
        "date": "04-05-25",
        banner: {
            picture: img05,
            poem: [],
            coloringArt: art05,
            pdf: '/public/arts/art_005.pdf'
        },
        music: {
            src: music05,
            title: "Último romance",
            artist: "Los Hermanos",
            cover: cover05
        }
    },
    {
        "id": 6,
        "date": "04-05-25",
        banner: {
            picture: img06,
            poem: [],
            coloringArt: art06,
            pdf: '/public/arts/art_006.pdf'
        },
        music: {
            src: music06,
            title: "Partilhar",
            artist: "Rubel",
            cover: cover06
        }
    },
    {
        "id": 7,
        "date": "04-05-25",
        banner: {
            picture: img07,
            poem: [],
            coloringArt: art07,
            pdf: '/public/arts/art_007.pdf'
        },
        music: {
            src: music07,
            title: "Ter o Coração no chão",
            artist: "Anavitória",
            cover: cover07
        }
    },
    {
        "id": 8,
        "date": "10-05-25",
        banner: {
            picture: img08,
            poem: [],
            coloringArt: art08,
            pdf: '/public/arts/art_008.pdf'
        },
        music: {
            src: music08,
            title: "Quando bate aquela saudade",
            artist: "Rubel",
            cover: cover08
        }
    },
    {
        "id": 9,
        "date": "10-05-25",
        banner: {
            picture: img09,
            poem: [],
            coloringArt: art09,
            pdf: '/public/arts/art_009.pdf'
        },
        music: {
            src: music09,
            title: "As coisas tão mais lindas",
            artist: "Anavitória",
            cover: cover09
        }
    },
    {
        "id": 10,
        "date": "10-05-25",
        banner: {
            picture: img10,
            poem: [],
            coloringArt: art10,
            pdf: '/public/arts/art_010.pdf'
        },
        music: {
            src: music10,
            title: "Xuxuzinho",
            artist: "Rita Lee, Roberto de Carvalho",
            cover: cover10
        }
    },
]