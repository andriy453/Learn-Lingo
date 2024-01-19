import { useState, useEffect } from 'react';
import Dropdown from '../Dropdown/Dropdown';
import {
  SearchBtn,
  ListFilter,
  SelectDiv,
  ConteinerInput,
  InputLeft,
  InputRight,
  InputText,
} from './TeachersFilter.stuled';
// import { fetchCarAll } from '../../redux/cars/operations';
import { useDispatch, useSelector } from 'react-redux';
// import { filterCars, carsFilterFavorite } from '../../redux/cars/carsSlice';
// import { filterReset, filterResetFavorites } from '../../redux/cars/carsSlice';
import { selectTeachers } from '../../redux/Teachers/selectors';
function CardFilter({ filterArr }) {
  const [Languages, setLanguages] = useState('');
  const [price, setPrice] = useState('');
  const [Level, setLevel] = useState('');
    const Teachers = useSelector(selectTeachers);
  const dispatch = useDispatch();
  const LanguageArr = [
    'French',
    'English',
    'German',
    'Ukrainian',
    'Polish',
  ];
    const LevelArr = [
    'A1 Beginner',
    'A2 Elementary',
    'B1 Intermediate',
    'B2 Upper-Intermediate',
  ];

  let priceArr = [10,20,30,40];
    console.log(Teachers)
//   const filteredCars = filterArr.filter((car) => {
//     const brandMatch = Languages? car.make.toLowerCase() === Languages.toLowerCase() : true;
//     const hourlyPriceMatch = price ? +car.rentalPrice.slice(1) <= price : true;
//     const mileageMatchMin = Level ? car.mileage > Level : true;

//     return brandMatch && hourlyPriceMatch && mileageMatchMin ;
//   });
  const hendleSearch = () => {
    // if (Languages + price + Level + maxMileage) {
    //   if (Teachers === filterArr) {
    //     dispatch(filterCars(filteredCars));
    //   } else {
    //     dispatch(carsFilterFavorite(filteredCars));
    //   }
    // }
  };

//   useEffect(() => {
//     if (Teachers.length === 0) dispatch(fetchCarAll());
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [dispatch]);
  const hendleReset = () => {
    // if (Teachers === filterArr) {
    //   dispatch(filterReset());
    // } else {
    //   dispatch(filterResetFavorites());
    // }
    // setLanguages('');
    // setPrice('');
    // setLevel('');
    // setMaxMileage('');
  };

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
            arr={priceArr}
            value="To $"
            set={setPrice}
            height={true}
            selectedOption={price}
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
        <SearchBtn type="button" onClick={hendleSearch}>
          Search
        </SearchBtn>
        <SearchBtn type="button" onClick={hendleReset}>
          Reset the filter
        </SearchBtn>
      </ListFilter>
    </>
  );
}

export default CardFilter;