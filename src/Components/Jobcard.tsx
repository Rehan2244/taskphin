import { PencilIcon,TrashIcon } from '@heroicons/react/24/solid'
export interface CompanyDetail{
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
    applyType: string
}
export default function JobCard(prop:CompanyDetail){
    return(
        <div style={{fontFamily:'poppins',flexBasis:'calc(50% - 25px)'}} className="card flex items-start gap-x-[8px] py-[16px] px-[24px] border rounded-[10px] ">
            <div>
                <img className="w-[48px] rounded-[5px]" src="assets/images/netflix.png" alt="" />
            </div>
            <div>
                <div className="text-[24px]">{prop.jobTitle}</div>
                <div className='icons absolute bg-red w-20 h-20 flex items-center gap-[20px]'>
                    <PencilIcon className='bg-red' />
                    <TrashIcon />
                </div>
                <div className="flex text-[16px] ">
                    <div>{prop.companyName}</div>
                    <div className="px-1">-</div>
                    <div>{prop.industry}</div>
                </div>
                <div className="text-[16px]">{prop.location}</div>
                <div className="flex-col flex gap-[4px] my-[12px] text-[16px] leading-[24px]">
                    <div>{prop.remoteType}</div>
                    <div>{'Experience ('+prop.experienceMin+' - '+prop.experienceMax+')'}</div>
                    <div>{'INR (₹) '+prop.salaryMin+' - '+prop.salaryMax}</div>
                    <div>{prop.totalEmployee+' employees'}</div>
                </div>
                <button className="rounded-[6px] py-[8px] px-[16px] button bg-primary text-white">{prop.applyType}</button>
            </div>
        </div>
    )
}