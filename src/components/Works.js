import React from "react";
import { Workdata } from "../Workdata";

const Works = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 mb-4">
          <h3 className="text-white">My Works</h3>
          <span className="d-block h6 text-white">Here are some of my recent projects:</span>
        </div>
      {Workdata.data.map((rdata, index) => (
        <div className="col-12 col-md-4 mb-3" key={index}>
          <div className="card card_border">
            <div className="card-body px-0">
              <div className="card-title h4 py-1 pl-1">
                <a
                  className="text-white"
                  href={ rdata.link }
                >
                  { rdata.projectname }
                </a>
              </div>
              <h6 className="card-subtitle mb-1 mb-md-2 text-muted pl-3">
                Tech Used: { rdata.techs }
              </h6>
                      <p className="card-text p-2 p-md-3 pb-0">{ rdata.description }</p>
            </div>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Works;
