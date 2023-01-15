import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { Formik } from 'formik';
import { Input, Label } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const handleFilter = e => dispatch(setFilter(e.currentTarget.value));

  return (
    <Formik>
      <Label>
        Find contacts by name
        <Input type="text" name="filter" onChange={handleFilter} />
      </Label>
    </Formik>
  );
};
