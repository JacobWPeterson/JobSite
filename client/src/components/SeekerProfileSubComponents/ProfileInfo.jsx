import React from 'react';
import styled from 'styled-components';
import schema from '../constants.jsx';
import Education from './Education.jsx';

const ProfileInfoWrapper = styled.div`
  width: 95%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #FFF;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  padding: 2vh 0;
  margin: 0 0 2vh 0;
  overflow-y: scroll;
`;

const Name = styled.h1`
  margin: .5vh 0 .25vh 0;
  color: ${schema.primary};
  font-size: 1.5rem;
  font-weight: bold;
`;

const Text = styled.p`
  margin: 0;
  font-weight: lighter;
`;

const ItalicText = styled.p`
  margin: 0;
  font-weight: lighter;
  font-style: italic;
`;

const ContactInfo = styled.div`
  width: 95%;
  margin-top: 1vh;
  line-height: 1.5rem;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const Link = styled.a`
  margin: 0 .5vw;
  color: inherit;
  font-size: 1rem;
  text-decoration: none;
`;

const SpacedRowDiv = styled.div`
  margin: 0 1vw 0 2vw;
  display: flex;
  justify-content: space-between;
`;

const Section = styled.div`
  width: 95%;
  margin-top: .5vh;
  display: flex;
  flex-direction: column;
`;

const SectionTitle = styled.h2`
  font-size: 1rem;
  font-weight: bold;
  color: ${schema.secondary};
`;

const ProfileInfo = ({ resume }) => (
  <ProfileInfoWrapper>
    {/* <Name>{`${resume.firstName} ${resume.lastName}`}</Name> */}
    <Name>Jacob Peterson</Name>
    {/* <Text>{resume.city}</Text> */}
    <Text>Sunnyvale, CA</Text>
    {/* <Text>{resume.phone}</Text> */}
    <Text>555-555-5555</Text>
    <ContactInfo>
      {/* <Link href={resume.email}>{resume.email}</Link> */}
      <Link href={resume.email}>petersonjacobw@gmail.com</Link>
      <Link href={resume.email}>github.com/JacobWPeterson</Link>
      <Link href={resume.email}>linkedin.com/in/JacobWPeterson</Link>
      {/* {Object.entries(resume.links).map(([key, value]) => (
        <Link key={key} href={value}>{value}</Link>
      ))} */}
    </ContactInfo>
    <Section>
      <SectionTitle>Experience</SectionTitle>
      {/* {resume.workExperience.reverse().map((job) => (
        <SpacedRowDiv key={job.endDate}>
          <Text>{`${job.title} @ ${job.employer}`}</Text>
          <ItalicText>{`${job.startDate.slice(0, 4)} – ${job.endDate.slice(0, 4)}`}</ItalicText>
        </SpacedRowDiv>
      ))} */}
      {[{ title: 'Full Stack Engineer', employer: 'abinth', startDate: '2021/01/01' }, { title: 'Back End Engineer', employer: 'Atelier', startDate: '2021/01/01' }, { title: 'Full Stack Engineer/UI-Owner', employer: 'JobSite', startDate: '2021/01/01' }, { title: 'Front End Engineer', employer: 'ReView', startDate: '2021/01/01' }].map((job) => (
        <SpacedRowDiv key={job.startDate}>
          <Text>{`${job.title} @ ${job.employer}`}</Text>
          <ItalicText>{`${job.startDate.slice(0, 4)}`}</ItalicText>
        </SpacedRowDiv>
      ))}
      <SpacedRowDiv key={2019}>
        <Text>Research Fellow @ CSNTM</Text>
        <ItalicText>2011 – 2019</ItalicText>
      </SpacedRowDiv>
    </Section>
    <Section>
      <SectionTitle>Education</SectionTitle>
      {/* {resume.education.reverse().map((degree) => (
        <Education key={degree.yearGraduated} degree={degree} />
      ))} */}
      {[{
        fieldOfStudy: 'Software Engineering', yearGraduated: 2021, degreeType: 'Other', institution: 'Hack Reactor',
      }, {
        fieldOfStudy: 'Textual Criticism', yearGraduated: 2020, degreeType: 'PhD', institution: 'University of Edinburgh',
      }].map((degree) => (
        <Education key={degree.yearGraduated} degree={degree} />
      ))}
    </Section>
    {/* <Section>
      <SectionTitle>Certifications</SectionTitle>
      {resume.certificates.map((certificate) => (
        <SpacedRowDiv key={certificate.licenseNum}>
          <Text>{certificate.name}</Text>
          <ItalicText>{`License: #${certificate.licenseNum}`}</ItalicText>
        </SpacedRowDiv>
      ))}
    </Section> */}
  </ProfileInfoWrapper>
);
export default ProfileInfo;
