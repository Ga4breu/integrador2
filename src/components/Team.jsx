import React from "react";

export const Team = (props) => {
  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="place-content-center section-title">
          <h2>Conheça a nossa Equipe.</h2>
          <p>
            Nosso grupo é composto pelos melhores alunos do curso de Engenharia Elétrica da Universidade Estadual do Oeste do Paraná.
            Desde o início do curso.
          </p>
        </div>
        <div id="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4 place-content-center  team">
                  <div className="thumbnail">
                    {" "}
                    <img src={d.img} alt="..." className="team-img" />
                    <div className="caption">
                      <h4>{d.name}</h4>
                      <p>{d.job}</p>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
