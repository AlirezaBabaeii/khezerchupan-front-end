import React from "react";
import { useAPI } from "./apicontext";
// import Nameuser from './name'

export default function Names() {
  const { users } = useAPI();
  console.log(users,"call this");
  return (
    <div>
      <ul>
        {users.map(u => (
          <li>{u.name}</li>

        ))}
      </ul>

    </div>
  );
}
