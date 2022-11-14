import { useLocation } from "react-router-dom"
const Detail  = () => {
    const Location = useLocation()
    console.log(Location)
    return (
        <div>
            <div class="card mb-3">
            <div class="row g-0">
                <div class="col-md-4">
                <img src={Location.state.video} width="100%" height="350"/>
            
                </div>
                <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">{Location.state.titre}</h5>
                    <p class="card-text textalign">{Location.state.detail}</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}
export default Detail