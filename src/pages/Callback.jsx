import { useParams } from "react-router-dom"
export const Callback = () => {
    console.log(useParams())
    return(
        <div>
            Hello world!!!
        </div>
    )
}