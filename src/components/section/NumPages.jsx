import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';

const NumPages = () => {
    const [pdfUrl, setPdfUrl] = useState("./cvisaac.pdf");
// Remplace par l'URL de ton fichier PDF
    const [NumPages, setNumPages] = useState(null)

    // Cette fonction récupère le nombre total de pages dans le PDF
    function onLoadSuccess({ NumPages }) {
        setNumPages(NumPages);
    }

    return (
        <div>
            <h2>Affichage du PDF</h2>
            <Document
                file={pdfUrl}
                onLoadSuccess={onLoadSuccess}
            >
                {/* Affiche toutes les pages du PDF */}
                {[...Array(NumPages)].map((_, pageIndex) => (
                    <Page key={pageIndex} pageNumber={pageIndex + 1} />
                ))}
            </Document>
        </div>
    );
};

export default NumPages;
