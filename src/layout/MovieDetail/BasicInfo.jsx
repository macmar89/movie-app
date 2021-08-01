import React from "react";

const BasicInfo = ({ data }) => {
  return (
    <div className="row  py-4  d-flex justify-content-center">
      <div className="col-12 col-md-7">
        <table className="table">
          <tbody>
            <tr>
              <td>Title</td>
              <th>{data.Title}</th>
            </tr>
            <tr>
              <td>Genre</td>
              <th>{data.Genre}</th>
            </tr>
            <tr>
              <td>Country</td>
              <th>{data.Country}</th>
            </tr>
            <tr>
              <td>Director</td>
              <th>{data.Director}</th>
            </tr>
            <tr>
              <td>Writer</td>
              <th>{data.Writer}</th>
            </tr>
            <tr>
              <td>Actors</td>
              <th>{data.Actors}</th>
            </tr>
          </tbody>
        </table>
        <p className="px-3 py-1 overflow-auto">{data.Plot}</p>
      </div>
      <div className="col-12 order-first order-md-last col-md-5 mb-4 mb-md-0 d-flex  justify-content-center">
        <img className="select-none" src={data.Poster} alt={` poster`} />
      </div>
    </div>
  );
};

export default BasicInfo;
