import react from "react";
import { useAPI } from "./apicontext";

const User = () => {
    const { user } = useAPI()

    return (
        <div>
            <ul>

                {user.map(res => {
                    <li>
                        {res.username}

                    </li>
                })}

            </ul>
        </div>
    )


}
export default User