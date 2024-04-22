function SSRUser(props) {
  const { data } = props;

  console.log("SSR", data);
  return (
    <>
      <h1>SSR USER LIST</h1>

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

// This gets called on every request
export async function getServerSideProps() {
  const url = "https://jsonplaceholder.typicode.com/users";
  const response = await fetch(url);
  const data = await response.json();

  return {
    props: { data: data },
  };
}

export default SSRUser;
