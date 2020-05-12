// let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=50b3997fdf7b4f9f86181f627b993f9d";
// let req = new Request(url);
// fetch(url).then(function(response) {
//     console.log(response.json());
// })
// console.log("this is javascript");

// let serQu = document.getElementById('search');
// console.log('var created');
// let quChk = () =>{
//      console.log('in function');
//     console.log(serQu.value);
//     console.log('got value');
// }
// console.log('outside function');

// serQu.addEventListener('keydown',quChk());

// author
// title
// description
// url
// urlToImage
let apli = document.getElementById('search')

let htpr = () => {
    let liel = (<li>
    <img src="tempimg.png" class="article-img">
    <h2 class="article-title">this is a header</h2>
    <p class="article-description">this a description</p>
    <span class="article-author">by author</span>
    <a class="article-link" href="#">veiw news</a>
  </li>)
}


apli.appendChild(liel);


{/* for(let i = 0; i < 8; i++){
    apli.appendChild();
} */}