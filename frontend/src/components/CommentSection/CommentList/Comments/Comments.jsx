import './Comments.css'


const Comment = ({comment, user}) => {
    console.log(comment)

    return ( 
        <div className='Users_comment'>
            <h3>{comment.user.username}:</h3>
            <h5>{comment.text}</h5>
        </div>
     );
}
 
export default Comment;