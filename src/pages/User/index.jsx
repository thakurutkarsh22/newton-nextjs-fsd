import { useEffect, useState } from "react";

function UserList() {
  const [data, setData] = useState([]);

  console.log(data, "CSR");

  useEffect(() => {
    async function fetchData() {
      const url = "https://jsonplaceholder.typicode.com/users";
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
    }

    fetchData();
  }, []);

  return (
    <>
      <h1>USER LIST</h1>

      {data.map((user) => {
        const { id, name } = user;
        return (
          <div key={id} id={id} style={{ margin: " 2px" }}>
            {name}
          </div>
        );
      })}
    </>
  );
}

export default UserList;

// THIS IS CLIENT SIDE RENDERING.
