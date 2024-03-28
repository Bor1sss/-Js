class Film{
    constructor(data) {
    this.poster=data.Poster||'';
    this.title = data.Title || '';
    this.year = data.Year || '';
    this.director = data.Director || '';
    this.actors = data.Actors || '';
    this.awards = data.Awards || '';
    this.genre = data.Genre || '';
    this.plot = data.Plot || '';
    this.poster = data.Poster || '';
    this.rated = data.Rated || '';
    this.released = data.Released || '';
    this.runtime = data.Runtime || '';
    this.imdbRating = data.imdbRating || '';
    this.imdbVotes = data.imdbVotes || '';
    this.imdbID = data.imdbID || '';
}




}
let movies=[];
async function SendRequest(){
    try {
        let API= 'http://www.omdbapi.com/?i=tt3896198&apikey=16ddb8ac&'
        let title = 's='+$('#Title').val()+`&Type=${$('#Type').val()}&plot=full`;
    
        API+=title;
     
    const response = await fetch(API);

    const responseJSON = await response.json();


    responseJSON.Search.forEach(movieData => {
        let movie = new Film(movieData);
        movies.push(movie);
       
    });
    }
    catch (error) {
        console.log(error)
    }
    return movies;
    

 }
 async function SendFullRequest(movie){
        try {
        let API = 'http://www.omdbapi.com/?apikey=16ddb8ac&i='+movie.imdbID;
        const response = await fetch(API);
        const data = await response.json();


        let fullMovie = new Film(data);

        return fullMovie;     
        }
            catch (error) {
            console.log(error)
        }
    }

    export { SendFullRequest, SendRequest }