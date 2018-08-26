import React from 'react';

class AddLocation extends React.Component {
    handleSubmit(e) {
        e.preventDefault();
        let newCity = e.target.city.value;
        let newState = e.target.state.value;
        newCity = newCity.split(' ').join('+');
        //then dispacth ajax call for each location and render them on page
    }


    render() {
        return (
            <form className="add-location" onSubmit={e => this.handleSubmit(e)}>
                <fieldset>
                    <legend>Add a location!</legend>
                <label htmlFor="city">Enter City and State</label>
                <input type="text" name="city" placeholder="sun valley" />
                <label htmlFor="state">Enter State</label>
                <input type="text" name="state" placeholder="id" />
                <button type="submit">Add Location</button>
                </fieldset>
            </form>
        );
    }
}

export default AddLocation;
