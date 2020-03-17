import React from 'react';
import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';

import './charts.css';

const LineChart = (props) => {

    const { datasets, labels, title } = props;
    const dataChart = {
        labels,
        datasets,
    }

    return (
        <Line
            data={dataChart}
            options={{
                title: {
                    display: true,
                    text: title,
                    fontSize: 20
                },
                legend: {
                    display: true,
                    position: 'right'
                }
            }}
        />
    );
}

LineChart.propTypes = {
    datasets: PropTypes.arrayOf(PropTypes.object).isRequired,
    labels: PropTypes.arrayOf(PropTypes.string).isRequired,
    title: PropTypes.string.isRequired,
}

export default LineChart;