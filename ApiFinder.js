let searchInput = document.getElementById("search");
let template = document.getElementById("template");
let value=1;

searchInput.addEventListener( "keyup", e =>{
    if(e.key === "Enter"){
        let searchText = e.target.value;
        searchGitApi(searchText);
    }
});

// Speech
let btn = document.getElementById("btn")
btn.addEventListener("click",e=>{
    window.SpeechRecognition = window.webkitSpeechRecognition;
    let Speech = new SpeechRecognition();
    Speech.addEventListener("result",e=>{
        let text = e.result[0][0].transcript;
        let finalWord = (searchInput.value = text);
        word = finalWord.replace(/\s+/g,"");
        searchGitApi(finalWord);
    window.localStorage.setItem("Speech",text)
    })
    Speech.start()
});


async function searchGitApi(searchValue){
    let URL = "https://api.github.com/users"
    let Data = await window.fetch(`${URL}/${searchValue}`);
    let JSON = await Data.json();
let{login,avatar_url,html_url,repos_url,company,location,bio} =JSON;
template.innerHTML =localStorage.setItem("Key",`${avatar_url} ${html_url} ${repos_url} ${company} ${location} ${bio}`);
template.innerHTML = `
<main>
<div id="Output">
<img src=${avatar_url} alt=${login}/>
 <div>${html_url} </div>
 <div>${repos_url} </div>
 <div>${company} </div>
 <div>${location} </div>
 <div>${bio} </div>

</div>
</main>
`;
}

// Task.2
// let searchInput = document.getElementById("search");
// let template = document.getElementById("template");

// searchInput.addEventListener( "keyup", e =>{
   
//         let searchText = e.target.value;
//         searchUser(searchText);

// });

// async function searchUser(searchValue){
// let URL = "https://jsonplaceholder.typicode.com/users"
// let data = await window. fetch(`${URL}/${searchValue}`);
// let JSON = await data.json();
// let{id,name,email,address,company} = JSON;
// template.innerHTML=`<div>
// <h1>${id}</h1>
// <h1>${name}</h1>
// <h1>${email}</h1>
// <h1>${address.street}</h1>
// <p>${company["name"]}</p>
// </div>`

// }
