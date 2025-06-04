interface PoemProps {
    text: string,
}

export default function Poem({ text }: PoemProps) {

    // const art = ""

    return (
        <p className="art:w:full art:font:black-02 art:flex art:col art:x-content:center art:y-items:center "
            style={{ "background": "#F6EEE3" }}
            dangerouslySetInnerHTML={{ __html: text }}
        />
    )
}