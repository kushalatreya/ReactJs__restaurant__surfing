import React from "react";
import {getFunName} from  '../helpers'


class StorePicker extends React.Component {
  
  handleStore(event){
    //1. stop the page from submitting 
    event.preventDefault();
    console.log('handleStore is working')
    //2. get the text from corresponding input fields
    
    //3. change the page to /store/:storeId
  }
  
  
  
  render() {
    return (
      <form className="store-selector" onSubmit= {this.handleStore}>
        <h2>Please Enter A Store</h2>
        <input type="text" required placeholder="Store Name" defaultValue={getFunName()} />
        <button type="submit">Visit Store →</button>
      </form>
    );
  }
}

export default StorePicker;
