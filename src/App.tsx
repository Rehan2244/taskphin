import React,{Fragment} from "react";
import Modal from "./Components/ModalContainer";
import CustomInput from "./Components/Inputs";
interface Props {
}

interface S { 
    header:string,
    createJobOpen:boolean
}

export default class App extends React.Component<
    Props,
    S
> {
    constructor(props: Props) {
        super(props);
        this.state = {
          createJobOpen:true,
          header:'Header here'
        }
    }
    setIsOpen = (status:boolean) =>{
        this.setState({createJobOpen:status})
    }
  createAJobStep1=()=>{
    let inputProps={
      type:'text',
      containerStyle:{
        width:'100%',
        gap:'4px'
      }
    }
    return(
    <div className="flex align-center flex-wrap" style={{gap:'24px'}}>
      <CustomInput label="Job title" {...inputProps}  />
      <CustomInput label="Company name"  {...inputProps}  />
      <CustomInput label="Industry"  {...inputProps}  />
      <CustomInput label="Location"  type={inputProps.type}  containerStyle={{flex:1,gap:'4px'}} />
      <CustomInput label="Remote type" type={inputProps.type} containerStyle={{flex:1,gap:'4px'}} />
    </div>
  )
}
  modalProps = {
    header:'hello',
    description:<this.createAJobStep1 />,
    closeModal: () => {
      this.setState({ createJobOpen: false })
    }
  }
    render() {
        return (
    <div className="App">
      <CustomInput onChange={(e:any)=>console.log('changed value',e.target.value)} width={'50%'} type={"input"} label="myLabel" />
      <Modal  {...this.modalProps} dialogOpen={this.state.createJobOpen} />
    </div>
  );
}
}
