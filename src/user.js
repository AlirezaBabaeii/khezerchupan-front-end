import React from "react";
import { useAPI } from "./apicontext";
import Names from './name'
export default function Users() {
  const { users } = useAPI();
  console.log(users,"user this");
  return (
    <div>
<Names/>
      <ul>
        {users.map(u => (
          <li>{u.username}</li>

        ))}
      </ul>

    </div>
  );
}
