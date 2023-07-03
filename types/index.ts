export interface CustomButtonProps{
    title:string,
    btnType?:"button" | "submit",
    containerStyles:string,
    handleClick?:React.MouseEventHandler<HTMLButtonElement>
}