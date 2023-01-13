import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { commentUpdate, commentDelete } from './redux/actions';



function SingleComment({ data }) {
  const [commentText, setCommentText] = useState('');
  const { text, id } = data;
  const dispatch = useDispatch();

    useEffect(() => {
        if (text) {
          setCommentText(text);
        }
      }, [text]);

    const handleInput = (e) => {
      setCommentText(e.target.value);
    }

    const handleUpdate = (e) => {
      e.preventDefault();
      dispatch(commentUpdate(commentText, id));
    }

    const handleDelete = (e) => {
      e.preventDefault();
      dispatch(commentDelete(id));
    }

    return (
        <form onSubmit={handleUpdate} className='singleComment-wrapper'>
            <textarea className='singleComment' type='text' value={commentText} onChange={handleInput}></textarea>
            <input type='submit' hidden></input>
            <div className='comment-delete' onClick={handleDelete} >&times;</div>
        </form>
    )

}

export default SingleComment;