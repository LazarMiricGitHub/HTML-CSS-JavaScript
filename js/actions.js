let movie = document.getElementById('i-movie');
let range = document.getElementById('i-range');
let show = document.getElementById('show');
let submitBtn = document.getElementById("submit-btn");

function handleMovieRatings() {
    let poruka = '';
    if(movie && movie.value && range && range.value ){
        switch (movie.value) {
            case "Dumb and Dumber":
                poruka = `Rate for ${movie.value} is ${range.value/10}. Thanks for the review!`;
                show.innerHTML = poruka;
                break;
            case "Liar Liar":
                poruka = `Rate for ${movie.value} is ${range.value/10}. Thanks for the review!`;
                show.innerHTML = poruka;
                break;
            case "A Christmas Carol":
                poruka = `Rate for ${movie.value} is ${range.value/10}. Thanks for the review!`;
                show.innerHTML = poruka;
                break;
            case "Me, Myself & Irene":
                poruka = `Rate for ${movie.value} is ${range.value/10}. Thanks for the review!`;
                show.innerHTML = poruka;
                break;
            case "Man on the Moon":
                poruka = `Rate for ${movie.value} is ${range.value/10}. Thanks for the review!`;
                show.innerHTML = poruka;
                break;
            case "The Truman Show":
                poruka = `Rate for ${movie.value} is ${range.value/10}. Thanks for the review!`;
                show.innerHTML = poruka;
                break;
        
            default:
                console.log('You did not rate the movie')
                break;
        }
    }
    else {
        console.log("First Select a movie and rate it.");
    }
}

submitBtn.addEventListener('click', handleMovieRatings);


