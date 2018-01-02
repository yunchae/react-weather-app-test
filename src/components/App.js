import React, {Component} from "react";
import ZipForm from './ZipForm'
import WeatherList from './WeatherList'
import CurrentDay from './CurrentDay'
import {get} from 'axios';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            weatherData: [],
            zipcode: '',
            city: {},
            dates: [],
            selectedDate: null
        };

        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onDayClicked = this.onDayClicked.bind(this);
    }

    onFormSubmit(zip) {

        const zipcode = zip * 1;
        const {weatherData} = this.state;
        const data = weatherData.find(wd => wd.id === zipcode);
        const {city, list:dates} = data;

        this.setState({zipcode, city, dates, selectedDate:null})
    }

    onDayClicked(dayIndex) {
        this.setState({selectedDate:dayIndex})
    }

    componentDidMount() {
        get(`http://localhost:3000/weather`)
            .then(({data: weatherData}) => {
                this.setState({weatherData});
            })
    }

    render() {
        const {weatherData, dates, city, selectedDate} = this.state;
        const zips = weatherData.map(w => w.id);

        return (
            <div className='app'>
                <ZipForm zips={zips} onSubmit={this.onFormSubmit}/>
                <WeatherList days={dates} onDayClicked={this.onDayClicked}/>
                {selectedDate !== null && <CurrentDay day={dates[selectedDate]} city={city}/>}
            </div>
        )
    }
}

export default App