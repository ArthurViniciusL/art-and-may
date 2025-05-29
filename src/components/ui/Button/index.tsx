interface ButtonProps {
    className?: string;
    onClick?: () => void;
    children: React.ReactNode;
}
export default function Button({className, children, onClick}:ButtonProps) {

    const styleDefault= "art:p:sm art:border-rd:base art:ease:fast art:flex art:font:color:black-01";
    const style = className ? className : "art:bg:white-02 art:font:black-01 art::bg:black-01 art::font:white-01 art:border:none";

    return (
        <button onClick={onClick} className={`${styleDefault} ${style}`}>
            {children}
        </button>
    )

}