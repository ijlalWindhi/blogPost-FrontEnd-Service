import { BASE_API } from "../../../utils/constants";
import axios from "axios";

export default async function LoginHandler(values) {
    const DETAIL_URL = BASE_API + "post/add/detailPost";
    try {
        const detailData = await axios.post(DETAIL_URL, values);
        const res = detailData.data;
        return Promise.resolve({
            status: res.status,
            message: res.message,
        });
    } catch (err) {
        return Promise.resolve({
            status: "error",
            message: err.response.data.message,
        });
    }
}
