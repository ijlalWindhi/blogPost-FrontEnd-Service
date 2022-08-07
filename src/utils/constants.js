const BASE_API = "http://localhost:2004/";
// const BASE_API = "https://blog-post-wianda.herokuapp.com/";
const checkLogged = () => {
    if (localStorage.getItem("logged") === null) {
        return false;
    }
    return true;
};

export { BASE_API, checkLogged };
