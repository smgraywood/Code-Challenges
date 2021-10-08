fetch ("https://official-joke-api.appspot.com/random_ten")
.then(response => response.json())
.then(data => {
  console.log(data)
  
  for (let i=0; i < data.length; i++){
    let divJokes = document.getElementById("jokes");//grab onto the div in html
    let getSetup = document.createElement("h1");//create h1 inside div
    getSetup.textContent = data[i].setup//what the json object is called

    //repeat of above lines for punchline
    let getPunchline = document.createElement("h2");
    getPunchline.textContent = data[i].punchline//what the json object is called
    
    //appending 
    console.log(getSetup)
    divJokes.appendChild(getSetup);
    divJokes.appendChild(getPunchline);
    }
})

