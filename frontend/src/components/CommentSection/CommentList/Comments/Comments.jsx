


const Comment = ({comment, user}) => {
    console.log(comment)

    return ( 
        <div>
            <h3>{comment.user.username}:</h3>
            <h5>{comment.text}</h5>
        </div>
     );
}
 
export default Comment;