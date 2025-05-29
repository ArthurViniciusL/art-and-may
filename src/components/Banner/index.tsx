import {BannerType, type IBanner} from "../../types/BannerType.ts";
import Img from "../ui/Img";
import Button from "../ui/Button";
import {IconClose, IconDownload} from "../../core/modules/app.modules.ts";

interface BannerProps {
    selected: IBanner;

    picture: string;
    coloringArt: string
}

export default function Banner({picture, coloringArt, selected}: BannerProps) {

    // TODO Melhorar para evitar usar varias vezes a tag img, modando apenas o src;
    // TODO Sugestão: receber o objeto completo e mapear ele, para final setar um estado para o src

    const src = selected === BannerType.PICTURE ? picture : coloringArt;

    return (
        <>
            <div style={{width: "22rem", height: "25rem"}} className="art:relative art:border:solid art:border:thin art:border:white-02 art:border-rd:base art:ease:quick art:flex art:x-center art:y-center art:overflow:hidden">

                <Button className="art:absolute art:top:0 art:left:0 art:right:0 art:m:sm art:border:none art::font:red-02">
                    <IconClose/>
                </Button>

                <Img src={src}/>

                <Button className="art:absolute art:bottom:0 art:left:0 art:right:0 art:box-shadown art:m:sm art:bg:black-01 art:font:green-01 art:border:thin art:border:green-01">
                    <IconDownload strokeWidth={1.5} />
                </Button>
            </div>
        </>
    )
}