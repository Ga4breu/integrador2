import React from "react";
import { Navigation } from "./navigation";
 const CurtoAnalises = (props) => {
  return (
    <div id="about">
      <Navigation/>
      <div className="container">
        
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <figure>
              <img src="img/faltaposte.jpg" className="img-responsive" alt="" />
              <figcaption className="text-center">Figura 1 - Descargas atmosféricas podem causar faltas.</figcaption>
            </figure>
            <figure>
              <img src="img/sequencia.jpg" className="img-responsive" alt="" />
              <figcaption className="text-center">Figura 2 - Circuitos de sequência</figcaption>
            </figure>
            <figure>
              <img src="img/trafo.png" className="img-responsive" alt="" />
              <figcaption className="text-center">Figura 3 -Influência da configuração do Trafo.</figcaption>
            </figure>
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text text-justify">
            <h2>Análises</h2>
              <h5>Nesta seção iremos abordar um pouco sobre os curto circuitos, utilizando relações causa-efeito e conceitos teóricos, também apresentaremos algumas simulações.</h5>
              <div className="list-style">
                <div className="col-lg-12 col-sm-12 col-xs-12">
                <h3>Trifásicos</h3>
                  <h5>
                    Os curtos trifásicos, também são conhecidos como curtos simétricos, e ganham esse nome por conta do equílibrio que existe entre as fases previamente a falta.
                    Curtos circuitos trifásicos são os curtos mais estudados para o dimensionamento de proteção, isso ocorre principalmente por conta de geralmente possuírem a maior corrente de curto, tornando necessário utilizá-lo como parâmetro. E é importante ressaltar que durante o curto circuito trifásico, a corrente de falta fica na linha.
                  </h5>
                  <h3>Monofásicos</h3>
                  <h5>
                    Curtos monofásicos são os mais comuns em sistemas elétricos de potência, ocorrendo principalmente nas linhas, temos nesse caso uma situação onde não há equilíbrio entre as fases, trazendo a necessidade da utilização de componentes de sequência para o seu estudo.
                    As redes de sequência trazem a necessidade de uma análise mais detalhada, como podemos ver na Figura 2, agora tratamos de três circuitos.
                  </h5>
                  <h3>Bifásico</h3>
                  <h5>
                    Faltas Bifásicas também não possuem simetria, ou seja, assim como as faltas monofásicas, é necessário utilizar as redes de sequência para estudar o impacto do curto circuito.
                    Essas Faltas ocorrem quando há contato entre duas fases, isso pode ocorrer por exemplo em dias quentes e com ventos mais intensos devido a dilatação térmica dos condutores.
                  </h5>
                  <h3>Bifásico-Terra</h3>
                  <h5>
                    Nesse caso temos a mesma situação que o caso anterior, porém, com o contato dos condutores à terra.
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
    
  );
};
export default CurtoAnalises;