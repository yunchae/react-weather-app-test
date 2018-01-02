import React, {Component} from 'react';

class ZipForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            zipcode: '',
            city: {},
            dates: [],
            selectedDate: null
        };

        this.inputUpdated = this.inputUpdated.bind(this);
        this.submitZipCode = this.submitZipCode.bind(this);
    }

    inputUpdated(e) {
        const {value} = e.target;
        this.setState({zipcode: value})
    }

    submitZipCode(e) {
        const {onSubmit} = this.props
        onSubmit(e.target.value);
    }

    render() {
        return (
            <div className="zip-form">
                <label htmlFor="zipcode"> Zip Code </label>
                <select onChange={this.submitZipCode}>
                    <option value=""> Select a zip</option>
                    {this.props.zips.map(zip =>
                        <option key={zip} value={zip}>{zip}</option>
                    )}
                </select>
                {/*<button type="submit" className="btn btn-success">Get the forecast!!</button>*/}
            </div>
        );
    }
}

export default ZipForm;