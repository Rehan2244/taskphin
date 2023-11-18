import React,{Fragment} from "react";
import Modal from "./Components/ModalContainer";
import CustomInput from "./Components/Inputs";
import { stylesClass } from "./CommonConstant/Styles";
import { PlusIcon } from '@heroicons/react/24/solid'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CommonBlock from "./Components/CommonBlock";
import JobCard, { CompanyDetail } from "./Components/Jobcard";
interface Props {
}

interface S {
    header:string,
    createJobFirst:boolean,
    createJobSecond:boolean,
    step:any,
    companyDetails:any,
    jobs:any[]
}
interface SS { }
const inputProps={
  type:'text',
  containerStyle:{
    width:'100%',
    gap:'4px'
  },
  labelStyle:{
    fontSize:'14px',
    fontWeight:'500',
  },
  inputStyle:{
    borderColor:'#E6E6E6',
    fontSize:'14px'
  },
}
export default class App extends CommonBlock<
    Props,
    S,
    SS
> {
    constructor(props: Props) {
        super(props);
        this.state = {
          createJobFirst:false,
          header:'Header here',
          createJobSecond:false,
          step:1,
          companyDetails:{
            jobTitle:'',
            companyName:'',
            industry:'',
            location:'',
            remoteType:'',
            experienceMin:'',
            experienceMax:'',
            salaryMin:'',
            salaryMax:'',
            totalEmployee:'',
            applyType:''
          } as CompanyDetail,
          jobs:[]
        }
    }
    componentDidMount(): void {
        this.getJobsData();
    }
    setIsOpen = (status:boolean) =>{
        this.setState({createJobFirst:status})
    }
  handleInput(name:any,value:any){
    let tempState=this.state.companyDetails
    tempState[name]=value;
    this.setState({companyDetails:tempState})
  }
  createJobValidation(){
    if(this.state.step==1){
      if(this.state.companyDetails.jobTitle==''){
        return {status:false,errorName:'Enter job title' }
      } else if(this.state.companyDetails.companyName==''){
        return {status:false,errorName:'Enter company name'}
      } else if(this.state.companyDetails.industry==''){
        return {status:false,errorName:'Enter industry name' }
      } else if(this.state.companyDetails.location==''){
        return {status:false,errorName:'Enter location name' }
      } else if(this.state.companyDetails.remoteType==''){
        return {status:false,errorName:'Enter remote type' }
      } else{
        return {status:true,errorName:'' }
      }
    } else{
      if(this.state.companyDetails.experienceMin==''){
        return {status:false,errorName:'Enter minimum experience' }
      } else if(this.state.companyDetails.experienceMax==''){
        return {status:false,errorName:'Enter maximum experience' }
      } else if(this.state.companyDetails.salaryMin==''){
        return {status:false,errorName:'Enter minimum salary' }
      } else if(this.state.companyDetails.salaryMax==''){
        return {status:false,errorName:'Enter maximum salary' }
      } else if(this.state.companyDetails.totalEmployee==''){
        return {status:false,errorName:'Enter total employee' }
      } else if(this.state.companyDetails.applyType==''){
        return {status:false,errorName:'Enter apply type' }
      } else{
        return {status:true,errorName:'' }
      }
    }
  }
  createAJobStep1=()=>{

    return(
    <div className="flex align-center flex-wrap" style={{gap:'24px'}}>
      <CustomInput value={this.state.companyDetails.jobTitle} onChange={(e:any)=>this.handleInput('jobTitle',e.target.value)} label="Job title" placeholder='ex. UX UI Designer' {...inputProps}  />
      <CustomInput value={this.state.companyDetails.companyName} onChange={(e:any)=>this.handleInput('companyName',e.target.value)} label="Company name" placeholder='ex. Google' {...inputProps}  />
      <CustomInput value={this.state.companyDetails.industry} onChange={(e:any)=>this.handleInput('industry',e.target.value)} label="Industry" placeholder='ex. Information Technology' {...inputProps}  />
      <CustomInput value={this.state.companyDetails.location} onChange={(e:any)=>this.handleInput('location',e.target.value)} label="Location"placeholder='ex. Chennai' {...inputProps}  type={inputProps.type}  labelStyle={inputProps.labelStyle} containerStyle={{flex:1,gap:'4px'}} />
      <CustomInput value={this.state.companyDetails.remoteType} onChange={(e:any)=>this.handleInput('remoteType',e.target.value)} label="Remote type" placeholder='ex. In-office' type={inputProps.type}  labelStyle={inputProps.labelStyle} containerStyle={{flex:1,gap:'4px'}} />
    </div>
  )
}
  createAJobStep2 = () => {
    return (
      <div className="flex align-center flex-wrap" style={{ gap: '24px' }}>
        <CustomInput label="Experience" placeholder='Minimum' {...inputProps} type="multi" onChange={(e:any)=>this.handleInput('experienceMin',e.target.value)} onChangeSecond={(e:any)=>this.handleInput('experienceMax',e.target.value)} />
        <CustomInput label="Salary" placeholder='Minimum' {...inputProps} type="multi" onChange={(e:any)=>this.handleInput('salaryMin',e.target.value)} onChangeSecond={(e:any)=>this.handleInput('salaryMax',e.target.value)}  />
        <CustomInput label="Total Employee" placeholder='ex. 100' {...inputProps} onChange={(e:any)=>this.handleInput('totalEmployee',e.target.value)} />
        <CustomInput label="Apply type" placeholder='ex. Chennai' {...inputProps} type={'radio'} labelStyle={inputProps.labelStyle} containerStyle={{ gap: '4px' }} onChange={(e:any)=>this.handleInput('applyType',e.target.value)} />
      </div>
    )
  }
  modalProps = {
    header:'Create a job',
    description:<this.createAJobStep1 />,
    closeModal: (data:any) => {
      if(!this.createJobValidation()?.status){
        this.showToast('error',this.createJobValidation()?.errorName)
        return;
      }
      this.setState({ createJobFirst: false },()=>{
        this.setState({createJobSecond:true,step:2})
      })
    },
    step:1
  }

  modalProps2 = {
    header:'Create a job',
    description:<this.createAJobStep2 />,
    closeModal: (data:any) => {
      if(!this.createJobValidation()?.status){
        this.showToast('error',this.createJobValidation()?.errorName)
        return;
      }
      this.setState({ createJobSecond: false },()=>{
        this.apiCall('POST','',this.state.companyDetails).then(res=>{
          if(res){
            this.showToast('success','Successfully Added new job');
            this.getJobsData();
          }
        })
      })
    },
    step:2
  }
  getJobsData(){
    this.apiCall('GET','').then(res=>{
      if(res){
        console.log('GOT DATA',res)
        this.setState({jobs:res})
      }
    })
  }
  render() {
    return (
      <div className="App p-3 bg-white">
        <button onClick={() => this.setState({ createJobFirst: true })} className={stylesClass.common.button.primary}>
          <div className="flex gap-x-[12px]">
            <div> Create job</div>
            <PlusIcon className="w-5 h-5" />
          </div>
        </button>
        <Modal {...this.modalProps} dialogOpen={this.state.createJobFirst} />
        <Modal {...this.modalProps2} dialogOpen={this.state.createJobSecond} />
        <div className="flex flex-wrap justify-between gap-y-[45px] gap-x-[25px]">
          {this.state.jobs.map((el, index) => (
            <JobCard {...el} key={index} />
          ))}
        </div>
        <ToastContainer/>
      </div>
    );
  }
}
