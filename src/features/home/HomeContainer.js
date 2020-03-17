import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchResults } from '../../store/actions/resultsActions';
import { getStatus, getData, getLabels } from '../../store/selectors/resultsSelectors';
import { RESULTS_STATUS } from '../../store/reducers/resultsReducer';
import HomePage from './HomePage';

class HomeContainer extends Component {

    componentDidMount() {
        if (RESULTS_STATUS.NOT_FETCHED) {
            this.props.fetchResult();
        }
    }

    render() {
        return (
            <HomePage
                data={this.props.data}
                labels={this.props.labels}
                results={this.props.results}
                status={this.props.status}
            />
        );
    }
}

HomeContainer.propTypes = {
    data: PropTypes.arrayOf(PropTypes.number),
    labels: PropTypes.arrayOf(PropTypes.string),
    fetchResult: PropTypes.func.isRequired,
    status: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
    data: getData(state),
    labels: getLabels(state),
    status: getStatus(state),
});

const mapDispatchToProps = (dispatch) => {
    return {
        fetchResult: () => dispatch(fetchResults()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);