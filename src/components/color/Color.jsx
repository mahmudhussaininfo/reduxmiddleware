import React from "react";
import { useDispatch } from "react-redux";
import { Blue, Green, Red } from "../redux/color/ActionColor";

const Color = () => {
  const dispatch = useDispatch();
  return (
    <>
      {" "}
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h1>BackGround Color</h1>
                <hr />
                <button
                  className="btn btn-success"
                  onClick={() => dispatch(Green())}
                >
                  GREEN
                </button>{" "}
                &nbsp;
                <button
                  className="btn btn-danger"
                  onClick={() => dispatch(Red())}
                >
                  RED
                </button>{" "}
                &nbsp;
                <button
                  className="btn btn-info"
                  onClick={() => dispatch(Blue())}
                >
                  BLUE
                </button>{" "}
                &nbsp;
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Color;
