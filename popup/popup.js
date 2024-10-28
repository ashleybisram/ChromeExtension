// console.log("This is a popup!");

// creating a div to store our image
const imgDiv = document.createElement("div");
document.querySelector("body").appendChild(imgDiv);

const randomPhoto = fetch("https://picsum.photos/list")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Server response: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
    // now we randomize the image object from the data set
    const randomNum = Math.floor(Math.random(993));
    const randomObj = data[randomNum];
    console.log(`this is the random object from the data set ${randomObj}`);
    // we access the post url key and append that child
    const image = document.createElement("img");
    image.setAttribute("src", "https://picsum.photos/1200/800") //the numbers after the URL specify the dimensions of the image
    console.log("this is our image", image); 

    imgDiv.appendChild(image);
  });