import React from "react";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  //General format followed

  //   const [data, setData] = React.useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/MGPuneeth")
  //       .then((response) => {
  //         // console.log(response.json());

  //         // console.log(response);
  //         return response.json();
  //       })
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);

  const data = useLoaderData();
  return (
    <div className="text-center m-4 bg-gray-500 py-5 text-white text-3xl">
      Github
      <img src={data.avatar_url} width={300} alt="Puneeth-photo" />
    </div>
  );
}

export default Github;

// Optimised and scalable
//Pre-processes the fetching data while just hovered on the tab or button

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/MGPuneeth");
  return response.json();
};
