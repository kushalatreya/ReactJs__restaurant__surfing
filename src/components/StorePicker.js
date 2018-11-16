import React from "react";
import { getFunName } from '../helpers'


class StorePicker extends React.Component {
  myInput = React.createRef();

  handleStore = (event) => { //we change to arrow function which will bind 'this' to StorePicker component.
    //1. stop the page from submitting 
    event.preventDefault();
    console.log('handleStore is working')
    //2. get the text from corresponding input fields
    console.log(this.myInput.value.value)
    const storeName = this.myInput.value.value;
    //3. change the page to /store/:storeId (using push-state, which can be viewed in console-react--> StorePicker --> Props-> history ->push
    this.props.history.push(`/store/${storeName}`);
  }



  render() {
    return (
      <form className="store-selector" onSubmit={this.handleStore}>
        <h2>Please Enter A Store</h2>
        <input
          type="text"
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
          ref={this.myInput}
        />
        <button type="submit">Visit Store →</button>
      </form>
    );
  }
}

export default StorePicker;
