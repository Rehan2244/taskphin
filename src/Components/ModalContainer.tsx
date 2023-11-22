import React,{Fragment} from "react";
import { Dialog,Transition } from '@headlessui/react'
import { stylesClass } from "../CommonConstant/Styles";
interface Props {
    type?:string,
    header: string,
    dialogOpen:boolean,
    description:any,
    closeModal:any,
    step:any,
    jobId?:any
}

interface S { 
    header:string,
    isOpen:boolean
}

export default class Modal extends React.Component<
    Props,
    S
> {
    constructor(props: Props) {
        super(props);
        this.state = {
            header: this.props.header,
            isOpen:this.props.dialogOpen
        }
    }
    setIsOpen = (status:boolean) =>{
        this.setState({isOpen:status})
    }
    render() {
        return (
            <Transition appear show={this.props.dialogOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={()=>this.setState({isOpen:false})}>
                    <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
                        <div className="fixed inset-0 bg-black/25" />
                    </Transition.Child>
                    <div className={stylesClass.modal.container}>
                        <div className={stylesClass.modal.subContainer}>
                            <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
                                <Dialog.Panel className={stylesClass.common.modal.panel}>
                                    <Dialog.Title as="h3" className={stylesClass.modal.title}>
                                        <div>{this.props.header}</div>{this.props.type!='delete'&&<div>Step {this.props.step}</div>}
                                    </Dialog.Title>
                                    {this.props.description}
                                    {this.props.type!='delete'? 
                                        <>
                                            <div className="pt-[96px] flex justify-end">
                                                {this.props.step == 1 ?
                                                    <button type="button" className={stylesClass.modal.button} onClick={this.props.closeModal} >
                                                        Next
                                                    </button> :
                                                    <button type="button" className={stylesClass.modal.button} onClick={()=>this.props.closeModal(this.props)} >
                                                        Finish
                                                    </button>
                                                }
                                            </div>
                                        </>
                                        :
                                        <div className="flex justify-evenly my-[10px]">
                                            <button onClick={()=>this.props.closeModal(this.props)} className={stylesClass.common.button.delete.yes}>Yes</button>
                                            <button onClick={()=>this.props.closeModal(undefined)} className={stylesClass.common.button.delete.no}>No</button>
                                        </div> 
                                    }
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        )
    }
}
