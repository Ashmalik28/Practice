import axios from "axios";
import Link from "next/link";

export default async function Home() {

  const response = await axios.get("http://localhost:3000/v1/user/details")

  const data = response.data;

  return (
   <div className="flex flex-col justify-center items-center">
    <span>
     {data.user}
    </span>
    <span>
      {data.email}
    </span>
    <div>
      <Link href="/signup">Signup from here</Link>
      <Link href="/signin">Signin from here</Link>
    </div>
   </div>
  );
}
