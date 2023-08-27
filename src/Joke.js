import { useQuery } from "@tanstack/react-query";
// import axios from Axios;
import Axios from "axios";

export const Joke = () => {
  const { data, isLoading, isError, refetch } = useQuery(["joke"], () => {
    return Axios.get("https://v2.jokeapi.dev/joke/Any?type=single").then(
      (res) => {
        return res.data;
      }
    );
  });

  if (isError) {
    return <h1>Oops unfortunately, somthing went wrong try again later :( </h1>;
  }

  if (isLoading) {
    return <h1>Loading..., Please Wait</h1>;
  }

  return (
    <div className="content">
      <h1>{data?.joke}</h1>
      <button className="button" onClick={refetch}>
        Update
      </button>
    </div>
  );
};
