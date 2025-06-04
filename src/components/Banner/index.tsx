import Img from "../ui/Img";
import Button from "../ui/Button";
import { IconClose, IconDownload } from "../../core/modules/app.modules.ts";
import { BannerType } from "../../types/BannerType.ts";
import Poem from "../Poem/index.tsx";

interface BannerProps {
    content: string;
    /*
    content: {
        picture: string;
        coloringArt: string;
        poem: string;
    }; // IMemories["banner"][]
    */
    contentType: number;
    closeContent: () => void;
    pdfUrl?: string;
}

export default function Banner({ content, contentType, closeContent, pdfUrl }: BannerProps) {

    // TODO Ele está filtrando o card selecionado, mas por algum motivo todos que não suprem a condição ficam vazios

    return (
        <>
            <div style={{ width: "22rem", height: "25rem" }} className="art:relative art:border:solid art:border:thin art:border:white-02 art:border-rd:base art:ease:quick art:flex art:x-center art:y-center art:overflow:hidden">

                {
                    contentType === BannerType.POEM || contentType === BannerType.COLORING_ART ?
                        <Button onClick={closeContent} className="art:absolute art:top:0 art:left:0 art:right:0 art:m:sm art:border:none art:bg:black:10% art::bg:red-02 art::font:!white-01">
                            <IconClose />
                        </Button>
                        :
                        <></>
                }

                {
                    contentType === BannerType.POEM ?
                        <Poem text={content}/>
                        :
                        <Img src={content} />
                }


                {
                    contentType === BannerType.COLORING_ART ?
                        <a href={pdfUrl}>
                            <Button className="art:absolute art:bottom:0 art:left:0 art:right:0 art:box-shadown art:m:sm art:bg:black-01 art:font:green-01 art:border:thin art:border:green-01">
                                <IconDownload strokeWidth={1.5} />
                            </Button>
                        </a>
                        :
                        <></>
                }
            </div>
        </>
    )
}