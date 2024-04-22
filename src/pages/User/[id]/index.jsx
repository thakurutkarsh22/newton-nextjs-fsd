import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function UserDetail() {
  const [data, setData] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
  });

  const { name, username, email, phone } = data;

  const router = useRouter();
  const { query } = router;
  const { id } = query;

  console.log(router);

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    async function fetchData() {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
    }

    fetchData();
  }, [id]);

  return (
    <>
      <h1>USER DETAIL {id}</h1>
      <p>name : {name}</p>
      <p>username : {username}</p>
      <p>email : {email}</p>
      <p>phone : {phone}</p>
    </>
  );
}

export default UserDetail;
