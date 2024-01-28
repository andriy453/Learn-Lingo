import { useState } from 'react';
import { useSelector } from 'react-redux';
import { TeachersStyled, Button, Container } from './Teachers.styled';
import TeacherCard from 'components/TeacherCard/TeacherCard';
import { nanoid } from 'nanoid';
import TeachersFilter from '../TeachersFilter/TeachersFilter';
import { ThreeDots } from 'react-loader-spinner';

import {
  selectTeachers,
  selectLoading,
  selectTeachersFilter,
  selectLimit
} from '../../redux/Teachers/selectors';
import { getAllTeachers,  } from '../../redux/Teachers/TeachersOperations';
import { setLimit } from '../../redux/Teachers/TeachersSlice';
import { useDispatch } from 'react-redux';
import { Loader } from 'components/Loader/Loader';

function Teachers({ color }) {
    const dispatch = useDispatch();
  const teachers = useSelector(selectTeachers);
   const limit = useSelector(selectLimit);
  const isLoading = useSelector(selectLoading);
  const filterArr = useSelector(selectTeachersFilter);
    const [Level, setLevel] = useState('');

  const loadMoreHandle = () => {
    dispatch(getAllTeachers(limit + 4));
    dispatch(setLimit());
  };
console.log(teachers?.length , limit)
  return (
    <>

        <Container>
            <TeachersFilter color={color} Level={Level} setLevel={setLevel} Teachers={teachers } />
          {filterArr ? (
            <TeachersStyled>
              {filterArr &&
                filterArr?.map((el) => (
                  <TeacherCard key={nanoid()} color={color} teacher={el}  Level={Level}/>
                ))}
              {filterArr.length === 0 ? (
                <div>Teacher not faund</div>
              ) : undefined}
            </TeachersStyled>
          ) : (
            <>
              <TeachersStyled>
                {teachers &&
                  teachers?.map((el) => (
                    <TeacherCard key={nanoid()} color={color} teacher={el} />
                  ))}
              </TeachersStyled>
                  {teachers?.length > limit && (isLoading ? <ThreeDots
            height="60"
            width="80"
            radius="9"
            color="#000000"
            ariaLabel="three-dots-loading"
            wrapperStyle={{ justifyContent: 'center' }}
            visible={true}
          />:
                <Button color={color} onClick={loadMoreHandle}>
                  Load more
                </Button> 
 
              )}
            </>
          )}
        </Container>
      
    </>
  );
}

export default Teachers;
