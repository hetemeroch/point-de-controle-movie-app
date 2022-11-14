import { createSlice } from "@reduxjs/toolkit";

const ListMovieSlice = createSlice({
    name : "ListMovie",
    initialState : 
    { 
        movies :[
        {
            video :"https://www.happy-landing.net/wp-content/uploads/2020/08/lucifer-saison-5-partie-1-1122x631.jpg",
            titre :"Casting Lucifer",
            detail :"Lassé et mécontent de sa position de Seigneur des Enfers, Lucifer Morningstar démissionne et abandonne son royaume pour la bouillonnante Los Angeles. Dans la Cité des Anges, l'ex maître diabolique est le patron d'un nightclub baptisé Lux." ,
            extrait:"https://youtu.be/kEE8txw1awQ"
           
          },
          {
            video :"https://m.media-amazon.com/images/I/51Z5CY1bbfL._SX373_BO1,204,203,200_.jpg",
            titre :"GAME OF THRONES",
            detail :"Retrouvez toute la puissance et la majesté de la série HBO Game of Throne dans cette collection unique de 40 portraits et affiches détachables et prêts à encadrer. Avec Ned Starck, Tyrion Lannister, Daenerys Targaryen, Khal Drogo mais aussi Arya, Jon, Jaime, Samwell et tous les autres protagonistes du Trône de fer ! Inclus aussi : une carte du royaume des Sept Couronnes." ,
            extrait:"https://youtu.be/kEE8txw1awQ"
            
          },
          {
            video :"https://m.media-amazon.com/images/I/51BMD8PAGPL._AC_.jpg",
            titre :"24 Heures chrono",
            detail :"24 Heures chrono ou 24 est une série télévisée américaine en 204 épisodes de 43 minutes créée par Joel Surnow et Robert Cochran, dont les huit premières saisons de 24 épisodes chacune ont été diffusées du 6 novembre 2001 au 24 mai 2010, un téléfilm de 90 minutes diffusé le 23 novembre 2008" ,
            extrait:"https://youtu.be/kEE8txw1awQ"
            
          },
          {
            video :"http://img.over-blog.com/500x281/2/64/67/32/eldorado/Blacklist_KeyArtImage_1920x1080_FL.jpg",
            titre :"Blacklist",
            detail :"Une profileuse du FBI à l'enfance tourmentée et un criminel ambigu et subtil unissent leur force pour faire tomber les criminels les plus recherchés du monde. « The Blacklist » est une série TV qui  a tout d’un blockbuster." ,
            extrait:"https://youtu.be/kEE8txw1awQ"
            
          }
    ]
},
  
    reducers : {
       

        addMovie(state, action) {
            console.log(action.payload)
         state.movies = [...state.movies, action.payload]
        }
    }


}
   
)

export const {addMovie} = ListMovieSlice.actions

export default ListMovieSlice.reducer