const BASE_API = "http://localhost:2004/";
const URL_Image = "http://localhost:2004/image/profile/";
const URL_ImagePoster = "http://localhost:2004/image/poster_post/";
// const BASE_API = "https://blog-post-wianda.herokuapp.com/";
const checkLogged = () => {
    if (localStorage.getItem("logged") === null) {
        return false;
    }
    return true;
};

const clearLocalStorage = () => {
    localStorage.removeItem("logged");
    localStorage.removeItem("item");
};

const getLocalStorage = () => {
    return localStorage.getItem("item");
};

export {
    BASE_API,
    URL_Image,
    URL_ImagePoster,
    checkLogged,
    clearLocalStorage,
    getLocalStorage,
};
