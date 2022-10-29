import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/contacts/slices/filterSlice';
import css from './Filter.module.css';

const Filter = () => {
    const dispatch = useDispatch();
    
    const getFilteredContacts = event => {
        const filtered = event.target;
        
        dispatch(filterContacts(filtered.value))
    }

    return (
        <form>
            <div className={css.input}>
                <input className={css.inputField} name='filter' type="text" onChange={getFilteredContacts} required/>
                <label className={css.inputLabel} htmlFor="filter">Find contacts by name</label>
            </div>
        </form>        
    )    
}

export default Filter;