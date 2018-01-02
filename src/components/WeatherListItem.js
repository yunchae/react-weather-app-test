import React, {Component} from 'react';

class WeatherListItem extends React.Component {
    render() {
        const {day} = this.props;
        const date = new Date(day.dt * 1000);

        return (
            <div className="weather-list-item">
                <h1>{date.getMonth() + 1} / {date.getDate()}</h1>
                <h2>{day.temp.min.toFixed(1)}&deg;F &#124; {day.temp.max.toFixed(1)}&deg;F</h2>
            </div>
        )
    }
}

export default WeatherListItem;