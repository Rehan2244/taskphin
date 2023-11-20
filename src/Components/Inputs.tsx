import React from "react";
import { stylesClass } from "../CommonConstant/Styles";

interface Props {
    type?:string,
    width?:string,
    label:string,
    onChange?:any,
    labelStyle?:any,
    inputStyle?:any,
    containerStyle?:any,
    placeholder:any,
    onChangeSecond?:any,
    value?:any,
    value2?:any
}

interface S{
    value:any
}
export default class CustomInput extends React.PureComponent<Props,S> {
    value=this.props.value
    constructor(props:Props){
        super(props);
        this.state={
            value:this.props.value
        }
    }
    changeInputValue(e:any){
        this.setState({value:e.target.value},()=>{
            this.props.onChange(e);
        })
    }
    renderTextInput=()=>(
        <div className="flex flex-col" style={this.props.containerStyle}>
            <div style={this.props.labelStyle}>{this.props.label}</div>
            <input value={this.state.value} placeholder={this.props.placeholder} className="px-[10px] h-[36px] border rounded-[5px] focus:ring-0 focus:outline-none" style={{...this.props.inputStyle,width:'100%'}} type={this.props.type} onChange={(e)=>{this.changeInputValue(e)}} />
        </div>
    )
    renderMultiTextInput=()=>(
        <div className="flex flex-col" style={this.props.containerStyle}>
            <div style={this.props.labelStyle}>{this.props.label}</div>
            <div className="flex gap-[24px]">
                <input value={this.props.value} placeholder={this.props.placeholder} className="px-[10px] h-[36px] border rounded-[5px] focus:ring-0 focus:outline-none" style={{...this.props.inputStyle,width:'50%'}} type="text" onChange={this.props.onChange} />
                <input value={this.props.value2} placeholder={'Maximum'} className="px-[10px] h-[36px] border rounded-[5px] focus:ring-0 focus:outline-none" style={{...this.props.inputStyle,width:'50%'}} type="text" onChange={this.props.onChangeSecond} />
            </div>
        </div>
    )
    renderRadioField = () => (
        <div className="flex flex-col" style={this.props.containerStyle}>
            <div style={this.props.labelStyle}>{this.props.label}</div>
            <div className="flex gap-[24px] justify-start">
                <label className="flex items-center gap-[4px]">
                    <div className="relative flex cursor-pointer items-center rounded-full">
                        <input
                            onChange={this.props.onChange}
                            name="applyType"
                            type="radio"
                            className={stylesClass.common.radio.primary}
                            value={"Apply Now"}
                            checked={this.props.value=='Apply Now'?true:false}
                        />
                        <div className={stylesClass.common.radio.checkedPrimary}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-3.5 w-3.5"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                            >
                                <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                            </svg>
                        </div>
                    </div>
                    <div style={{color:'#7A7A7A'}}>Quick Apply</div>
                </label>
                <label className="flex text-[14px] gap-[4px] items-center">
                    <div className="relative flex cursor-pointer items-center rounded-full">
                        <input
                            onChange={this.props.onChange}
                            name="applyType"
                            type="radio"
                            className={stylesClass.common.radio.primary}
                            value={"External Apply"}
                            checked={this.props.value!='Apply Now'?true:false}
                        />
                        <div className={stylesClass.common.radio.checkedPrimary}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-3.5 w-3.5"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                            >
                                <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                            </svg>
                        </div>
                    </div>
                    <div style={{color:'#7A7A7A'}}>External Apply </div>
                </label>
            </div>
        </div>
    )
    render() {
        if(this.props.type=='text'){
            return this.renderTextInput();
        } else if (this.props.type=='multi'){
            return this.renderMultiTextInput();
        } else {
            return this.renderRadioField();
        }
    }
  }