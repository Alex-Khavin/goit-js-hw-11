// import { fetchData } from "./js/pixabay-api";
// import { options } from "./js/pixabay-api";
import axios from "axios"
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

let inputData = "";

const options = {
    params: {
        key: "49358798-a0fde913d86352b572e9384bf",
        q: "",
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
        }
};

const formData = document.querySelector(".form");
const formInput = document.querySelector("input");
const galleryList = document.querySelector(".gallery");
const loader = document.querySelector(".loader");

formData.addEventListener("submit", formSubmit);
formInput.addEventListener("input", onInput);
document.addEventListener("DOMContentLoaded", () => {
    loader.classList.add("hidden");
});


function onInput(event) {
    inputData = event.target.value.trim();
};

function formSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;

    if (inputData === "") {
         iziToast.show({
                message: 'Fill in the search field!',
                messageColor: 'white',
                iconUrl: './img/cancel-circle.svg',
                position: 'topRight',
                color: '#ef4040',
            });
        return;
    }

    options.params.q = inputData;

    galleryList.innerHTML = "";

    loader.classList.remove("hidden");
    
    fetchData(options).then(images => {
        galleryList.insertAdjacentHTML("beforeend", markupImg(images));
        gallery.refresh();
    })

    form.reset();
    inputData = "";
}

let gallery = new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250 });

function fetchData(options) {
   return axios.get(`https://pixabay.com/api/?`, options)
       .then((response) => {
           if (!response.data?.hits?.length) {
               throw new Error("Sorry, there are no images matching your search query. Please try again!");
           }
           return response.data.hits;
       })
       .catch((error) => {
           iziToast.show({
                message: `${error.message}`,
                messageColor: 'white',
                iconUrl: './img/cancel-circle.svg',
                position: 'topRight',
                color: '#ef4040',
           });
           return [];
       })
}

function markupImg(cards) {
  return cards
  .map(card => {
    return `<li class="gallery-item">
    <a class="gallery-link" href="${card.largeImageURL}">
    <img
    class="gallery-image"
    src="${card.webformatURL}"
    alt="${card.tags}"
    />
    </a>
    <div class="item-subtitle">
    <p class="item-text"><b>Likes</b> ${card.likes}</p>
    <p class="item-text"><b>Views</b> ${card.views}</p>
    <p class="item-text"><b>Comments</b> ${card.comments}</p>
    <p class="item-text"><b>Downloads</b> ${card.downloads}</p>
    </div>
    </li>`;
  })
  .join("");
}
