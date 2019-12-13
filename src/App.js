import React,{Component} from 'react'; 
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {Grid, Row, Col} from 'react-flexbox-grid'; 
import LocationListContainer from './containers/LocationListContainer';
import './App.css';
import { Typography } from '@material-ui/core';
import ForecastExtendedContainer from './containers/ForecastExtendedContainer';


const cities = [
  'Asuncion,par',
  'Buenos Aires,ar',
  'Mexico,mex',
  'Barcelona,es',
  'Lima,per',
]

class App extends Component {
  

  render(){
    return (
      <Grid> 
        <AppBar position='sticky'>
          <Toolbar>
            <Typography  variant='h4' color='inherit'>
              Weather App
            </Typography>
          </Toolbar>
        </AppBar>
        <Row>
          <Col xs={12} md={6}>
            <LocationListContainer cities={cities}  ></LocationListContainer>
          </Col>
          <Col xs={12} md={6}>
            <Paper elevation={4}>
              <div className="details"> 
                <ForecastExtendedContainer></ForecastExtendedContainer> 
              </div>
            </Paper>
          </Col>
        </Row>
      </Grid>
    );
  }
}

 
 

export default  App;
 

