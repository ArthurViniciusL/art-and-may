interface ButtonProps {
    className?: string;
    children: React.ReactNode;
}
export default function Button({className, children}:ButtonProps) {
    return (
        <button className={className}>
            {children}
        </button>
    )

}