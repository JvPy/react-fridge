import React from 'react';
import HumidityChart from '../HumidityChart/HumidityChart'
import Table from '../Table/Table'

const Root = () => {
    return (
        <React.Fragment>
            <HumidityChart />
            <Table />
        </React.Fragment>
    )
}

export default Root;
