interface BannerProps {
    selected: string;
    picture: string;
    coloringArt:string
}

export default function Banner({picture, coloringArt, selected}: BannerProps) {
    //{seleção} {data}

    // selected = picture

    // TODO Melhorar para evitar usar varias vezes a tag img, modando apenas o src;
    // TODO Sugestão: receber o objeto completo e mapear ele, para final setar um estado para o src

    function renderContent() {
        const content = selected;

        switch (content) {
            case "picture":
                return (
                    <>
                        <img className="art:ease:quick" style={{width: "100%", height: "auto", objectFit: "cover"}} src={picture} alt="Banner"/>
                    </>
                );
            case "coloringArt":
                return (
                    <img style={{width: "100%", height: "auto", objectFit: "cover"}} src={coloringArt} alt="Banner"/>
                );

                break;

            default:
                return <></>
        }
    }

    return (
        <>
            <div style={{width: "22rem", height: "25rem"}}
                 className="art:border:solid art:border:thin art:border:white-02 art:border-rd:base art:ease:quick art:flex art:x-center art:y-center art:overflow:hidden">
                {renderContent()}
            </div>
        </>
    )
}