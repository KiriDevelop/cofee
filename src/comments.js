import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import uniqid from 'uniqid';
import { commentCreate, commentsLoad } from './redux/actions';
import SingleComment from './singleComment';



function Comments(props) {
    const [textComment, setTextComment] = useState('');
    const comments = useSelector(state => {
      const { comReducer } = state;
      return comReducer.comments;
    });
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(commentsLoad());
    }, []);

    const handleInput = (e) => {
        return setTextComment(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const id = uniqid();
        dispatch(commentCreate(textComment, id));
    }

    return (
        <div className='comments-box-wrapper'>
            <form className='comments-wrapper' onSubmit={handleSubmit}>
                <input 
                    className='comment-input' 
                    type='text' 
                    placeholder='write a comment...'
                    value={textComment} 
                    onChange={handleInput}>

                </input>
                <input type='submit' hidden></input>
            </form>
            {!!comments.length && comments.map(res => {
                return <SingleComment key={res.id} data={res} />
            })}
            
        </div>
    )

}

export default Comments;