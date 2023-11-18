import React from "react";
import { toast } from 'react-toastify';
import axios from "axios";
export const baseUrl='https://6556240284b36e3a431f2fe4.mockapi.io/api/jobportal/jobs/'
export default class CommonBlock<Props, S, SS> extends React.Component<
  Props,
  S,
  SS
> {
    constructor(props:Props){
        super(props);
    }

    showToast(name:any,message:any){
        toast(message,{autoClose:3000,hideProgressBar:true,theme:'colored',type:name,closeButton:false});
    }
    async apiCall(method:any,url?:any,params?:any){
      return await axios({method,url:baseUrl+url,data:params})
      .then(async res=> await res.data )
    }
  }