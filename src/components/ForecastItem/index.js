import React from 'react';
import PropTypes from 'prop-types';
import WeatherData from './../WeatherLocation/WeatherData';



const ForcastItem= ({weekDay,hour,data}) => (

    <div>
        <h2>{weekDay} - {hour} hs</h2>
        <WeatherData data={data}></WeatherData>
        </div>
);

ForcastItem.propTypes = {
    weekDay: PropTypes.string.isRequired,
    hour: PropTypes.number.isRequired,
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        WeatherState: PropTypes.string,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    })

};

export default ForcastItem;

