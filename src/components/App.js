import React from 'react';
import Header from './Header'
import Order from './Order'
import Inverntory from './Inventory'

class App extends React.Component {
    render(){
        return(
            <React.Fragment>
                <div className="catch-of-the-day">
                    <div className="menu">
                        {/* if you want to pass anything other than string, you have to use {} */}
                        <Header tagline='this is cool as rock'  />
                        

                    </div>
                    <Inverntory/>
                    <Order/>
                </div>
            </React.Fragment>
        )
    }




};

export default App;
