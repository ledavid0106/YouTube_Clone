import React, { useState, useEffect } from "react";
import axios from "axios";
import useAuth from "../../../hooks/useAuth";
import CommentForm from "../CommentForm";
import Comment from "./Comments/Comments";


const CommentList = ({videoId, user_id}) => {
    const [comments, setComments] = useState([])
    const [user, token] = useAuth();

    async function getAllComments() {
        const response = await axios.get(`http://127.0.0.1:8000/api/comment/${videoId}/`)
        setComments(response.data)
    }
    useEffect(()=>{
        getAllComments()
    }, [comments.length, videoId])

    return ( 
        <div>
            <CommentForm
                getAllComments={getAllComments}
                token={token}
                videoId={videoId}
                user_id={user_id}
            />
            {comments.map((comment, index)=>{
                return (
                    <Comment comment={comment} key={index} user={user}/>
                )
            })}
        </div>
     );
}
 
export default CommentList;