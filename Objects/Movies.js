function solve(arr) {
    let movies = [];
    for (const line of arr) {
        if (line.includes("addMovie")) {
            let currentMovie = {};
            let name = line.substring(9);
            currentMovie.name = name;
            movies.push(currentMovie);
        } else if (line.includes("directedBy")) {
            let [movie, mydirector] = line.split(' directedBy ');

            let myMovie = movies.find(x => x.name == movie)
            if (myMovie) {
                myMovie.director = mydirector;
            }
        } else if (line.includes("onDate")) {
            let [movie, moviedate] = line.split(' onDate ');
            let myMovie = movies.find(x => x.name == movie);
            if (myMovie) {
                myMovie.date = moviedate;
            }
        }
    }
    movies.forEach(movie => {
        if (movie.name && movie.director && movie.date) {
            console.log(JSON.stringify(movie));
        }
    })
}
solve([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
])
