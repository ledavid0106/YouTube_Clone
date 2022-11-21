import React, { useState } from "react";
import axios from "axios";
import {Form, FormLabel, FormControl, FormGroup, Button} from 'react-bootstrap'
import Alert from '@material-ui/lab/Alert';
import useAuth from "../../hooks/useAuth";
import './CommentForm.css'


const CommentForm = ({getAllComments, videoId, token,user_id}) => {
    const [commentText, setCommentText] = useState("")

    async function addComment () {
        let newComment = {
            text: commentText,
            video_id: videoId,
            likes: 0,
            dislikes: 0
        }
        try {
            let response = await axios.post(`http://127.0.0.1:8000/api/comment/`, newComment, {
                headers: {Authorization: `Bearer ${token}`}
            })
            if (response.status === 201) {
                await getAllComments();
                
            }
        } catch(error) {
            console.log(error.response.data)
            return <Alert severity="error" className='loading'>No Results found!</Alert>
          }
        }
        
        const handleSubmit = (event) => {
            event.preventDefault();
            addComment();
            setCommentText("")
        }


    return ( 
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <FormLabel className="comment_form">Comment?</FormLabel>
                <FormControl
                    placeholder="...Comment?"
                    type="text"
                    onChange={(event)=> setCommentText(event.target.value)}
                    value={commentText}
                    className="comment_input"
                />
            </FormGroup>
            <Button className="submit" type="Submit">POST</Button>
        </Form>
     );
}
 
export default CommentForm;