import {type IMemories, Memories} from "../../core/api/Memories.ts";
import CardBox from "../../components/app/Home/CardBox";
import Button from "../../components/ui/Button";
import MusicPlayer from "../../components/MusicPlayer";
import Banner from "../../components/Banner";

function Home() {
    const musicIsSlect = true;
    const data: IMemories[] = Memories;
    console.log(data);

    return (
        <>
            <main>
                <ul>
                    {
                        data.map((memorie: IMemories, index: number) => {
                            return (
                                <CardBox key={index}>
                                    <Banner/>
                                    <div>
                                        <h3>Interagir:</h3>
                                        <p>
                                            {memorie.date}
                                        </p>
                                    </div>
                                    <div>
                                        <Button>music</Button>
                                        <Button>poem</Button>
                                        <Button>art</Button>
                                    </div>
                                    {
                                        musicIsSlect ? (
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
