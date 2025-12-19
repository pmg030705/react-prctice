import React from "react";

function Card({ userName = " PMG", skills = ["none"] }) {
  //PMG is default for userName
  // console.log(props);
  // console.log(props);

  return (
    <div>
      <div className="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl">
        <div>
          <img
            className="size-48 shadow-xl rounded-md"
            alt=""
            src="https://imgs.search.brave.com/RXU3QTXTeUQanlyP74RoWLgaHHxFtFnT8R4kURjJj0U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS12ZWN0b3Iv/d2lubmVyLTFzdC1z/dGFyLWxhYmVsLWRl/c2lnbl8xMDE3LTg5/NDguanBnP3NlbXQ9/YWlzX2h5YnJpZCZ3/PTc0MCZxPTgw"
          />
        </div>
        <div className="flex flex-col items-center md:items-start">
          <span className="text-2xl font-medium">Class Warfare</span>
          <span className="font-medium text-sky-500">The Anti-Patterns</span>
          <span className="font-medium text-yellow-500">{userName}</span>
          <span className="font-medium text-yellow-500">{skills}</span>
          <span className="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
            <span>No. 4</span>
            <span>·</span>
            <span>2025</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Card;
