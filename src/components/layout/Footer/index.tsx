import art from "../../../assets/pictures/assinatura.svg";
import { IconFileDownload } from "../../../core/modules/app.modules";
import Button from "../../ui/Button";

export default function Footer() {
    return (
        <>
            <footer className="art:w:full art:flex art:gap:base art:col art:y-items:center art:p-b:base">
                <h1 className="art:font:bold art:font:lg art:font:black-02 art:font:center caveat-regular">
                    Eu te amo, meu grande e completo amor...
                </h1>

                <a href="/arts/book.pdf" target="_blank">
                    <Button className="art:p:base art:border:solid art:border:thin art:border:white-04 art::bg:black-01 art::font:white-01">
                        <IconFileDownload size={20} />
                        Baixar folhas para colorir
                    </Button>
                </a>
            </footer>
        </>
    )
}