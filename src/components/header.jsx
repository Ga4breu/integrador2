import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-16 intro-text">
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                <a
                  href="https://see.cepel.br/manual/anatem/index.html" target="_blank"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Anatem
                </a>{" "}
                <a
                  href="https://www.cepel.br/produtos/anafas-2/" target="_blank"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Anafas
                </a>{" "}
                <a
                  href="https://www.google.com" target="_blank"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Dúvidas?
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
