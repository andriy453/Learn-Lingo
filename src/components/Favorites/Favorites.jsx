import { TeachersStyled, Container, Text } from '../Teachers/Teachers.styled';
import {
  selectTeachersFavorites,
  selectFilterFavoritesTeachers,
} from '../../redux/Teachers/selectors.js';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import TeachersFilter from '../TeachersFilter/TeachersFilter';

import TeacherCard from '../TeacherCard/TeacherCard.jsx';
function Favorites({ color }) {
  const [Level, setLevel] = useState('');
  const Techers = useSelector(selectTeachersFavorites);
  const filterArr = useSelector(selectFilterFavoritesTeachers);
  return (
    <>
      {filterArr ? (
        <Container>
          <TeachersFilter
            color={color}
            Level={Level}
            setLevel={setLevel}
            Teachers={Techers}
          />
          <TeachersStyled>
            {filterArr &&
              filterArr?.map((el) => (
                <TeacherCard
                  key={nanoid()}
                  color={color}
                  teacher={el}
                  Level={Level}
                />
              ))}
            {filterArr.length === 0 ? <div>Teacher not faund</div> : undefined}
          </TeachersStyled>
        </Container>
      ) : (
        <>
          {Techers.length === 0 ? (
            <Container>
              <Text>
                It appears that you haven't added any car to your favorites yet.
                To get started, you can add car that you like to your favorites
                for easier access in the future.
              </Text>
            </Container>
          ) : (
            <Container>
              <TeachersFilter
                color={color}
                Level={Level}
                setLevel={setLevel}
                Teachers={Techers}
              />
              <TeachersStyled>
                {Techers &&
                  Techers?.map((el) => (
                    <TeacherCard key={nanoid()} color={color} teacher={el} />
                  ))}
              </TeachersStyled>
            </Container>
          )}
        </>
      )}
    </>
  );
}

export default Favorites;