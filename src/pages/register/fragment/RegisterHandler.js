import axios from "axios";
import { BASE_API } from "../../../utils/constants";

export default async function RegisterHandler(values) {
    const REGISTER_URL = BASE_API + "user/register";
    try {
        await axios.post(REGISTER_URL, values).then((res) => {
            // reload page
            window.location.reload();
            // check falid username and password
            if (res.data.status === "success") {
                alert("Register Success");
                // navigate page to login
                window.location = "/login";
            }
        });
    } catch (err) {
        if (err.response.data.message === "username already exist") {
            alert(err.response.data.message);
        } else if (err.response.data.message === "email already exist") {
            alert(err.response.data.message);
        }
    }
}
