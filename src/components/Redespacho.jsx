import React from "react";
import "./test.css";
import { Navigation } from "./navigation";
 const Redespacho = (props) => {
  return (
    <div id="about" className="">
      <Navigation/>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <figure>
              <img src="img/areas.png" className="img-responsive" alt="" />
              <figcaption className="text-center">Figura 1 - Despacho Atual</figcaption>
            </figure>
            <figure>
              <img src="img/tabela2.png" className="img-responsive" alt="" />
              <figcaption className="text-center">Figura 2 - Impacto do novo despacho</figcaption>
            </figure>
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text text-justify">
            <h2>Redespacho</h2>
              <h5>Por mais que a construção de uma nova linha de transmissão resolva o problema. Trata-se de algo que mexe com a infraestrutura do sistema, o que demanda muito tempo.
Dessa forma, nós propomos aqui a realização de um novo despacho.
</h5>
              <div className="list-style">
                <div className="col-lg-12 col-sm-12 col-xs-12">
                <h3></h3>
                  <h5>
                  O novo despacho foi realizado levando em consideração que a menor potência para que tivesse o maior número de máquinas e também buscando deixar as máquinas com cargas mais leves. Essa decisão foi tomada buscando melhorar a estabilidade do sistema. Isso pode ser visto através do modelo de agrupamento de máquinas onde a inércia equivalente é a soma das inércias.
                  </h5>
                  <h5>
                  Vemos na tabela da figura 1 que a área A possui uma demanda muito maior e uma geração muito baixo, sendo que a Área A está sendo alimentada também pela área B.
Com isso em vista, realizou-se um novo despacho.

Após o despacho percebemos então as seguintes mudanças:

                  </h5>
                  <h3>Resultados</h3>
                  <h5>
                  Analisando Itá:
	Houve um aumento do carregamento, implicando em uma diminuição do delta crítico e tempo crítico. Enquanto que a busca que foi feita por um H equivalente maior, aumenta um pouco o tempo crítico. Que passou de 2 para 4 máquinas.
Podemos verificar isso na tabela da Figura 2. Ou seja, Houve uma diminuição do carregamento, implicando em um aumento do delta crítico e do tempo crítico, ajudado também pelo maior equivalente de H.
                  </h5>
                  <h3>Conclusão</h3>
                  <h5>
                  A condição operativa do sistema foi melhorada do ponto de vista de estabilidade a partir da realização de um novo despacho de potência. Garantindo maior MARGEM de estabilidade. para as unidades geradoras.
                  </h5>

                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      {/* <a
  href="/curtoanalises"
  target="_blank"
  className="btn btn-custom btn-lg page-scroll bottom-button"
>
  Veja Mais
</a>{" "} */}
    </div>
    
  );
};
export default Redespacho;