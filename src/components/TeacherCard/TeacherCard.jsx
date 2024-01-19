import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getRandomColor } from 'helpers/getRandomColor';

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
  Svgheart,
} from './TeacherCard.styled';
// import { nanoid } from '@reduxjs/toolkit';
// import { addToFavTeachers, removeFromFavTeachers } from '../../redux/user/userOperations';
// import Modal from 'components/Modal/Modal';
// import { Button } from 'components/Button/Button.styled';
// import { BookForm } from 'components/BookForm/BookForm';
// import { PushUpNotification } from 'components/PushUpNotification/PushUpNotification';
// import { selectIsAuth } from '../../redux/auth/selectors';
// import { selectUserId } from '../../redux/auth/selectors';
// import { selectFavTeachers } from '../../redux/user/selectors';
import sprite from '../../assets/sprite.svg'
const TeacherCard = ({ teacher, levelFilter }) => {
  const {
    id,
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
//   const dispatch = useDispatch();
  const [isReadMore, setIsReadMore] = useState(false);

//   const favTeachersArr = useSelector(selectFavTeachers);
//   const [isBookModalOpened, setIsBookModalOpened] = useState(false);
//   const [isPushUpModalOpened, setIsPushUpModalOpened] = useState(false);

//   const isAuth = useSelector(selectIsAuth);
//   const userId = useSelector(selectUserId);

//   const isTeacherFavorite = favTeachersArr.includes(id);

//   const addToFawHandle = () => {
//     const data = { newFollower: userId, id: id.toString() };
//     dispatch(addToFavTeachers(data));
//   };
//   const removeFromFawHandle = () => {
//     const data = { removedFollower: userId, id: id.toString() };
//     dispatch(removeFromFavTeachers(data));
//   };

//   const openOrderModal = () => {
//     setIsBookModalOpened(true);
//   };

//   const openPushUpModal = () => {
//     setIsPushUpModalOpened(true);
//   };

//   const teacherDataForBook = { id, name, surname, avatar_url };
  return (
    <>
      <TeacherCardStyled>
        <TeacherImgThumb>
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
                <BookIconStyled size={"16px"} /> Lessons online
              </li>
              <li>Lessons done: {lessons_done}</li>
              <li>
                <StarStyled /> Rating: {rating}
              </li>
              <li>
                Price / 1 hour: <span>{price_per_hour} $</span>
              </li>
            </ul>
            {/* {isAuth &&
              (isTeacherFavorite ? (
                          <HeartFillStyled onClick={removeFromFawHandle} size={26} />
                          
              ) : (
                <HeartLineStyled onClick={addToFawHandle} size={26} />
              ))} */}
                      <Svgheart><use href={sprite + '#icon-normal'}></use></Svgheart>

            {/* {!isAuth && <HeartLineStyled onClick={openPushUpModal} size={26} />} */}
          </InfoTeacherHeader>
          <SpeaksStyled>
            Speaks: <span>{languages?.join(", ")}</span>
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
                {reviews.map((el ,index) => (
                  <FBItem key={index}>
                    <FBThumb>
                      <FBAvaThumb
                        // style={{ backgroundColor: `${getRandomColor()}` }}
                      >
                        <FBAva>
                          {el.reviewer_name.charAt(0).toUpperCase()}
                        </FBAva>
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
            {levels.map((el,index) => (
              <LevelsItem
                key={index}
                className={el === levelFilter ? "selected" : ""}
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
      {/* <Modal active={isBookModalOpened} setActive={setIsBookModalOpened}>
        <BookForm
          setIsBookModalOpened={setIsBookModalOpened}
          teacherDataForBook={teacherDataForBook}
        />
      </Modal>
      {!isAuth && (
        <Modal active={isPushUpModalOpened} setActive={setIsPushUpModalOpened}>
          <PushUpNotification setIsPushUpModalOpened={setIsPushUpModalOpened} />
        </Modal>
      )} */}
    </>
  );
};

export default TeacherCard;