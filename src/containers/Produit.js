import React from "react";

const Produit = () => {
  return (
    <section className="pt-52" data-aos="zoom-in-out">
      <div>
        <p>Test du rapport global</p>
        <button>
          <a
            className="w-full h-[1000px] "
            target="_blank"
            rel="noreferrer"
            href="https://app.powerbi.com/view?r=eyJrIjoiNTBjMGJlZmYtMmRlZS00ZjczLThkZjgtYTlhMGRiZTllZTQ1IiwidCI6IjA5NzZlMzQyLTVjYWQtNDExNi1iZjMzLTY2YjUzZWFjMGIyYiJ9"
          >
            ici
          </a>
          </button>


          <p>test de l'autre rapport</p>
          <button>
          <a
            className="w-full h-[1000px]"
            rel="noreferrer"
            target="_blank"
            href="https://app.powerbi.com/view?r=eyJrIjoiODVhYWMyMTQtMzc3MC00MjNiLThiMmEtZTA5MmEwNzFjM2JlIiwidCI6IjA5NzZlMzQyLTVjYWQtNDExNi1iZjMzLTY2YjUzZWFjMGIyYiJ9"
          >
            la
          </a>
        </button>
      </div>
    </section>
  );
};

export default Produit;
