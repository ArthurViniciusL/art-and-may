import css from "./Home.module.css";

import {type IMemories, Memories} from "../../core/api/Memories.ts";
import CardBox from "../../components/app/Home/CardBox";
import Button from "../../components/ui/Button";
import MusicPlayer from "../../components/MusicPlayer";
import Banner from "../../components/Banner";
import {IconArt, IconMusic, IconPoems} from "../../core/modules/app.modules.ts";
import {useState} from "react";
import {BannerType} from "../../types/BannerType.ts";


function Home() {

    // TODO Criar um Array com todos os ids selecionados e verificar se ele existe na coelção para exibir um determinado item, sem anular o anterior.

    // const [selectedId, setSelectedId] = useState<number>(0);
    const [currentContent, setCurrentContent] = useState(BannerType.PICTURE);
    const [musicIsSlect, setMusicIsSlect] = useState<boolean>(false);

    const [test, setTest] = useState<number[]>([]);

    const data: IMemories[] = Memories;

    //console.log(data);

    function handleMusic(id: number) {

        if (test.includes(id)) {
            // remove selected id
            setTest(prev => prev.filter(value => value !== id));
        }

        if (!test.includes(id)) {
            // add selected id
            setTest(prev => {
                // setSelectedId(id);
                const array = [...prev, id];
                //console.log(array);
                return array;
            });
        }

        setMusicIsSlect(true);

        //console.log(selectedId);
        //console.log(test)
    }

    function treatDate(date: string) {
        return date.split("-").reverse().join("/");
    }

    return (
        <>
            <main className="art:flex art:x-content:center">
                <ul className={css.content}>
                    {
                        data.map((memorie: IMemories) => {
                            return (
                                <CardBox key={memorie.id}>
                                    <Banner selected={currentContent} picture={memorie.picture}
                                            coloringArt={memorie.coloringArt}/>
                                    <div className="art:w:full art:flex art:gap:base art:row art:x-content:between">
                                        <h3 className="art:font:black-02 art:font:bold">Interagir:</h3>
                                        <p className="cedarville-cursive-regular">
                                            {treatDate(memorie.date)}
                                        </p>
                                    </div>
                                    <div className="art:w:full art:flex art:gap:base art:x-center ">
                                        <Button onClick={() => {
                                            handleMusic(memorie.id)
                                        }}>
                                            <IconMusic/>
                                        </Button>

                                        <Button>
                                            <IconPoems/>
                                        </Button>

                                        <Button onClick={() => {
                                            setCurrentContent(BannerType.COLORING_ART)
                                        }}>
                                            <IconArt/>
                                        </Button>
                                    </div>
                                    { musicIsSlect && test.includes(memorie.id) ?
                                        (<MusicPlayer/>) : (<></>)
                                    }
                                </CardBox>
                            );
                        })
                    }
                </ul>
            </main>
        </>
    )
}

export default Home
