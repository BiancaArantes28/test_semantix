import React from 'react';
import PropTypes from 'prop-types';
import { Bar } from 'react-chartjs-2';

import './charts.css';

const BarChart = (props) => {
    const { backgroundColor, borderColor, data, labels, label, title } = props;

    const dataChart = {
        labels,
        datasets: [
            {
                label,
                backgroundColor,
                borderColor,
                borderWidth: 2,
                data,
            }
        ]
    }

    return (
        <Bar
            data={dataChart}
            options={{
                title: {
                    display: true,
                    text: title,
                    fontSize: 20,
                },
                legend: {
                    display: false,
                    position: 'right'
                }
            }}
        />
    );
};

BarChart.propTypes = {
    backgroundColor: PropTypes.string.isRequired,
    borderColor: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(PropTypes.number).isRequired,
    labels: PropTypes.arrayOf(PropTypes.string).isRequired,
    title: PropTypes.string.isRequired,
}
export default BarChart;