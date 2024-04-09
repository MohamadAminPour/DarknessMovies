import { movies } from "./datas.js";

let locationParams = new URLSearchParams(location.search)
let mainMovieName = locationParams.get('id')

let mainMovie = movies.find((movie) => {
    return movie.id === Number(mainMovieName)
})

console.log(mainMovie);