"use client";



export default function GuidePrintButton({ pdfUrl }: { pdfUrl: string }) {

  return (

    <div className="rv-guide-action-buttons">

      <a href={pdfUrl} className="btn btn-primary" download>

        Download PDF

      </a>

      <button type="button" className="btn btn-outline" onClick={() => window.print()}>

        Print page

      </button>

    </div>

  );

}


