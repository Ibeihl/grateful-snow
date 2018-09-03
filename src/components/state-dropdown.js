import React from 'react';

class StateDropdown extends React.Component {
    render() {
        let states = [
            {
                name: "Alabama",
                abr: "al"
            },
            {
                name: "Alaska",
                abr: "ak"
            },
            {
                name: "Arizona",
                abr: "az"
            },
            {
                name: "Arkansas",
                abr: "ar"
            },
            {
                name: "California",
                abr: "ca"
            },
            {
                name: "Colorado",
                abr: "co"
            },
            {
                name: "Connecticut",
                abr: "ct"
            },
            {
                name: "Delaware",
                abr: "de"
            },
            {
                name: "Florida",
                abr: "fl"
            },
            {
                name: "Georgia",
                abr: "ga"
            },
            {
                name: "Hawaii",
                abr: "hi"
            },
            {
                name: "Idaho",
                abr: "id"
            },
            {
                name: "Illinois",
                abr: "il"
            },
            {
                name: "Indiana",
                abr: "in"
            },
            {
                name: "Iowa",
                abr: "ia"
            },
            {
                name: "Kansas",
                abr: "ks"
            },
            {
                name: "Kentucky",
                abr: "ky"
            },
            {
                name: "Louisiana",
                abr: "la"
            },
            {
                name: "Maine",
                abr: "me"
            },
            {
                name: "Maryland",
                abr: "md"
            },
            {
                name: "Massachusetts",
                abr: "ma"
            },
            {
                name: "Michigan",
                abr: "mi"
            },
            {
                name: "Minnesota",
                abr: "mn"
            },
            {
                name: "Mississippi",
                abr: "ms"
            },
            {
                name: "Missouri",
                abr: "mo"
            },
            {
                name: "Montana",
                abr: "mt"
            },
            {
                name: "Nebraska",
                abr: "ne"
            },
            {
                name: "Nevada",
                abr: "nv"
            },
            {
                name: "New Hampshire",
                abr: "nh"
            },
            {
                name: "New Jersey",
                abr: "nj"
            },
            {
                name: "New Mexico",
                abr: "nm"
            },
            {
                name: "New York",
                abr: "ny"
            },
            {
                name: "North Carolina",
                abr: "nc"
            },
            {
                name: "North Dakota",
                abr: "nd"
            },
            {
                name: "Ohio",
                abr: "oh"
            },
            {
                name: "Oklahoma",
                abr: "ok"
            },
            {
                name: "Oregon",
                abr: "or"
            },
            {
                name: "Pennsylvania",
                abr: "pa"
            },
            {
                name: "Rhode Island",
                abr: "ri"
            },
            {
                name: "South Carolina",
                abr: "sc"
            },
            {
                name: "South Dakota",
                abr: "sd"
            },
            {
                name: "Tennessee",
                abr: "tn"
            },
            {
                name: "Texas",
                abr: "tx"
            },
            {
                name: "Utah",
                abr: "ut"
            },
            {
                name: "Vermont",
                abr: "vt"
            },
            {
                name: "Virginia",
                abr: "va"
            },
            {
                name: "Washington",
                abr: "wa"
            },
            {
                name: "West Virginia",
                abr: "wv"
            },
            {
                name: "Wisconsin",
                abr: "wi"
            },
            {
                name: "Wyoming",
                abr: "wy"
            }
        ];
        let stateOptions = states.map(state => 
            <option value={state.abr}>{state.name}</option>
        ) 
        return (
            <div className="form-group states">
                {/* <label htmlFor="state">State:</label> */}
                <select className="form-control" id="state" name="state">
                    {stateOptions}
                </select>
            </div>
    );
    }
}

export default StateDropdown;
