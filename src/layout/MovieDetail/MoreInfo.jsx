import React from "react";

const MoreInfo = ({ data }) => {
  return (
    <div>
      <table className="table">
        <tbody>
          <tr>
            <td>Production</td>
            <th>{data.Production}</th>
          </tr>
          <tr>
            <td>Language</td>
            <th>{data.Language}</th>
          </tr>
          <tr>
            <td>Released</td>
            <th>{data.Released}</th>
          </tr>
          <tr>
            <td>DVD</td>
            <th>{data.DVD}</th>
          </tr>
          <tr>
            <td>Awards</td>
            <th>{data.Awards}</th>
          </tr>
          <tr>
            <td>Box Office</td>
            <th>{data.BoxOffice}</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MoreInfo;
