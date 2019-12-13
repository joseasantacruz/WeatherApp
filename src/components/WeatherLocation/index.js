import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import {PropTypes} from 'prop-types';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';

/* 

import getUrlWeatherByCity from './../../services/getUrlWeatherByCity';
import transformWeather from '../../services/transformWeather';

componentDidMount() {
        const api_weather = getUrlWeatherByCity(this.state.city);
        fetch(api_weather).then( resolve =>{
            
            return resolve.json();
        }).then(data => {
            const newWeather = transformWeather(data); 
            this.setState({ 
                data: newWeather
            });
        }); 
    } 
     */

const  WeatherLocation = ({onWeatherLocationClick,city,data}) => (
    <div className="weatherLocationCont" onClick={onWeatherLocationClick}>
        <Location city={city}></Location>
        {data ? <WeatherData data={data}></WeatherData>: 
        <CircularProgress size={60}></CircularProgress> }
    </div> 
    ) ;

WeatherLocation.propTypes = {
    city: PropTypes.string,
    onWeatherLocationClick: PropTypes.func,
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    }),
} 
export default WeatherLocation;