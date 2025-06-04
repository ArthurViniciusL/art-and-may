interface ImgProps {
    src: string;
    alt?: string
};

export default function Img({src,alt}: ImgProps) {
    return (
        <img className="art:ease:quick" style={{width: "100%", height: "auto", objectFit: "cover"}}
             src={src} alt={alt}/>
    )
}