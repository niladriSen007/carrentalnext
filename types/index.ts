export interface CustomButtonProps{
    title:string,
    btnType?:"button" | "submit",
    containerStyles:string,
    handleClick?:React.MouseEventHandler<HTMLButtonElement>
}

export interface FilterTitle{
    title:string,
}

export interface ManufacturerTypes{
    manufacturer:string,
    setManufacturer:( manufacturer:string)=>void
}