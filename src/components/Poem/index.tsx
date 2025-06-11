import assi from "../../assets/pictures/assinatura.svg";

interface PoemProps {
    text: string[],
}

export default function Poem({ text }: PoemProps) {

    const art = {
        box: "art:flex art:w:full art:col",
        poem: "art:overflow:auto art:scrollbar:none art:p:lg art:font:!black-02 art:flex art:gap:sm art:col art:x-content:center art:y-items:center "
    }

    return (
        <div className={art.box} style={{ "background": "#F6EEE3"}}>

            <article className={art.poem} style={{height:"90%"}}>
                {
                    text.map((line) => (
                        <p className="art:font:center">
                            {line}
                        </p>
                    ))
                }
            </article>

            <img className="art:absolute art:bottom:0 art:right:0 art:m:base" src={assi} width={70} />
        </div>
    )
}