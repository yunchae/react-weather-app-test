import React, {Component} from "react";
import ZipForm from './ZipForm'
import WeatherList from './WeatherList'
import CurrentDay from './CurrentDay'
import {get} from 'axios';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            zipcode: '',
            city: {},
            dates: [],
            selectedDate: null
        };

        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onDayClicked = this.onDayClicked.bind(this);
    }

    onFormSubmit(zipcode) {

        get(`http://localhost:3000/weather/${zipcode}`)
            .then(({data}) => {
                const {city, list: dates} = data;
                this.setState({zipcode, city, dates, selectedDate:null});
            })
        // this.setState({zipcode});
    }

    onDayClicked(dayIndex) {
        this.setState({selectedDate:dayIndex})
    }

    // getCurrentDayComponent() {
    //     const {dates, city, selectedDate} = this.state;
    //
    //     if(this.state.selectedDate === null) {
    //         return null;
    //     }
    //
    //     return <CurrentDay day={dates[selectedDate]} city={city}/>
    // }

    render() {

        const {dates, city, selectedDate} = this.state;

        return (
            <div className='app'>
                <ZipForm onSubmit={this.onFormSubmit}/>
                <WeatherList days={dates} onDayClicked={this.onDayClicked}/>
                {selectedDate !== null && <CurrentDay day={dates[selectedDate]} city={city}/>}
                {/*{this.getCurrentDayComponent()}*/}
            </div>
        )
    }
}

export default App