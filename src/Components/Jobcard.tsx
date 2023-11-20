import { PencilIcon,TrashIcon } from '@heroicons/react/24/solid'
import Modal from './ModalContainer'
import { ReactNode, useState } from 'react'
import App from '../App'
import CommonBlock from './CommonBlock'
export interface CompanyDetail{
    id?:any,
    jobTitle: string,
    companyName: string,
    industry: string,
    location: string,
    remoteType: string,
    experienceMin: string,
    experienceMax: string,
    salaryMin: any,
    salaryMax: any,
    totalEmployee: any,
    applyType: string,
    clickedDelete?:any,
    clickedEdit?:any,
}
interface S{
    deleteModalEnabled:boolean
};
interface SS{};
interface Prop{
    clickedEdit?:any,
    id:any
    companyName:any
    industry:any
    location:any
    remoteType:any
    experienceMin:any
    experienceMax:any
    salaryMin:any
    salaryMax:any
    totalEmployee:any
    applyType:any
    jobTitle:any
    deleted?:any
}

export default class JobCard extends CommonBlock<Prop,S,SS>{

    constructor(props:Prop){
        super(props)
        this.deleted = this.deleted.bind(this);
        this.state={
            deleteModalEnabled:false
        }
    }
    deleted(){
        this.props.deleted();
    }
    deleteModalProps =  {
        header:'Are you sure you want to delete this job ?',
        description:(<></>),
        closeModal: (data:any) => {
            this.setState({deleteModalEnabled:false},()=>{
                if(data){
                    this.apiCall('DELETE',data.jobId).then(res=>{
                        if(res){
                            this.showToast('success','Deleted job')
                            this.deleted();
                        } else {
                            this.showToast('warning','Something went wrong')
                        }
                    })
                }
            })
        },
        step:1,
        type:'delete'
      }
    clickedEdit=()=>{
        console.log('data',this.props)

        this.props.clickedEdit(this.props)
    }
    clickedDelete=()=>{
        console.log('data',this.props)
        this.setState({deleteModalEnabled:true})
    }
    render() {
    return(
        <div style={{fontFamily:'poppins',flexBasis:'calc(50% - 25px)',width:'calc(50% - 25px)'}} className="relative bg-white card flex items-start gap-x-[8px] py-[16px] px-[24px] border rounded-[10px] ">
            <div className='max-w-[48px]'>
                <img className="max-w-[48px] rounded-[5px]" src="assets/images/netflix.png" alt="" />
            </div>
            <div className='flex flex-col flex-1'>
                <div className="text-[24px] w-[100%]  flex items-start justify-between">
                    <div style={{whiteSpace:'nowrap',flex:.7}} className='overflow-hidden text-ellipsis'>{this.props.jobTitle}</div>
                    <div className='icons absolute right-[15px] flex items-center gap-[10px] flex-row-reverse'>
                        <div title='Delete job' onClick={() => { this.clickedDelete() }} className='h-4 hover:bg-red-500 bg-red-400 px-[10px] py-[17.5px] flex items-center rounded-[50px] group text-[14px] text-white cursor-pointer'> <div className='group-hover:w-[50px] overflow-hidden transition-width ease-in-out duration-300 w-[0px]'>Delete</div> <TrashIcon className='h-4' color='white' />  </div>
                        <div title='Edit job' onClick={() => { this.clickedEdit() }} className='group h-4 hover:bg-yellow-400 bg-yellow-300 px-[10px] py-[17.5px] flex items-center rounded-[50px] text-[14px] text-white cursor-pointer'> <div className='group-hover:w-[30px] overflow-hidden transition-width ease-in-out duration-300 w-[0px]'>Edit</div> <PencilIcon className='h-4 ' color='white' /></div>
                    </div>
                </div>
                <div className="flex text-[16px] ">
                    <div>{this.props.companyName}</div>
                    <div className="px-1">-</div>
                    <div>{this.props.industry}</div>
                </div>
                <div className="text-[16px]">{this.props.location}</div>
                <div className="flex-col flex gap-[4px] my-[12px] text-[16px] leading-[24px]">
                    <div>{this.props.remoteType}</div>
                    <div>{'Experience ('+this.props.experienceMin+' - '+this.props.experienceMax+')'}</div>
                    <div>{'INR (₹) '+this.props.salaryMin+' - '+this.props.salaryMax}</div>
                    <div>{this.props.totalEmployee+' employees'}</div>
                </div>
                <button className="self-start rounded-[6px] py-[8px] px-[16px] button bg-primary text-white">{this.props.applyType}</button>
            </div>
            <Modal {...this.deleteModalProps} dialogOpen={this.state.deleteModalEnabled} jobId={this.props.id}/>
        </div>
    )
    }
}