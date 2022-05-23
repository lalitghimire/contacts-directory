import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { filterContacts } from '../redux/contactSlice';

const Filter = () => {
    const inputRef = useRef('');
    const dispatch = useDispatch();

    const inputStyle = {
        width: '99%',
        fontSize: '18px',
        marginWidth: '5px',
        padding: '5px',
        border: '1px solid #ccc',
        borderRadius: '4px',
    };

    const handleFilters = () => {
        dispatch(filterContacts(inputRef.current.value));
    };
    return (
        <div>
            <input
                type='text'
                name=''
                placeholder='Search user by name'
                style={inputStyle}
                ref={inputRef}
                onChange={handleFilters}
            />
        </div>
    );
};
export default Filter;
