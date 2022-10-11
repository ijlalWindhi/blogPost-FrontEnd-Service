// const BASE_API = "http://localhost:2004/";
// const URL_Image = "http://localhost:2004/image/profile/";
// const URL_ImagePoster = "http://localhost:2004/image/poster_post/";
const BASE_API = "https://blog-post-wianda.herokuapp.com/";
const URL_Image = "https://blog-post-wianda.herokuapp.com/image/profile/";
const URL_ImagePoster =
    "https://blog-post-wianda.herokuapp.com/image/poster_post/";
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

const setLocalStorage = () => {
    JSON.parse(localStorage.getItem("item"));
};

export {
    BASE_API,
    URL_Image,
    URL_ImagePoster,
    checkLogged,
    clearLocalStorage,
    getLocalStorage,
    setLocalStorage,
};
