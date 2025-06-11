interface ImgProps {
    className?:string
    src: string;
    alt?: string
    size?: number;
};

export default function Img({className, src,alt, size}: ImgProps) {

    const width = size ? `${size}rem` : "100%";
    const height = size ? `${size}rem` : "auto";

    return (
        <img className={`${className} art:ease:quick`} style={{width: `${width}`, height: `${height}`, objectFit: "cover"}}
             src={src} alt={alt}/>
    )
}