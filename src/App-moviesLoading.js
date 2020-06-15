import React from 'react';
import jQuery from "jquery";
window.$ = window.jQuery = jQuery;


class App extends React.Component{
  constructor(prop){
    super(prop);
    console.log(prop)
  }
  state = {
    isLoading : true
  }
  componentDidMount(){
    setTimeout(() => {
      this.setState({isLoading:false})
    },6000)
  }
  render(){
    const {isLoading} = this.state;
    return(
      <>
        {isLoading ? "Loading..." : "We are ready"}
      </>
    )
  }
}

export default App;
  