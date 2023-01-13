import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { incrementLikes, decrementLikes } from './redux/actions';



//компонент
function Likes(props) {
    
    return (
        <div className='post-img-wrapper'>
                <img className='post-img ' alt='image' src="https://images.unsplash.com/photo-1611689245341-399d7c35e401?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y29mZWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"></img> 
                <div className='btn-wrap '>
                    <div className='btn-group btn-group-wrapper'>
                        <button type="button" className='btn btn-danger' onClick={props.onIncrementLikes}>♡  {props.likes}</button>
                        <button type="button" className='btn btn-secondary' onClick={props.onDecrementLikes}>👎 </button>
                    </div>
                </div>
        </div>
    )
}



function mapStateToProps(state) {
    const { likesReducer } = state;
    return {
        likes: likesReducer.likes
    }
}



//эта функция будет перередерить наш компонет и добавлять лайки по клику на кнопку
function mapDispatchToProps(dispatch) {
    return {
        onIncrementLikes: () => {
            return dispatch(incrementLikes());
        },
        
        onDecrementLikes: () => {
            return dispatch(decrementLikes());
        }
    }
}

//функция connet это HOC компонет высшего порядка, 
// в корторую мы оборачиваем наш компонент и добавляем новый функционал. 
// На выходе мы получаем новый компонент.

export default connect(mapStateToProps, mapDispatchToProps)(Likes);