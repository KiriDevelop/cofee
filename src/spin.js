import { Audio } from  'react-loader-spinner'
import { useSelector } from 'react-redux';

const Spin = (props) => {

    const spinner = useSelector(state => state.loaderReducer.loading);

    return (
        <div>
            <Audio 
                type='Puff'
                height="80"
                width="80"
                radius="9"
                color="green"
                ariaLabel="loading"
                wrapperStyle
                wrapperClass
                visible={spinner}
            />
        </div>
    )
}
export default Spin;