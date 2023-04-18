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
            href="https://app.powerbi.com/reportEmbed?reportId=51d705c3-a1cb-4a1c-8d8c-c188106fd1ba&autoAuth=true&ctid=0976e342-5cad-4116-bf33-66b53eac0b2b"
          >
            ici
          </a>
          </button>
          {/* <button>
          <a
            className="w-full h-[1000px]"
            target="_blank"
            href="https://app.powerbi.com/view?r=eyJrIjoiODVhYWMyMTQtMzc3MC00MjNiLThiMmEtZTA5MmEwNzFjM2JlIiwidCI6IjA5NzZlMzQyLTVjYWQtNDExNi1iZjMzLTY2YjUzZWFjMGIyYiJ9"
          >
            la
          </a>
        </button> */}
      </div>
    </section>
  );
};

export default Produit;
