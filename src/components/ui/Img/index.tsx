interface ImgProps {
    src: string;
};

export default function Img({src}: ImgProps) {
    return (
        <img className="art:ease:quick" style={{width: "100%", height: "auto", objectFit: "cover"}}
             src={src} alt="Banner"/>
    )
}