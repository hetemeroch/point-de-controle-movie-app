import { useState } from "react"
import { useDispatch } from "react-redux"
import { addMovie } from "../redux/reducer/reducer"

const AjoutMovie = () => {
const dispatch = useDispatch() 
const [film, setVideo] = useState( {
    titre : "",
    video : "",
    detail : "",
    extrait : ""

})

    return (
        <>
        
        <input type='' onChange={(e) => setVideo({...film, titre : e.target.value})}  placeholder='Titre'/>
        <br/>
        <br/>
        <input type=''  onChange={(e) => setVideo({...film,  detail: e.target.value})} placeholder='Détail'/><br/>
        <br/>
        <br/>
        <input type='' onChange={(e) => setVideo({...film, video : e.target.value})} placeholder='image'/><br/><br/>
        <input type='' onChange={(e) => setVideo({...film, extrait : e.target.value})} placeholder='extrait'/><br/><br/>
        <button onClick={() =>dispatch(addMovie(film))}>ADD</button>

        
        </>
    )
}

export default AjoutMovie