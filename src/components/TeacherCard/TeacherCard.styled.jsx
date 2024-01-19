import styled from '@emotion/styled';
// import { colors } from 'styles/constants/colors';
import { HiOutlineHeart, HiHeart } from 'react-icons/hi';
import { HiOutlineBookOpen } from 'react-icons/hi';
import { HiStar } from 'react-icons/hi';
// import { transition } from 'helpers/mixins';

export const TeacherCardStyled = styled.div`
  position: relative;
  width: 100%;
  padding: 12px;

  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  align-items: flex-start;

  border-radius: 24px;


  @media screen and (min-width: 756px) {
    flex-wrap: nowrap;
    padding: 16px;
    gap: 30px;
  }

  @media screen and (min-width: 1280px) {
    padding: 24px;
    gap: 40px;
  }
`;

export const TeacherImgThumb = styled.div`
  width: 120px;
  height: 120px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  border-radius: 50%;
  border: 3px solid #fbe9ba;
  background: #fff;
`;

export const TeacherImg = styled.img`
  display: block;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  object-fit: cover;
`;

export const InfoTeacherWrapper = styled.div``;

export const InfoTeacherHeader = styled.div`
  margin-bottom: 32px;

  display: flex;
  flex-wrap: wrap;
  gap: 28px;
  align-items: start;

  @media screen and (min-width: 1280px) {
    width: 968px;
    justify-content: space-between;
  }
  & p {

    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
  }
  & ul {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;

    gap: 16px;

    @media screen and (min-width: 1280px) {
      justify-content: space-between;
    }

    & :not(:last-child) {
      &:after {
        content: "";
        display: block;
        height: 17px;
        width: 1px;
        background-color: rgba(18, 20, 23, 0.2);
        margin-left: 16px;
      }
    }
  }
  & li {
    display: flex;
    align-items: center;
    & span {

      margin-left: 4px;
    }
  }
`;

export const InfoTeacherList = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const LevelsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const LevelsItem = styled.ul`
  display: flex;
  padding: 8px 12px;
  justify-content: center;
  align-items: center;

  border-radius: 35px;
  border: 1px solid rgba(18, 20, 23, 0.2);


  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.14;
  &.selected {
   
  }
`;

export const HeartLineStyled = styled(HiOutlineHeart)`
  position: absolute;
  top: 24px;
  right: 24px;

  transform: scale(1);
  cursor: pointer;
  transition: transform 300ms cubic-bezier(0.39, 0.575, 0.565, 1);

  &:hover {
    transform: scale(1.02);
    opacity: 0.8;
  }
`;

export const HeartFillStyled = styled(HiHeart)`
  position: absolute;
  top: 24px;
  right: 24px;

  transform: scale(1);
  cursor: pointer;
  transition: transform 300ms cubic-bezier(0.39, 0.575, 0.565, 1);

  &:hover {
    transform: scale(1.02);
    opacity: 0.8;
  }
`;

export const BookIconStyled = styled(HiOutlineBookOpen)`
  margin-right: 8px;
`;

export const StarStyled = styled(HiStar)`
  margin-right: 8px;

`;

export const TeacherNameBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  & p {

    margin: 0;
  }
`;

export const TeachersName = styled.h3`
 
  font-size: 24px;
  font-weight: 500;
  line-height: 1;
`;
export const SpeaksStyled = styled.p`
  margin-top: 32px;

  font-size: 16px;
  font-weight: 500;
  line-height: 1.5; /* 150% */
  & span {
   
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
    text-decoration-line: underline;
  }
`;

export const ConditionsStyled = styled.p`
  margin-top: 8px;

  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  & span {
   
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
  }
`;
export const ReadMoreBtn = styled.button`
  margin-top: 16px;
  padding: 0;
 
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  text-decoration-line: underline;
  background-color: transparent;
  border: none;
  margin-right: auto;
  margin-bottom: 32px;
  cursor: pointer;
  transition: color 200ms cubic-bezier(0.39, 0.575, 0.565, 1);
  &:hover {

  }
`;
export const Svgheart = styled.svg`
    /* width:26px ;
    height:26px ; */
  display: inline-block;
  width: 1em;
  height: 1em;
  stroke-width: 0;
  stroke: currentColor;
  fill: currentColor;
`


export const TeacherDescr = styled.p`
  margin-bottom: 32px;
  margin-top: 16px;
 
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
`;

export const FBList = styled.ul`
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: flex-start;
`;
export const FBItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
`;

export const FBThumb = styled.div`
  display: flex;
  gap: 12px;
`;

export const FBAvaThumb = styled.div`
  width: 46px;
  height: 46px;
  border-radius: 100px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FBAva = styled.p`
  display: block;
  border-radius: 100px;

  font-size: 24px;
  font-weight: 700;
`;
export const FBAuthor = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  align-items: flex-start;
`;

export const FBAuthorName = styled.span`

  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
`;

export const FBRew = styled.p`
 
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
`;