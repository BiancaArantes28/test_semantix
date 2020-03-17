import React, { Component } from 'react';
import LineChart from '../../common/charts/LineChart';
import Card from '../../common/card/Card';

class SecondPage extends Component {

    renderBody() {
        const datasets = [
            {
                label: 'Today',
                fill: false,
                lineTension: 0.5,
                backgroundColor: '#303F9F',
                borderColor: '#303F9F',
                borderWidth: 2,
                data: [26, 10, 55, 54, 100, 30, 60, 58, 90]
            },
            {
                label: 'Yesterday',
                fill: false,
                lineTension: 0.5,
                backgroundColor: '#BF3FFF',
                borderColor: '#BF3FFF',
                borderWidth: 2,
                data: [10, 40, 48, 26, 80, 0, 50, 30, 75]
            },
        ];
        return (
            <div className="spacing">
                <Card xs={6}>
                    <LineChart
                        datasets={datasets}
                        labels={['0', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00']}
                        title={'LINE CHART 2 DATA'}
                    />
                </Card>
            </div>
        );
    }

    render() {
        let content = this.renderBody();
        return (
            <div className="page">
                <h1>Page 2</h1>
                {content}
            </div>
        );
    }
}

export default SecondPage;