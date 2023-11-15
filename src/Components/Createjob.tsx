import React from "react";

interface Props {
    header:string
}

interface S {}

interface SS {}

export default class CreatJob extends React.Component<
  Props,
  S,
  SS
> {
    constructor(props:Props){
        super(props);
        this.state={
            header:this.props.header,
            
        }
    }
    render() {
      return <h2>Hi, I am a Car!</h2>;
    }
  }