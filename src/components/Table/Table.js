import React from 'react';
import Card from '../Card/Card';
import "./Table.css";
const tableContent = require('../../messages/plants.json');
const tableHeader = require('../../messages/header.json');

const handleTableData = () => {
    return tableContent.plants.map(x =>
        <tr key={x.id}>
            <td>{x.plant}</td>
            <td>{x.lights ? "On" : "Off"}</td>
            <td>{x.humidity}%</td>
            <td>{x.lightsControl ? x.lightsControl.lightsOn + " - " + x.lightsControl.lightsOff  : "Off"}</td>
        </tr>
    )
}

const handleTableHeader = () => {
    return (
        <tr>
            <th>{tableHeader.plant}</th>
            <th>{tableHeader.lights}</th>
            <th>{tableHeader.humidity}</th>
            <th>{tableHeader.lightControl}</th>
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
            <div className="flex-row-reverse">
                <button>Update</button>
            </div>
        </Card>
    )
}

export default Table;
