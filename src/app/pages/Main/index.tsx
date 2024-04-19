'use client';
import Image from "next/image";
import { CButton, CCol, CForm, CFormTextarea, CModal, CModalBody } from "@coreui/react";
import '@coreui/coreui/dist/css/coreui.min.css';
import { FormEvent, MouseEvent, useEffect, useState } from "react";
import { CgCopy } from "react-icons/cg";
import styles from "../../page.module.css";
import { useToast } from "@/contexts/toast";

export default function MainPage() {
    const { addToast, Toaster } = useToast();

    const [urlOrigin, setUrlOrigin] = useState<string>('');
    const [urlDestin, setUrlDestin] = useState<string>('');
    const [showModal, setShowModal] = useState<boolean>(false);

    function handleOnSubmit(e: MouseEvent<HTMLAnchorElement | HTMLButtonElement, globalThis.MouseEvent>) {
        e.preventDefault();
        if (!urlDestin || urlDestin == "undefined") {
            addToast("Código inválido", "alert", "Insira um código embed correto");

            return;
        }
        setShowModal(true);
    }

    async function handleCopyToClipboard() {
        try {
            await navigator.clipboard.writeText(urlDestin);
            addToast("URL copiada com sucesso!", "success");
        } catch (error) {
            addToast("Erro ao copiar a URL", "error", "Erro inesperado");
        }
    }

    useEffect(() => {
        const arraySplit = urlOrigin.split(`"`);
        if (arraySplit.length > 1) {
            const urlText = arraySplit[1];
            const urlTextReplace = urlText
                .replace("em=2", "app=excel")
                .replace("embed", "download");
            setUrlDestin(urlTextReplace);
        }
    }, [urlOrigin]);

    return (
        <>
            <Toaster />
            <div className={styles.main}>
                <div className={styles.description}>
                    <p>
                        Cole o código embed disponibilizado pelo OneDrive &nbsp;
                        <div>Conforme o exemplo abaixo:</div>
                        <code className={styles.code}>
                            {`<iframe src="https://onedrive.live.com/embed?resid=D6D92233446571C14%21299319&authkey=!ACADJ28SF9JNQ&em=2" width="402" height="346" frameborder="0" scrolling="no"></iframe>`}
                        </code>
                    </p>
                </div>

                <CForm style={{ width: '-webkit-fill-available' }}>
                    <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', justifyContent: 'center' }}>
                        <CFormTextarea
                            style={{ width: '50%', height: '6rem' }}
                            placeholder="Insira o código embed aqui"
                            value={urlOrigin}
                            onChange={e => setUrlOrigin(e.target.value)}
                        />
                        <div>
                            <CButton
                                onClick={(e) => handleOnSubmit(e)}
                                type="submit" style={{ width: "150%" }} color="light">Obter Url</CButton>
                        </div>
                    </div>
                </CForm>

                <div style={{ gridTemplateColumns: 'repeat(2, minmax(25%, auto))' }} className={styles.grid}>
                    {/* Cartões com links para outras páginas */}
                    <a
                        href="https://github.com/ryangalvaogp/"
                        className={styles.card}
                        style={{ color: 'black', justifySelf: 'center' }}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <h2>GitHub <span>-&gt;</span></h2>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/ryangalvaogp/"
                        className={styles.card}
                        target="_blank"
                        style={{ color: 'black', justifySelf: 'center' }}
                        rel="noopener noreferrer"
                    >
                        <h2>LinkedIn <span>-&gt;</span></h2>
                    </a>
                </div>

                <CModal alignment="center" visible={showModal} onClose={() => setShowModal(false)}>
                    <CModalBody>
                        <CForm>
                            <CCol style={{ display: "flex" }} xs="auto">
                                <CButton color="light" className="mb-3" onClick={handleCopyToClipboard}>
                                    <CgCopy />
                                </CButton>
                                <CFormTextarea style={{ height: "6rem" }} value={urlDestin} readOnly />
                            </CCol>
                        </CForm>
                    </CModalBody>
                </CModal>
            </div >

        </>
    );
}
