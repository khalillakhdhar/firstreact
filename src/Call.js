import React, {Component} from 'react';

class Call extends React.Component {
// eslint-disable-next-line no-useless-constructor
constructor()
{
    super();
    //this.props.age="30";
//this.props.age=40
}
render()
{
    return(
        <>
        <h4>votre age est {this.props.age} </h4>
        
        </>
      )
}
}
export default Call;