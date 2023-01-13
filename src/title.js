import { useDispatch, useSelector } from 'react-redux';
import { inputText } from './redux/actions';



function Title(props) {
   
    const text = useSelector(state => {
        const { inputReducer } = state;
        return inputReducer.text;
    });

    const dispatch = useDispatch();

    const handleChange = (e) => {
        dispatch(inputText(e.target.value));
    }
    const handleEnter = (e) => {
        e.target.style.display = "none";
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className='title-wrapper'>
            <div>
                <form onSubmit={handleSubmit}>
                    <input 
                    className='title-input' 
                    type='text' 
                    onChange={handleChange}
                    // onE={handleEnter} 
                    placeholder='write a title...'>

                    </input>
                </form>    
                <h3 className='title'>{text}</h3>
            </div>
        </div>
    )
}

export default Title;