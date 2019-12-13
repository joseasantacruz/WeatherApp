import transformForcast from './../services/transformForecast';
import transformWeather from './../services/transformWeather';

const api_key ="f99bbd9e4959b513e9bd0d7f7356b38d";
const url = "http://api.openweathermap.org/data/2.5/forecast";
const url_weather = "http://api.openweathermap.org/data/2.5/weather";

export const SET_CITY = 'SET_CITY';
export const SET_FORCAST_DATA = 'SET_FORCAST_DATA';
export const GET_WEATHER_CITY = 'GET_WEATHER_CITY';
export const SET_WEATHER_CITY = 'SET_WEATHER_CITY';

const setCity = payload => ({type: SET_CITY, payload });
const setForcastData = payload => ({type: SET_FORCAST_DATA, payload});


const getWeatherCity = payload => ({type: GET_WEATHER_CITY, payload});
const setWeatherCity = payload => ({type: SET_WEATHER_CITY, payload});

 
export const setSelectedCity = payload => {
    return (dispatch, getState) => {
        const url_forecast = `${url}?q=${payload}&appid=${api_key}`;

        //activar en el estado de un indicador de busqueda de datos
        dispatch(setCity(payload));
        const state=getState();
        const date= state.cities[payload] &&  state.cities[payload].forecastDataDate;
        const now =new Date();
        if (date && (now - date)< 60000){
            return;
        }
        return fetch(url_forecast).then(
            data => (data.json()) 
        ).then(
            weather_data =>{
                //console.log(weather_data);
                const forecastData = transformForcast(weather_data);
                console.log(forecastData);
                //this.setState({forecastData})
                dispatch(setForcastData({city: payload, forecastData}));
            }
        );
    };
};


export const setWeather = payload =>{

    
    return dispatch => {
        payload.forEach(city =>{
            dispatch(getWeatherCity(city));
            const api_weather = `${url_weather}?q=${city}&appid=${api_key}`;
            fetch(api_weather).then( data =>{
                
                return data.json();
            }).then(weather_data => {
                const weather = transformWeather(weather_data);  
                dispatch(setWeatherCity({city, weather}));
            });
        });    
    } 

}