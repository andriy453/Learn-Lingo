import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  TeacherCardStyled,
  TeacherImg,
  TeacherImgThumb,
  InfoTeacherWrapper,
  InfoTeacherHeader,
  HeartLineStyled,
  BookIconStyled,
  StarStyled,
  TeachersName,
  SpeaksStyled,
  ConditionsStyled,
  ReadMoreBtn,
  TeacherDescr,
  FBList,
  FBItem,
  FBThumb,
  FBAvaThumb,
  FBAva,
  FBAuthor,
  FBAuthorName,
  FBRew,
  LevelsList,
  LevelsItem,
  HeartFillStyled,
  TeacherNameBox,
  BtnFavorites,
} from './TeacherCard.styled';
import { selectIsAuth } from '../../redux/Auth/selectors';
import {
  addFavorites,
  deleteFavorites,
} from '../../redux/Teachers/TeachersSlice';
import { selectTeachersFavorites } from '../../redux/Teachers/selectors';

const TeacherCard = ({ teacher, levelFilter, color }) => {
  const {
    name,
    surname,
    languages,
    levels,
    rating,
    reviews,
    price_per_hour,
    lessons_done,
    avatar_url,
    lesson_info,
    conditions,
    experience,
  } = teacher;
  const dispatch = useDispatch();
  const [isReadMore, setIsReadMore] = useState(false);

  const favTeachersArr = useSelector(selectTeachersFavorites);

  const isAuth = useSelector(selectIsAuth);

  const [favorite, setisLiked] = useState(false);

  useEffect(() => {
    const isFavorite = favTeachersArr.find(
      (teacher) => teacher.avatar_url === avatar_url
    );
    if (isFavorite !== undefined) {
      setisLiked(true);
    }
  }, [avatar_url, favTeachersArr]);

  const handleToggleFavorite = () => {
    setisLiked(!favorite);
    if (favorite) {
      dispatch(deleteFavorites(teacher));
    } else {
      dispatch(addFavorites(teacher));
    }
  };

  return (
    <TeacherCardStyled>
      <TeacherImgThumb color={color}>
        <TeacherImg src={avatar_url} height="100px" width="100px" />
      </TeacherImgThumb>
      <InfoTeacherWrapper>
        <InfoTeacherHeader>
          <TeacherNameBox>
            <p>Languages</p>
            <TeachersName>
              {name} {surname}
            </TeachersName>
          </TeacherNameBox>
          <ul>
            <li>
              <BookIconStyled size={'16px'} /> Lessons online
            </li>
            <li>Lessons done: {lessons_done}</li>
            <li>
              <StarStyled /> Rating: {rating}
            </li>
            <li>
              Price / 1 hour: <span>{price_per_hour} $</span>
            </li>
          </ul>

          {isAuth && (
            <BtnFavorites type={'button'} onClick={handleToggleFavorite}>
              {favorite ? (
                <HeartFillStyled size={26} />
              ) : (
                <HeartLineStyled size={26} />
              )}
            </BtnFavorites>
          )}

          {/* {!isAuth &&  <BtnFavorites type={"button"} >   <HeartFillStyled  size={26} />  </BtnFavorites>*/}
        </InfoTeacherHeader>
        <SpeaksStyled>
          Speaks: <span>{languages?.join(', ')}</span>
        </SpeaksStyled>
        <ConditionsStyled>
          Lesson Info:
          <span>{lesson_info}</span>
        </ConditionsStyled>
        <ConditionsStyled>
          Conditions:
          <span>{conditions}</span>
        </ConditionsStyled>
        {!isReadMore && (
          <ReadMoreBtn onClick={() => setIsReadMore(true)}>
            Read more
          </ReadMoreBtn>
        )}
        {isReadMore && (
          <>
            <TeacherDescr>{experience}</TeacherDescr>
            <FBList>
              {reviews.map((el, index) => (
                <FBItem key={index}>
                  <FBThumb>
                    <FBAvaThumb>
                      <FBAva>{el.reviewer_name.charAt(0).toUpperCase()}</FBAva>
                    </FBAvaThumb>
                    <FBAuthor>
                      <FBAuthorName>{el.reviewer_name}</FBAuthorName>
                      <span>
                        <StarStyled />
                        {el.reviewer_rating}.0
                      </span>
                    </FBAuthor>
                  </FBThumb>
                  <FBRew>{el.comment}</FBRew>
                </FBItem>
              ))}
            </FBList>
            {isReadMore && (
              <ReadMoreBtn onClick={() => setIsReadMore(false)}>
                Read less
              </ReadMoreBtn>
            )}
          </>
        )}
        <LevelsList>
          {levels.map((el, index) => (
            <LevelsItem
              key={index}
              className={el === levelFilter ? 'selected' : ''}
            >
              {el}
            </LevelsItem>
          ))}
        </LevelsList>
        {/* {isReadMore && (
            <Button
              onClick={isAuth ? openOrderModal : openPushUpModal}
              className="orderBtn"
            >
              Book trial lesson
            </Button>
          )} */}
      </InfoTeacherWrapper>
    </TeacherCardStyled>
  );
};

export default TeacherCard;
