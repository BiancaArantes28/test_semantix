import React from 'react';
import PropTypes from 'prop-types';
import { Pie } from 'react-chartjs-2';

const PieChart = (props) => {

    const { backgroundColor, data, hoverBackgroundColor, labels, label, title } = props;

    const dataChart = {
        labels,
        datasets: [
            {
                label,
                backgroundColor,
                hoverBackgroundColor,
                data,
            }
        ]
    }
    return (
        <Pie
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

PieChart.propTypes = {
    backgroundColor: PropTypes.arrayOf(PropTypes.string).isRequired,
    data: PropTypes.arrayOf(PropTypes.number).isRequired,
    hoverBackgroundColor: PropTypes.arrayOf(PropTypes.string).isRequired,
    labels: PropTypes.arrayOf(PropTypes.string).isRequired,
    label: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}

export default PieChart;