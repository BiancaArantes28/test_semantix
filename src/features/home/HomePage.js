import React, { Component } from 'react';
import PropTypes from 'prop-types';

import BarChart from '../../common/charts/BarChart';
import Card from '../../common/card/Card';
import Spinner from '../../common/spinner/Spinner';
import PieChart from '../../common/charts/PieChart';

import { RESULTS_STATUS } from '../../store/reducers/resultsReducer';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.canvasRef = React.createRef();
    }

    renderLoading() {
        return <Spinner />;
    }

    renderBody(data, labels) {
        return (
            <div className="spacing">
                <Card xs={6}>
                    <BarChart
                        backgroundColor={'#03A9F4'}
                        borderColor={'#03A9F4'}
                        data={data}
                        labels={labels}
                        label={'Results'}
                        title={'BARS CHART'}
                    />
                </Card>
                <Card xs={6}>
                    <PieChart
                        data={[25, 55, 20]}
                        labels={['legend 1', 'legend 2', 'legend 3']}
                        label={'Legenda'}
                        backgroundColor={['#ABE1FA', '#303F9F', '#2AB92E']}
                        hoverBackgroundColor={['#ABE1FA', '#303F9F', '#2AB92E']}
                        title={'PIE CHART'}
                    />
                </Card>
            </div>
        );
    }

    render() {
        let content;
        const { data, labels, status } = this.props;

        if (status === RESULTS_STATUS.INPROGRESS || status === RESULTS_STATUS.NOT_FETCHED) {
            content = this.renderLoading();
        } else {
            content = this.renderBody(data, labels);
        }
        return (
            <div className="page">
                <h1>Page 1</h1>
                {content}
            </div>
        );
    }
}

HomePage.propTypes = {
    data: PropTypes.arrayOf(PropTypes.number),
    labels: PropTypes.arrayOf(PropTypes.string),
    status: PropTypes.string.isRequired,
}

export default HomePage;