import Button from "../ui/Button";

import { useEffect, useRef, useState } from "react";
import Img from "../ui/Img";
import { IconPause, IconPlay } from "../../core/modules/app.modules";

interface MusicPlayerProps {
    src: string;
    title: string;
    artist: string;
    cover: string;
}

export default function MusicPlayer({ src, title, artist, cover }: MusicPlayerProps) {

    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    /*
    * const [currentTime, setCurrentTime] = useState(0);
    * const [duration, setDuration] = useState(0);
    * const [volume, setVolume] = useState(0.6); // 60% de volume inicial
    * const [isMuted, setIsMuted] = useState(false);
    */

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = 0.6;
        }
    }, []);

    function togglePlayPause() {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <>
            <div className="art:w:full art:bg:white-02 art:p:base art:border-rd:lg art:flex art:gap:base art:x-content:between">

                <Img className="art:border-rd:base" src={cover} size={4} alt={`capada da música: ${title}`} />

                <div className="art:w:full art:flex art:col art:gap:sm">
                    <h3 className="art:font:base art:font:capitalize art:font:bold">
                        {title.length > 24 ? title.slice(10) + '...' : title}
                    </h3>

                    <p className="art:font:base art:font:capitalize art:font:black-04">
                        {artist.length > 24 ? artist.slice(10) + '...' : artist}
                    </p>
                </div>

                <audio controls={false} ref={audioRef} src={src} preload="metadata" />

                <div className="player-controls">
                    <Button onClick={togglePlayPause} className="art:bg:black-01 art:font:white-01 art:border:none">
                        {isPlaying ?
                            <IconPause size={22} strokeWidth={2} />
                            :
                            <IconPlay size={22} strokeWidth={2} />
                        }
                    </Button>
                </div>
            </div>
        </>
    )
}