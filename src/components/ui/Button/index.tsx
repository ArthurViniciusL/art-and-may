interface ButtonProps {
    className?: string;
    isSelected? :boolean;
    onClick?: () => void;
    children: React.ReactNode;
}
export default function Button({className, isSelected, children, onClick}:ButtonProps) {

    const selected = "art:bg:black-01  art:font:white-01 art:border:none";

    const style = isSelected ? selected : className;

    return (
        <button onClick={onClick} className={`art:p:sm art:border-rd:base art:border:none art:ease:fast art:flex art:font:color:black-01 art:flex art:gap:base art::font:white-01 art::bg:black-01 ${style}`}>
            {children}
        </button>
    )

}