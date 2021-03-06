class Carousel {
    constructor(carouselElement) {
        this.carouselElement = carouselElement;
        this.left = carouselElement.querySelector(".left-button");
        this.right = carouselElement.querySelector(".right-button");
        this.img = carouselElement.querySelectorAll("img");
        this.index = 0;
        this.left.addEventListener("click", () => this.leftPicture());
        this.right.addEventListener("click", () => this.rightPicture());
        this.img[0].style.display = "block";
    }
    leftPicture() {
        this.img[this.index].style.display = "none";
        this.index += 1;
        if (this.index > 3) {
            this.index -= 4;
        }
        this.img[this.index].style.display = "block";
    }

    rightPicture() {
        this.img[this.index].style.display = "none";
        this.index -= 1;
        if (this.index < 0) {
            this.index += 4;
        }
        this.img[this.index].style.display = "block";
    }
}

let carousel = document.querySelectorAll(".carousel").forEach(el => new Carousel(el));

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
