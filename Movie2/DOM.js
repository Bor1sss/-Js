const API = await import("../API.js");

const moviesPerPage = 3;
let movies;
 function displayMovies(Film,currentPage) {
    let $moviesDiv = $('#movies');
    if(Film!=null){
        movies=Film;
    }
    $moviesDiv.empty();

    let startIndex = currentPage * moviesPerPage;
    let endIndex = Math.min(startIndex + moviesPerPage, movies.length);

    for (let i = startIndex; i < endIndex; i++) {
        let movie = movies[i];
        let $movieDiv = $('<div>').addClass('movie');
        $movieDiv.click(async function() {
            let Film=await API.SendFullRequest(movie)
            showFullInfo(Film)
        });
        let $posterImg = $('<img>').attr('src', movie.poster);
        let $titleH2 = $('<h2>').text(movie.title);
        let $yearP = $('<p>').text(`Год: ${movie.year}`);
        $movieDiv.append($posterImg, $titleH2, $yearP);
        $moviesDiv.append($movieDiv);

      
     
    }



}

function showFullInfo(movie) {
    $('.bigPage').css("display","none");
    $('.controls').css("display","none")
    $('#full-info').html(`
        <div class="full-movie">
            <h2>${movie.title}</h2>
            <p>Год: ${movie.year}</p>
            <p>Описание: ${movie.plot}</p>
            <img src="${movie.poster}" alt="${movie.title}">
            <button id="back">Back</button>
        </div>
    `).show();
    $("#back").click(function(){
        $("#back").css("display","none");
        $('.bigPage').css("display","block");
        $('.controls').css("display","flex")
        $(`#full-info`).css("display","none");
    })
}

export default { displayMovies, showFullInfo,moviesPerPage }