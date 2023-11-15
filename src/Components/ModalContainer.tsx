import React,{Fragment} from "react";
import { Dialog,Transition } from '@headlessui/react'
import { stylesClass } from "../CommonConstant/Styles";
interface Props {
    header: string,
    dialogOpen:boolean,
    description:any,
    closeModal:any
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
    closeModal=()=>{
        
    }

    render() {
        return (
            <Transition appear show={this.props.dialogOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={this.closeModal}>
                    <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
                        <div className="fixed inset-0 bg-black/25" />
                    </Transition.Child>

                    <div className={stylesClass.modal.container}>
                        <div className={stylesClass.modal.subContainer}>
                            <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-[32px] text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title as="h3" className={stylesClass.modal.title}>
                                        <div>{this.props.header}</div><div>Step:1</div>
                                    </Dialog.Title>
                                    {this.props.description}
                                    <div className="pt-[96px]">
                                        <button type="button" className={stylesClass.modal.button} onClick={this.props.closeModal} >
                                            Got it, thanks!
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        )
    }
}