import React from 'react';
import Card from '../Card/Card';
import "./Table.css";
const tableContent = require('../../messages/plants.json');
const tableHeader = require('../../messages/header.json');

console.log(tableHeader)

const handleTableData = () => {
    return tableContent.plants.map((x,i) =>
        <tr key={i}>
            <td>{x.plant}</td>
            <td>{x.lights ? "On" : "Off"}</td>
            <td>{x.humidity}%</td>
            <td>x</td>
        </tr>
    )
}

const handleTableHeader = () => {
    return (
        <tr>
            <th>{tableHeader.plant}</th>
            <th>{tableHeader.lights}</th>
            <th>{tableHeader.humidity}</th>
            <th>x</th>
        </tr>
    )
}

const Table = () => {
    handleTableData();
    return (
      <Card>
          <table>
                <thead>
                    {handleTableHeader()}
                </thead>
                <tbody>
                    {handleTableData()}
                </tbody>
          </table>
      </Card>
    )
}

export default Table;
