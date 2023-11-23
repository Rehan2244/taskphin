import { PencilIcon,TrashIcon } from '@heroicons/react/24/solid'
import Modal from './ModalContainer'
import CommonBlock from './CommonBlock'
import { stylesClass } from '../CommonConstant/Styles'
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

        this.props.clickedEdit(this.props)
    }
    clickedDelete=()=>{
        this.setState({deleteModalEnabled:true})
    }
    render() {
    return(
        <div style={{fontFamily:'poppins'}} className={stylesClass.job.card}>
            <div className='max-w-[48px]'>
                <img className="max-w-[48px] rounded-[5px]" src="assets/images/netflix.png" alt="" />
            </div>
            <div className='flex flex-col flex-1'>
                <div className="text-[24px] w-[100%]  flex items-start justify-between">
                    <div style={{whiteSpace:'nowrap',flex:.7}} className='overflow-hidden text-ellipsis'>{this.props.jobTitle}</div>
                    <div className={stylesClass.common.editDeleteIcon}>
                        <div title='Delete job' onClick={() => { this.clickedDelete() }} className={stylesClass.common.icon.container}> <div className={stylesClass.common.icon.delete}>Delete</div> <TrashIcon className='h-4' color='#f87171' />  </div>
                        <div title='Edit job' onClick={() => { this.clickedEdit() }} className={stylesClass.common.icon.container}> <div className={stylesClass.common.icon.edit}>Edit</div> <PencilIcon className='h-4 ' color='#fde047' /></div>
                    </div>
                </div>
                <div className="flex text-[16px] ">
                    <div>{this.props.companyName}</div>
                    <div className="px-1">-</div>
                    <div >{this.props.industry}</div>
                </div>
                <div className="text-[16px] text-[#7A7A7A]">{this.props.location}</div>
                <div className="flex-col flex gap-[4px] my-[24px] text-[16px] leading-[24px]">
                    <div>{this.props.remoteType}</div>
                    <div>{'Experience ('+this.props.experienceMin+' - '+this.props.experienceMax+' Years)'}</div>
                    <div>{'INR (₹) '+this.formatNumberWithCommas(this.props.salaryMin,'en-US')+' - '+this.formatNumberWithCommas(this.props.salaryMax,'en-US')+' / Month'}</div>
                    <div>{this.props.totalEmployee+' employees'}</div>
                </div>
                <button className={this.props.applyType==='Apply Now'?stylesClass.common.button.quickApply:stylesClass.common.button.externalApply}>{this.props.applyType}</button>
            </div>
            <Modal {...this.deleteModalProps} dialogOpen={this.state.deleteModalEnabled} jobId={this.props.id}/>
        </div>
    )
    }
}