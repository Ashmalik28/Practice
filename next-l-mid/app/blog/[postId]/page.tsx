import axios from "axios";

export default async function BlogPage({params} : any){
    const postId = (await params).postId;
    const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${postId}`)

    const data = response.data;

    return <div className="flex flex-col w-screen h-screen items-center">
    <div className="text-6xl">Blog page {postId}</div>

    <div className="flex flex-col justify-center items-center w-screen h-screen">
        <span>
            Title - {data.id}
        </span>
        <span>
            Body - {data.title}
        </span>
    </div>

    </div>
}