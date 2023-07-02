import React from "react";

export const Features = (props) => {
  return (
    <div id="features" className="text-center">
      <div className="container place-content-center">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Análises</h2>
        </div>
        <div className="row justify-content-center place-content-center">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-xs-6 ">
                  <i className={d.icon}></i>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
