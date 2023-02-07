

let sentences = [  "A rectangular box of small, powder-free, latex disposable gloves, of the kind used to prevent the transfer of XXX whilst tattooing.", "A collection of 90-95 small, powder-free, latex gloves formed into a three-dimensional rectangle, flattened, compressed and wrinkled.",  "A box of medium Polyco bodyguards vitrile powder-free gloves, rectangular and puffing out at the ends.",  "A nitrile medical examination glove. One of approximately 80, from a box of 100. The same colour as the box but with greater intensity. ",  "A collection of 71 Mixing sticks, possibly tongue depressors, of warm coloured wood with a subtle grain."];
let spreadId;
let colourId;
let description;

async function apiLoad(){
    await fetch("https://bitparts.net/api/rand").then(async res => await res.json())
    .then(async res => {
      //console.log(res);
      for(let i = 0; i <res.length; i++){
      //console.log(res[i].spreadID)
      spreadId = res[i].spreadID;
     // console.log(res[i].description)
      description = res[i].description;
      //console.log(res[i].colourID)
      colourId = res[i].colourID;
      displayGridImg (i, spreadId);
      displayGridWords(i,description);

    }
    

    });
    

}


function displayGridImg (index, id) {
    //put id in []
    let parent = document.getElementsByClassName("griditemImage")[0]; 
    let newContainer = document.createElement("div");
    let className;
    if (index % 2 === 0) {
      //index is even
      className = "left";
    } else {
      className = "right";
    }
    //set classname on container
    newContainer.classList.add(className);
  
    //new image
    let image = new Image();
  
    image.src = "https://bitparts.net/images/D_" + id + ".jpg";
  
    //append the image to the container
    newContainer.appendChild(image);
  
    //append the container to its new parent in the DOM
    parent.appendChild(newContainer);
  }

  function displayGridWords (index, words) {
    //put id in []
    let parent = document.getElementsByClassName("griditemText")[0]; 
    let newContainer = document.createElement("div");
    let className;
    
    /*
    //I think this needs to impact document.getElementsByClassName("grid-container") not the items within it 

    if (index % 2 === 0) {
      //index is even
      className = "left";
    } else {
      className = "right";
    }
*/

    //set classname on container
    newContainer.classList.add(className);
     //new text
    let p = document.createElement("p");

    p.textContent = words;
    //console.log(words)
    //append the image to the container
    newContainer.appendChild(p);
  
    //append the container to its new parent in the DOM
    parent.appendChild(newContainer);
  }


/***********old methods not in use************/
/****************************************************/
/****************************************************/
/****************************************************/
// function displayGridImage(index){
    function displayGridImage(){
  //image containers 
  let containers = [document.getElementById("container1"), document.getElementById("container2"), document.getElementById("container3")];
  for (let i = 1; i <= 3; i++) {
    let img = new Image();
      img.src = "https://bitparts.net/images/D_" + spreadId + ".jpg";
      containers[i-1].appendChild(img);

    }
}

function displayGridColourSwatch(){
    //image containers 
    let swatchContainers = [document.getElementById("swatchContainer1"), document.getElementById("swatchContainer2"), document.getElementById("swatchContainer3")];
    for (let i = 1; i <= 3; i++) {
      let img = new Image();
        img.src = "https://bitparts.net/images/C" + colourId + ".jpg";
        swatchContainers[i-1].appendChild(img);
  
      }
  }

function displayGridText(){
    let textContainers = [document.getElementById("textContainer1"), document.getElementById("textContainer2"), document.getElementById("textContainer3")];
    for (let i = 0; i <= 2; i++) {
        //textContainers[i-1].innerHTML += sentences[-1] + "<br>";
        // textContainers[i].innerHTML += sentences[i]+ "<br>";
        textContainers[i].innerHTML += description+ "<br>";
    }

}

function reload(){
//run the api callback again 
}