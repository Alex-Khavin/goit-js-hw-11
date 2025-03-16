import axios from "axios";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

export function fetchData(options) {
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
               iconUrl: 'https://cdn-icons-png.flaticon.com/512/1828/1828843.png',
                iconColor: 'black',
                position: 'topRight',
                color: '#ef4040',
           });
           return [];
       })
}