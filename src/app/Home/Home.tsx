import css from "./Home.module.css";

import {type IMemories, Memories} from "../../core/api/Memories.ts";
import CardBox from "../../components/app/Home/CardBox";
import Button from "../../components/ui/Button";
import MusicPlayer from "../../components/MusicPlayer";
import Banner from "../../components/Banner";
import {IconArt, IconMusic, IconPoems} from "../../core/modules/app.modules.ts";
import {useState} from "react";

function Home() {

    // TODO Criar um Array com todos os ids selecionados e verificar se ele existe na coelção para exibir um determinado item, sem anular o anterior.

    const [selectedId, setSelected] = useState<number>(0);
    const [currentContent, setCurrentContent] = useState<string>("picture");
    const [musicIsSlect, setMusicIsSlect] = useState<boolean>(false);

    const data: IMemories[] = Memories;
    //console.log(data);

    function handleMusic(id:number) {
        if (id === selectedId) {
            setMusicIsSlect(!musicIsSlect);
        }

        setMusicIsSlect(true);

        setSelected(id);

    }

    return (
        <>
            <main className={css.container}>
                <ul className={css.content}>
                    {
                        data.map((memorie: IMemories, index: number) => {
                            return (
                                <CardBox key={index}>
                                    <Banner selected={currentContent} picture={memorie.picture} coloringArt={memorie.coloringArt}/>
                                    <div className="art:w:full art:flex art:gap:base art:row art:x-content:between">
                                        <h3 className="art:font:black-02 art:font:bold">Interagir:</h3>
                                        <p className="cedarville-cursive-regular">
                                            {memorie.date}
                                        </p>
                                    </div>
                                    <div className="art:w:full art:flex art:gap:base art:x-center ">
                                        <Button onClick={() => {handleMusic(index)}}>
                                            <IconMusic/>
                                        </Button>
                                        <Button >
                                            <IconPoems/>
                                        </Button>
                                        <Button onClick={() => {setCurrentContent("coloringArt")}}>
                                            <IconArt/>
                                        </Button>
                                    </div>
                                    {
                                        musicIsSlect && selectedId === index ? (
                                            <MusicPlayer/>
                                        ) : (
                                            <></>
                                        )
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
