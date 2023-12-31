import React from 'react';

export const Navigation = (props) => {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('Integrador.pdf').then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'Integrador.pdf';
            alink.click();
        })
    })
}

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand page-scroll" href="/">
            ISEE
          </a>
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="/#about" className="page-scroll">
                O sistema
              </a>
            </li>
            <li>
              <a href="/#features" className="page-scroll">
                Introdução
              </a>
            </li>
            <li>
              <a href="/#services" className="page-scroll">
                Estudos
              </a>
            </li>
            <li></li>
            <li></li>
            <li>
              <a href="/#team" className="page-scroll">
                Equipe
              </a>
            </li>
            <li>
            <a onClick={onButtonClick}>
                    Baixe nossa apresentação
                </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
