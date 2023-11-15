import React from "react";

interface Props {
    type?:string,
    width?:string,
    label:string,
    onChange?:any,
    labelStyle?:any,
    inputStyle?:any,
    containerStyle?:any
}

export default class CustomInput extends React.PureComponent<Props> {
    constructor(props:Props){
        super(props);
    }
    renderTextInput=()=>(
        <div className="flex flex-col" style={this.props.containerStyle}>
            <div style={this.props.labelStyle}>{this.props.label}</div>
            <input style={{...this.props.inputStyle,width:'100%'}} type="text" onChange={this.props.onChange} />
        </div>
    )
    render() {
      return this.renderTextInput();
    }
  }