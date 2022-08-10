import { BASE_API } from "../../../utils/constants";
import axios from "axios";
import { useParams } from "react-router-dom";

export default async function LoginHandler(values) {
    const params = useParams();
    const SAVE_HANDLER = BASE_API + `user/edit/${params.id}`;
    try {
        const saveData = await axios.post(SAVE_HANDLER, values);
        const res = saveData.data;
    } catch (err) {}
}
