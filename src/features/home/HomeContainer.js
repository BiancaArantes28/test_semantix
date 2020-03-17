import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchResults } from '../../store/actions/resultsActions';

class HomeContainer extends Component {

    componentDidMount() {
        this.props.fetchResult();
    }
    render() {
        return (
            <h1>Home</h1>
        );
    }
}

const mapStateToProps = (state) => ({
    results: state.results.results,
});

const mapDispatchToProps = (dispatch) => {
    return {
        fetchResult: () => dispatch(fetchResults()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);