import Error from "next/error";

function NotFound() {
  return <Error statusCode={404} />;
}

export default NotFound;
