import React from 'react';
import styled from 'styled-components';
import schema from '../constants.jsx';

const Image = styled.img`
  border-radius: 50%;
  padding: 2px;
  border: 3px solid ${schema.primary};
  height: 125px;
  width: 125px;

  @media (min-width: 768px) {
    height: 175px;
    width: 175px;
  }
`;

const ProfilePic = () => (
  <div>
    <Image src="https://media-exp1.licdn.com/dms/image/C4E03AQG33pdyEEc03Q/profile-displayphoto-shrink_200_200/0/1581963641665?e=1623888000&v=beta&t=8M8uEjhG0yZa8S3b2n4uzrVXV7gIpZy4YGw2AYiAi9M" alt="profilePic" width="125px" height="125px" />
  </div>
);

export default ProfilePic;
