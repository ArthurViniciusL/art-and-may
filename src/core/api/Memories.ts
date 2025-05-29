import img01 from '../../assets/memories/01/IMG-20250417-WA0062.jpg';
import art01 from '../../assets/memories/01/file_00000000fbd8622fb0efefa1282e4c12.png';

import img02 from '../../assets/memories/02/20250419_161752.jpg';
import art02 from '../../assets/memories/02/file_000000004090622f9f6947ee69441d46.png';

import img03 from '../../assets/memories/03/IMG-20250425-WA0000.jpg';
import art03 from '../../assets/memories/03/file_000000003650622fbf3e8e5f86b1c8b3.png';

export interface IMemories {
    id:number
    date: string,
    picture: string,
    coloringArt: string,
    poem: string,
    music: string
}

export const Memories: IMemories[] = [
    {
        "id": 1,
        "date": "29-03-2025",
        "picture": img01,
        "coloringArt": art01,
        "poem": "",
        "music": ""
    },
    {
        "id": 2,
        "date": "19-04-2025",
        "picture": img02,
        "coloringArt": art02,
        "poem": "",
        "music": ""
    },
    {
        "id": 3,
        "date": "03-05-2025",
        "picture": img03,
        "coloringArt": art03,
        "poem": "",
        "music": ""
    },
]