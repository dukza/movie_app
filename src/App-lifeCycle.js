import React from 'react';

class App extends React.Component{
  constructor(props){
    super(props)
    console.log('hello')
  }
  state = {
    count:0
  }
  add = () => {
    // console.log('add')
    this.setState(current => ({
      count:current.count + 1
    }))
  }
  minus = () => {
    // console.log('minus') 
    this.setState(current => ({
      count:this.state.count - 1
    }))
  }
  componentDidMount(){
    console.log('component rendered')
  }
  componentDidUpdate(){
    console.log('component updated')
  }
  componentWillUnmount(){
    console.log('Goodbye')
  }
  render(){
    console.log('rendering')
    return(
      <>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </>
    )
  }
}

export default App;
  