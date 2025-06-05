import assi from "../../assets/pictures/assinatura.svg";

interface PoemProps {
    text: string[],
}

export default function Poem({ text }: PoemProps) {

    const art = {
        box: "art:flex art:w:full art:col",
        poem: "art:w:full art:h:full art:p:lg art:font:black-02 art:flex art:gap:sm art:col art:x-content:center art:y-items:center"
    }

    return (
        <div className={art.box}>

            <article className={art.poem} style={{ "background": "#F6EEE3"}}>
                {
                    text.map((line) => (
                        <p>
                            {line}
                        </p>
                    ))
                }
            </article>

            <img className="art:absolute art:bottom:0 art:right:0 art:m:base" src={assi} width={70} />
        </div>
    )
}