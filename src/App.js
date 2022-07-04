import './App.css';
import React from 'react';
import Call from './Call';
class App extends React.Component {
constructor()
{

  // initialisation
  super();
  this.state={
    //variable
    nom:"Abdelslam",
    age:23,
  };
this.changeName=this.changeName.bind(this);
}
 changeme= ()=>{
this.setState({
  nom:"khalil"
})

}
changeName()
{
  this.setState({age:this.state.age+1})
}
render()
{
  return(
    <>
    <h1>Hello {this.state.nom}</h1>
    <button onClick={this.changeme}>increase my age</button>
    <button onClick={this.changeme}>change my name</button>
    <br></br>
    <Call age={this.state.age}></Call>
    </>
  )
};
}
export default App;








