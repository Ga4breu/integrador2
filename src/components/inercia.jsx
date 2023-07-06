import React from "react";
import { Navigation } from "./navigation";
 const CurtoCircuito = (props) => {
  return (
    <div id="about">
      <Navigation/>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <figure>
              <img src="img/faltaseq.png" className="img-responsive" alt="" />
              <figcaption className="text-center">Figura 1 - Descargas atmosféricas podem causar faltas.</figcaption>
            </figure>
            <figure>
              <img src="img/inercia.png" className="img-responsive" alt="" />
              <figcaption className="text-center">Figura 2 - Impacto da "variação" da inércia.</figcaption>
            </figure>
            <figure>
              <img src="img/anateminercia.png" className="img-responsive" alt="" />
              <figcaption className="text-center">Figura 3 - Impacto da "variação" da inércia em uma máquina e seu tempo crítico.</figcaption>
            </figure>
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text text-justify">
              <h2>Inércia.</h2>
              <h5>Nesta seção, abordaremos como a inércia impacta a estabilidade do sistema elétrico de potência.</h5>
              <div className="list-style">
                <div className="col-lg-12 col-sm-12 col-xs-12">
                <h3></h3>
                  <h5>
                   Falar em variação da inércia não é algo factível, visto que a inércia é uma característica física do gerador, portanto não varia, porém, para analisarmos o impacto da inércia no sistema, é necessário realizar esse tipo de simulação, esse tipo de situação também pode ocorrer por exemplo quando há substituição de máquinas.
                  </h5>
                  <h5>
                   Evidentemente, de acordo com os modelos matemáticos, é possível supor que a inércia haverá uma grande influência no tempo crítico da máquina, não necessáriamente no ângulo. E é exatamente o que podemos validar com as simulações apresentadas na imagem 2.
                  </h5>
                  <h5>
                   Também, como ferramenta de análise, podemos verificar na imagem 3 uma visualização clara do impacto da inércia no tempo crítico de um gerador.
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
export default CurtoCircuito;