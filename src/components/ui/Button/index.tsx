interface ButtonProps {
    className?: string;
    onClick?: () => void;
    children: React.ReactNode;
}
export default function Button({className, children, onClick}:ButtonProps) {

    const defaultClassName = "art:btn art:ease:fast art:flex art:font:color:black-01";

    return (
        <button onClick={onClick} className={`${defaultClassName} ${className}`}>
            {children}
        </button>
    )

}