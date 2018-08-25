import React from 'react';
import Header from './header';
import SearchBar from './search-bar';
import AddLocation from './add-location';

class App extends React.Component {
    
    render() {
        return (
            <div className="app">
                <Header />
                <SearchBar />
                <AddLocation />
            </div>
        );
    }
}

export default App;
