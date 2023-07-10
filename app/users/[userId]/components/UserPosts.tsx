import { Post } from "@/types"


type Props = {
    promise: Promise<Post[]>
}

export default async function UserPosts({ promise }: Props) {
    const posts = await promise;
    console.log(posts);
    // if (posts) {
    // const content = posts.map(post => {
    //     return (
    //         <article key={post.id}>
    //             <h2>{post.title}</h2>
    //             <p>{post.body}</p>
    //             <br />
    //         </article>
    //     )
    // })
    return   <div>Allllllllllllllllllllllllll posts...</div>;


// }
// else {
//     return <div>Nooooooooooooooooooooooooooooooooooooooooooooooooooo posts...</div>;
//   }


}