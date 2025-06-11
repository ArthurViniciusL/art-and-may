import css from "./Home.module.css";

import { type IMemories, Memories } from "../../core/api/Memories.ts";
import CardBox from "../../components/app/Home/CardBox";
import Button from "../../components/ui/Button";
import MusicPlayer from "../../components/MusicPlayer";
import Banner from "../../components/Banner";
import { IconArt, IconMusic, IconPoems } from "../../core/modules/app.modules.ts";
import { useState } from "react";
import { BannerType } from "../../types/BannerType.ts";


function Home() {

    const data: IMemories[] = Memories;

    const [musicId, setMusicId] = useState<number[]>([]);
    const [poemId, setPoemId] = useState<number[]>([]);
    const [artId, setArtId] = useState<number[]>([]);

    // const [bannerContent, setBannerContent] = useState(BannerType.PICTURE);

    function addId(id: number, array: number[]) {
        return [...array, id];
    }

    function removeId(id: number, array: number[]) {
        return array.filter(item => item !== id);
    }

    function handleIdBanner(id: number, contentType: number) {
        switch (contentType) {
            case BannerType.POEM:
                setPoemId(
                    prev =>
                        prev.includes(id) ?
                            removeId(id, prev)
                            :
                            addId(id, prev)
                );
                setArtId(prev => removeId(id, prev));
                break;

            case BannerType.COLORING_ART:
                setArtId(
                    prev =>
                        prev.includes(id) ?
                            removeId(id, prev)
                            :
                            addId(id, prev)
                );
                setPoemId(prev => removeId(id, prev));
                break;
            default:
                throw new Error(`Invalid content type: ${contentType}`);
        }
        //setBannerContent(contentType);
    };


    function handleMusic(id: number) {
        setMusicId(
            prev =>
                prev.includes(id) ?
                    removeId(id, prev)
                    :
                    addId(id, prev)
        );
    }

    function toogleClose(id: number) {
        setPoemId(prev => removeId(id, prev));
        setArtId(prev => removeId(id, prev));
    }

    function treatDate(date: string) {
        return date.split("-").reverse().join("/");
    }

    return (
        <>
            <main className="art:flex art:x-content:center">
                <ul className={css.content}>
                    {
                        data.map((memorie: IMemories, index) => {
                            return (
                                <CardBox key={index}>
                                    {
                                        artId.includes(memorie.id) ?
                                            <Banner content={memorie.banner.coloringArt} contentType={BannerType.COLORING_ART} closeContent={() => { toogleClose(memorie.id) }} pdfUrl={memorie.banner.pdf} />
                                            :
                                            (
                                                poemId.includes(memorie.id) ?
                                                    <Banner content={memorie.banner.poem} contentType={BannerType.POEM} closeContent={() => { toogleClose(memorie.id) }} />
                                                    :
                                                    <Banner content={memorie.banner.picture} contentType={BannerType.PICTURE} closeContent={() => { toogleClose(memorie.id) }} />
                                            )
                                    }
                                    <div className="art:w:full art:flex art:gap:base art:row art:x-content:between">
                                        <h3 className="art:font:black-02 art:font:bold">Interagir:</h3>
                                        <p className="cedarville-cursive-regular">
                                            {treatDate(memorie.date)}
                                        </p>
                                    </div>
                                    <div className="art:w:full art:flex art:gap:base art:x-center ">

                                        <Button
                                            className="art:bg:white-02 art:font:purple-02"
                                            isSelected={musicId.includes(memorie.id)}
                                            onClick={() => { handleMusic(memorie.id) }}
                                        >
                                            <IconMusic />
                                        </Button>


                                        <Button
                                            className="art:bg:white-02 art:font:red-02 "
                                            isSelected={poemId.includes(memorie.id)}
                                            onClick={() => { handleIdBanner(memorie.id, BannerType.POEM) }}
                                        >
                                            <IconPoems />
                                        </Button>

                                        <Button
                                        className="art:bg:white-02 art:font:orange-02"
                                            isSelected={artId.includes(memorie.id)}
                                            onClick={() => { handleIdBanner(memorie.id, BannerType.COLORING_ART) }}
                                        >
                                            <IconArt />
                                        </Button>
                                    </div>
                                    {musicId.includes(memorie.id) ?
                                        (
                                            <MusicPlayer src={memorie.music.src}
                                                title={memorie.music.title}
                                                artist={memorie.music.artist}
                                                cover={memorie.music.cover} />
                                        )
                                        :
                                        (<></>)
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
