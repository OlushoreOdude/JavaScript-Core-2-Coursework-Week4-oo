// Write your code here
const imaagesArr = [
  "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];
const nextButton = document.getElementsByClassName("next-button");
console.log(nextButton, "nextButton");
let test = document.querySelectorAll(".carousel");
console.log(test, "test");
test.forEach((carousel) => {
  const items = carousel.querySelectorAll(".carousel__item");
  const buttonsHtml = [...items].map(
    (el) => `<span class="carousel__button"></span>`
  );

  console.log(items, "items");
  console.log(buttonsHtml, "buttons");
  carousel.insertAdjacentHTML(
    "beforeend",
    `
		<div class="carousel__nav">
			${buttonsHtml.join("")}
		</div>
	`
  );

  const buttons = carousel.querySelectorAll(".carousel__button");
  console.log(buttons, "buttond 2");
  console.log(buttons[1]);
  // addd an event listerner to each button int the dom button array
  // note the code will only run when the button is clicekd
  buttons.forEach((button, i) => {
    button.addEventListener("click", () => {
      // un-select all the items
      console.log(items, "items in onclick");
      items.forEach((item) =>
        item.classList.remove("carousel__item--selected")
      );
      buttons.forEach((button) =>
        button.classList.remove("carousel__button--selected")
      );

      items[i].classList.add("carousel__item--selected");
      button.classList.add("carousel__button--selected");
    });
  });

  // the code above only runs when the button is clicked
  let image3 = document.querySelectorAll(".imgs");
  console.log(image3, "image3");
  image3.forEach((el, i) => (el.src = imaagesArr[i]));
  // addd class list to the first item on the carosel so they are selected as standard Select the first item on page load
  items[0].classList.add("carousel__item--selected");
  buttons[0].classList.add("carousel__button--selected");
  let y = 0;
  let eventFunc = () => {
    let i = nextImage();
    console.log(i, "i");
    items.forEach((item) => item.classList.remove("carousel__item--selected"));
    buttons.forEach((button) =>
      button.classList.remove("carousel__button--selected")
    );

    items[i].classList.add("carousel__item--selected");
    [...buttons][i].classList.add("carousel__button--selected");
  };

  function nextImage() {
    if (y === 4) return (y = 0);
    return (y = y + 1);
  }

  nextButton[0].addEventListener("click", eventFunc);
});
