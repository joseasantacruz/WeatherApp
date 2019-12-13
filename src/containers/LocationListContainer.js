import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
//import {setSelectedCity, setWeather, GET_WEATHER_CITY} from './../actions' 
import * as actions from './../actions' 
import {getWeatherCities, getCity} from './../reducers';
import LocationList from './../components/LocationList';

class LocationListContainer extends Component {
    componentDidMount(){
        const {setWeather, setSelectedCity, cities, city} = this.props;
        setWeather( cities);
        setSelectedCity(city);
    }
    handleSelectedLocation = city => { 
        //store.dispatch(setCity(city));
        this.props.setSelectedCity(city);
        
    }

    render() {
        return (
            <LocationList cities={this.props.citiesWeather} onSelectedLocation={this.handleSelectedLocation} ></LocationList>
        );
    }
}
LocationListContainer.propTypes = {
    setSelectedCity: PropTypes.func.isRequired,
    setWeather: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired,
    citiesWeather: PropTypes.array,
    city: PropTypes.string.isRequired,
}
const MapDispatchToProps = (dispatch) => bindActionCreators(actions,dispatch);
/*
const MapDispatchToProps = (dispatch) => ({
    setSelectedCity: value => dispatch(setSelectedCity(value)),
    setWeather: cities => dispatch(setWeather(cities)),
  });
  */
  const MapStateToProps = state =>({
    citiesWeather: getWeatherCities(state),
    city: getCity(state),
  });
export default connect(MapStateToProps,MapDispatchToProps) (LocationListContainer);