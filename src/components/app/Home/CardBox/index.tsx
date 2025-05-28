interface CardBoxProps {
    children: React.ReactNode;
    key: number;
}

export default function CardBox({children, key}: CardBoxProps) {
    return (
        <>
            <li key={key}>
                {children}
            </li>
        </>
    )
}