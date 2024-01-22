import { useState } from 'react';
import { useSelector } from 'react-redux';
import { TeachersStyled, Button, Container } from './Teachers.styled';
import TeacherCard from 'components/TeacherCard/TeacherCard';
import { nanoid } from 'nanoid';
import TeachersFilter from '../TeachersFilter/TeachersFilter';

import { selectTeachers } from '../../redux/Teachers/selectors';
import { Loader } from 'components/Loader/Loader';
import { selectLoading } from '../../redux/Teachers/selectors';

function Teachers({ color }) {
  const teachers = useSelector(selectTeachers);
  const isLoading = useSelector(selectLoading);

  const [teachersLimit, setTeachersLimit] = useState(4);

  const loadMoreHandle = () => {
    setTeachersLimit((prevCount) => prevCount + 4);
  };
  const displayedTeachers = teachers?.slice(0, teachersLimit);

  return (
    <>
      {isLoading ? (
        <Loader color={color} />
      ) : (
        <Container>
          <TeachersFilter />
          <TeachersStyled>
            {displayedTeachers &&
              displayedTeachers?.map((el) => (
                <TeacherCard key={nanoid()} color={color} teacher={el} />
              ))}
          </TeachersStyled>
          {teachers?.length > teachersLimit && (
            <Button color={color} onClick={loadMoreHandle}>
              Load more
            </Button>
          )}
        </Container>
      )}
    </>
  );
}

export default Teachers;
