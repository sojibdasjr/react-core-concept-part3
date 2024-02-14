import './Post.css'
export default function SinglePost ({post}){
    console.log(post);
    const {userId, body, title} = post;
    return(
        <div className='singlePost column'> 
            <p>User Id : {userId}</p>
            <h3>Title : {title}</h3>
            <h4>{body}</h4>
        </div>
    )
}