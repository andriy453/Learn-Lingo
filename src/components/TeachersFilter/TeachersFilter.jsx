import { useState } from 'react';
import Dropdown from '../Dropdown/Dropdown';
import {
  ListFilter,
} from './TeachersFilter.stuled';
// import { useDispatch, useSelector } from 'react-redux';
// import { selectTeachers } from '../../redux/Teachers/selectors';
function TeachersFilter() {
  const [Languages, setLanguages] = useState('');
  const [price, setPrice] = useState('');
  const [Level, setLevel] = useState('');
  // const Teachers = useSelector(selectTeachers);
  // const dispatch = useDispatch();
  const LanguageArr = ['French', 'English', 'German', 'Ukrainian', 'Polish'];
  const LevelArr = [
    'A1 Beginner',
    'A2 Elementary',
    'B1 Intermediate',
    'B2 Upper-Intermediate',
  ];

  let priceArr = [10, 20, 30, 40];
  return (
    <>
      <ListFilter>
        <li>
          <span>Languages</span>
          <Dropdown
            arr={LanguageArr}
            value="Enter the text"
            set={setLanguages}
            selectedOption={Languages}
          />
        </li>
        <li>
          <span>Level of knowledge</span>
          <Dropdown
            arr={LevelArr}
            value="To $"
            set={setLevel}
            height={true}
            selectedOption={Level}
          />
        </li>
        <li>
          <span>Price</span>
          <Dropdown
            arr={priceArr}
            value="To $"
            set={setPrice}
            height={true}
            selectedOption={price}
          />
        </li>
      </ListFilter>
    </>
  );
}

export default TeachersFilter;
