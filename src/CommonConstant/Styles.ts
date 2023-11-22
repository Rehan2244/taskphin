export const stylesClass={
    modal:{
        title:'text-[20px] font-[400] pb-[24px] flex justify-between',
        button:'bg-primary inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-[16px] py-[8px] text-sm font-medium hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 text-white',
        container:'fixed inset-0 overflow-y-auto',
        subContainer:'flex min-h-full items-center justify-center p-4 text-center'
    },
    common: {
        button: {
            primary: 'text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br shadow-lg shadow-teal-600/100 dark:shadow-lg dark:shadow-teal-600/100 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 item-center ',
            quickApply:'self-start rounded-[6px] py-[8px] px-[16px] button bg-primary text-white',
            externalApply:'self-start rounded-[6px] py-[8px] px-[16px] border-[#1597E4] text-[#1597E4] button border-[3px]',
            delete:{
                yes:'button bg-rose-600 text-white py-1 px-6',
                no:'button bg-teal-500 text-white py-1 px-6'
            }
        },
        radio:{
            primary:`before:content[''] peer relative h-[20px] w-[20px] cursor-pointer appearance-none rounded-full border-[2px] border-blue-gray-200 text-blue-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-[12px] before:w-[12px] before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-blue-500 checked:before:bg-blue-500 hover:before:opacity-10`,
            checkedPrimary:`pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-blue-500 opacity-0 transition-opacity peer-checked:opacity-100`
        },
        editDeleteIcon:'icons absolute right-[15px] flex items-center gap-[5px] flex-row-reverse',
        icon:{
            edit:'group-hover:w-[30px] overflow-hidden transition-width ease-in-out duration-300 w-[0px]',
            delete:'group-hover:w-[50px] overflow-hidden transition-width ease-in-out duration-300 w-[0px]',
            container:'h-4 px-[10px] py-[17.5px] flex items-center rounded-[50px] group text-[14px] cursor-pointer'
        },
        modal:{
            panel:'w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-[32px] text-left align-middle shadow-xl transition-all'
        }
    },
    container:{
        jobCard:'flex flex-wrap justify-between gap-y-[45px] gap-x-[25px] px-4 py-2',
        main:'bg-white py-2 px-4 flex-1'
    },
    job:{
        card:'relative bg-white card flex items-start gap-x-[8px] py-[16px] px-[24px] border rounded-[10px] md:w-[100%]'
    }
}
