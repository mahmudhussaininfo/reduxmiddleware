import React, { useEffect, useState } from "react";
import "./Counter.scss";
import { SlTrash } from "react-icons/sl";
import { useDispatch, useSelector } from "react-redux";
import {
  getAddMamu,
  getMamu,
  mamuAddDelate,
} from "../redux/countermamu/ActionCounter";

const Counter = () => {
  const dispatch = useDispatch();

  const [mamu, setMamu] = useState("");

  const { mamus } = useSelector((state) => state.mamu);

  const handleMamu = () => {
    dispatch(getAddMamu(mamu));
  };
  const handleDelate = (id) => {
    dispatch(mamuAddDelate(id));
  };
  useEffect(() => {
    dispatch(getMamu());
  }, [dispatch]);
  return (
    <>
      <div className="container my-5 mamuCounter">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h2>Todo Application</h2>
                <form action="">
                  <input
                    className="form-control"
                    type="text"
                    value={mamu}
                    onChange={(e) => setMamu(e.target.value)}
                    placeholder="Name"
                  />
                  <button
                    className="btn btn-info w-100 my-2"
                    type="submit"
                    onClick={handleMamu}
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <ul className="list-group">
                  {mamus.map(({ name, id }, index) => {
                    return (
                      <li
                        className="list-group-item d-flex justify-content-between"
                        key={index}
                      >
                        {name}
                        <button
                          className="mamuBtn"
                          onClick={() => handleDelate(id)}
                        >
                          <SlTrash />
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Counter;
