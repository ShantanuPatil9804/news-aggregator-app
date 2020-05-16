let apli = document.getElementById('news-articles');

let js2html = function(gd){
  let showhtml = '';
  if(gd.length == 0){
    let erme = `<span class="not-found">No article was found based on the search.
                      </span>`;
    return erme;
  }
  let inc;
  for(inc = 0; inc < gd.length && inc < 20; inc++){
    let liel = `<li class="article">
                <a href="${gd[inc]["url"]}" class="article-link">
                <img src="${gd[inc]["urlToImage"]}" class="article-img"/>
                <h2 class="article-title">${gd[inc]["title"]}</h2><br/>
                <p class="article-description">${gd[inc]["description"]}</p><br/>
                <span class="article-author">-${gd[inc]["author"]}</span>
                </a>
              </li>`
    showhtml = showhtml + liel; 
  }
  return showhtml;
}

let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=50b3997fdf7b4f9f86181f627b993f9d";
let req = new Request(url);
let apiCall = function(curl){
  let arob = fetch(curl);
  arob.then(function(response) {
      response.json().then(function (valdisp){
        if(valdisp.articles){
        apli.innerHTML = js2html(valdisp.articles);
        }
      })
      .catch(function(rong){
        console.log(rong);
      })
  }).catch(function(rng){
    console.log(rng);
  })
}

apiCall(url);

let sq= () => {
  let surl = document.getElementById('search').value;
  let qurl = url + `&q=${surl}`;
  apiCall(qurl);
}

let ct = function(){
  let curthm = document.getElementById('theme');
  if(curthm.value == "Go dark"){
    document.body.style.backgroundColor = 'black';
    document.body.style.color = '#999';
    curthm.value = "Let there be light";
  }else if(curthm.value == "Let there be light"){
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
    curthm.value = "Go dark";
  }
}


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