import React from 'react';
import styled from 'styled-components';
import { get, post } from '../../http';
import schema from './constants.jsx';
import Account from './SeekerProfileSubComponents/Account.jsx';

const SeekerPortalWrapper = styled.div`
  margin: 0;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${schema.primary};

  @media (min-width: 575px) {
    background: whitesmoke;
  }

  @media (min-width: 768px) {
    height: 94vh;
  }
`;

const Corner = styled.div`
  display: none;
  z-index: 0;

  @media (min-width: 1120px) {
    display: inline;
    width: 20vw;
    height: 40vh;
    overflow: hidden;
    position: absolute;
    top: 60vh;
    right: 0;

    &:before {
      content: "";
      display: block;
      width: 200%;
      height: 200%;
      position: absolute;
      border-radius: 50%;
      bottom: 0;
      right: 0;
      box-shadow: 20vh 10vw 0 0 ${schema.secondary};
    }
  }

  @media (min-width: 1325px) {
    &:before {
      box-shadow: 20vh 10vw 0 0 #CDDDDD;
    }
  }
`;

const NavButtonDiv = schema.navButtonDiv;
const NavButton = schema.navButton;

class SeekerPortal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      seekerId: null,
      reminders: [],
      savedJobs: [],
      appliedJobs: [],
      notes: [],
      resume: null,
    };
    this.postNote = this.postNote.bind(this);
  }

  componentDidMount() {
    get('api/seekerdata/id', { params: { email: this.props.email } })
      .then((res) => {
        this.setState({
          seekerId: res.seekerId,
        });
        return get('api/seekerdata/all', { params: { seekerId: this.state.seekerId } });
      })
      .then((data) => {
        this.setState({
          reminders: data.data.appointments,
          savedJobs: data.data.savedJobs,
          appliedJobs: data.data.applications,
          notes: data.data.notes,
          resume: data.resume,
        }, () => {
          this.props.setSeekerData(this.state);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  postNote(note) {
    const noteBody = {
      seekerId: this.state.seekerId,
      noteObj: note,
    };

    // hook up to the notes component
    post('api/seekerdata/note', noteBody)
      .then(() => {
        get('api/seekerdata/note/all', { seekerId: this.state.seekerId })
          .then((data) => {
            this.setState({
              notes: data.notes,
            });
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const {
      seekerId, reminders, savedJobs, appliedJobs, notes, resume,
    } = this.state;
    return (
      <SeekerPortalWrapper>
        <NavButtonDiv>
          <NavButton href={`${window.location.origin}/#/seeker`}>PROFILE</NavButton>
          <NavButton href={`${window.location.origin}/#/jobs`}>JOBS</NavButton>
        </NavButtonDiv>
        {resume && (
        <Account
          seekerId={seekerId}
          reminders={reminders}
          savedJobs={savedJobs}
          appliedJobs={appliedJobs}
          notes={notes}
          resume={resume}
          postNote={this.postNote}
        />
        )}
        <Corner />
      </SeekerPortalWrapper>
    );
  }
}

export default SeekerPortal;
