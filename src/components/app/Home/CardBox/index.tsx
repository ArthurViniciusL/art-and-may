interface CardBoxProps {
    children: React.ReactNode;
    key: number;
}

export default function CardBox({children, key}: CardBoxProps) {
    return (
        <>
            <li key={key} className="art:h:fit art:ease:quick art:flex art:gap:base art:col art:y-items:center art:bg:white-01 art:p:base art:border:solid art:border:white-02 art:border:thin art:border-rd:lg art::border-rd:xl" >
                {children}
            </li>
        </>
    )
}