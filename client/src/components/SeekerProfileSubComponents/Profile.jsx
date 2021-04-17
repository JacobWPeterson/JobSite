import React, { useState } from 'react';
import styled from 'styled-components';
import schema from '../constants.jsx';
import ProfilePic from './ProfilePic.jsx';
import ProfileInfo from './ProfileInfo.jsx';
import ResumeFormModal from './ResumeFormModal.jsx';

const ProfileWrapper = styled.div`
  width: 95vw;
  min-height: 75vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background: #FFF;
  margin-top: 3vh;
  padding: 2vh 0;
  border-radius: 10px;

  @media (min-width: 768px) {
    margin-top: 0;
    width: 32vw;
    padding: 0;
    height: 100%;
  }
`;

const ModalBackground = schema.modalBackground;
const AddResumeButton = schema.navButton;

const Profile = ({ resume }) => {
  const [modal, setModal] = useState(false);

  const handleToggle = (e) => {
    e.preventDefault();
    setModal(!modal);
  };

  const handleClickOut = () => {
    if (modal) setModal(false);
  };

  return (
    <ProfileWrapper onClick={handleClickOut}>
      <ProfilePic />
      {
        modal
        && (
          <>
            <ModalBackground />
            <ResumeFormModal />
          </>
        )
      }
      <ProfileInfo resume={resume} />
      <AddResumeButton onClick={handleToggle}>UPDATE RESUME</AddResumeButton>
    </ProfileWrapper>
  );
};
export default Profile;
