const str = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id dignissimos molestias laborum. Obcaecati dicta hic officia corrupti odit nulla labore mollitia, laudantium non ullam saepe nobis fugit consequatur atque. Velit.";

// console.log(str.split(" ").length);


// const interval = setInterval(() => {
//   console.log("Hello World");
// }, 1000)

// const inter = setTimeout(() => {

//   clearInterval(interval);
// }, 5000)


let elText = document.querySelector(".result");
let elText1 = document.querySelector(".result1");
let elText2 = document.querySelector(".result2");


function time() {
  setTimeout(() => {
    let count = 5;
    elText.textContent = count;
    elText.classList.add("open");

    const redInterval = setInterval(() => {
      count--;
      elText.textContent = count;
      
    },1000)

    setTimeout(() => {
      clearInterval(redInterval);
      elText.textContent = "";
      elText.classList.remove("open");
    },5000)
  },0)

  setTimeout(() => {
    let count = 3;
    elText1.textContent = count;
    elText1.classList.add("open1")

    const yelInterval = setInterval(() => {
      count--;
      elText1.textContent = count;
    },1000)

    setTimeout(() => {
      clearInterval(yelInterval);
      elText1.textContent = "";
      elText1.classList.remove("open1")
    },3000)
  },5000)

  setTimeout(() => {
    let count = 5;
    elText2.textContent = count;
    elText2.classList.add("open2")

    const greenInterval = setInterval(() => {
      count--;
      elText2.textContent = count;
    },1000)

    setTimeout(() => {
      clearInterval(greenInterval);
      elText2.textContent = "";
      elText2.classList.remove("open2")
    },5000)
  },8000)
}

time();

setInterval(() => {
  time();
},13000)