import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/slices/filterSlice';
import css from './Filter.module.css';

const Filter = () => {
    const dispatch = useDispatch();
    
    const getFilteredContacts = event => {
        const filtered = event.target;
        
        dispatch(filterContacts(filtered.value))
    }

    return (
        <label className={css.filter} htmlFor="filter">Find contacts by name
            <input className={css.input} name='filter' type="text" onChange={getFilteredContacts} />
        </label>
    )    
}

export default Filter;