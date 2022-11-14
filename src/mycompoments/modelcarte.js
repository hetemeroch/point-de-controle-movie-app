import { Link } from "react-router-dom";
const ModelCarte = (props) => {
    return (
       
            <div class="card" className="carte" >
            <img class="bd-placeholder-img card-img-top" width="100%" height="180" src={props.movie.video} />
            
            <div class="card-body">
                <h5 class="card-title">{props.movie.titre}</h5>
                <p class="card-text textalign">{(props.movie.detail.substr(0, 70))}</p>
            </div>
            <ul class="list-group list-group-flush">
                <Link to = "/detail" state = {props.movie}>
                <li class="list-group-item"><button type="button" class="btn btn-primary">{props.movie.btn}</button></li>
                </Link>
                <li class="list-group-item">A second item</li>
                <li class="list-group-item">A third item</li>
            </ul>
            <div class="card-body">
                <a href="#" class="card-link">Card link</a>
                <a href="#" class="card-link">Another link</a>
            </div>
            </div>
       
    )
}

export default ModelCarte 