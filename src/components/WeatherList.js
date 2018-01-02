import React, {Component} from 'react';
import WeatherListItem from "./WeatherListItem";

class WeatherList extends Component {
    render() {
        const {days} = this.props;

        console.log('days', days);

        return (
            <div className="weather-list flex-parent">
                {days.map((day) =>
                    <WeatherListItem
                        key={day.dt}
                        day={day}/>
                )}
            </div>

        )
    }
}

export default WeatherList;