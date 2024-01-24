import { TeachersStyled, Container } from '../Teachers/Teachers.styled';
import { selectTeachersFavorites } from '../../redux/Teachers/selectors.js';
import { useSelector } from 'react-redux';
import { nanoid } from 'nanoid';

import TeacherCard from '../TeacherCard/TeacherCard.jsx';
function Favorites({ color }) {
  const Techers = useSelector(selectTeachersFavorites);
  return (
    <Container>
      <TeachersStyled>
        {Techers.length === 0 ? (
          <div>not </div>
        ) : (
          Techers.map((el) => (
            <TeacherCard key={nanoid()} teacher={el} color={color} />
          ))
        )}
      </TeachersStyled>
    </Container>
  );
}

export default Favorites;
