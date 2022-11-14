import ModelCarte from "./modelcarte"
const ListeCarte =(props) =>{
    return (
        <div className="gabarit">
            {
                props.Mycarte.map(item =>(
                    <ModelCarte movie = {item}/>
                ))
            }
        </div>
    )
}
export default ListeCarte