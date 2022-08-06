import { BASE_API } from "../../../utils/constants";
import axios from "axios";
import { Navigate } from "react-router-dom";

export default async function LoginHandler(values) {
    const LOGIN_URL = BASE_API + "user/login";
    try {
        await axios.post(LOGIN_URL, values).then((res) => {
            // reload page
            window.location.reload();

            // save data to local storage
            localStorage.setItem("item", JSON.stringify(res.data.data));

            // check falid username and password
            if (res.data.logged === true) {
                // check role
                if (res.data.data.role === "admin") {
                    window.location.href = "/admin";
                } else if (res.data.data.role === "user") {
                    window.location.href = "/";
                }
            } else {
                if (res.data.message === "Invalid Password") {
                    alert(res.data.message);
                } else if (res.data.message === "User does not exist") {
                    alert(res.data.message);
                }
            }
        });
        return Promise.resolve({
            status: "success",
            message: "Login Berhasil",
            role: res.data.data.role,
        });
    } catch (err) {
        console.log(err);
    }
}
