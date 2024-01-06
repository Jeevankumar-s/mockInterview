import React, { useState } from "react";
import styled from '@emotion/styled'
import { CDBStepper, CDBStep, CDBInput, CDBBtn, CDBContainer } from "cdbreact";
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import '@trimbleinc/modus-react-bootstrap/css/dist/modus-react-bootstrap.min.css';
import {Chip} from '@trimbleinc/modus-react-bootstrap';
import './index.css'



const Stepper = () => {
  const [active, setActive] = useState(1);

  const handleNextPrevClick = a => setActive(a);
  return (
      <CDBStepper>
        <CDBStep
          id={1}
          className="icon-logo"
          icon="pencil-alt"
          name="Basic Information"
          handleClick={() => handleNextPrevClick(1)}
          active={active}
          component={<Step1 handleNextPrevClick={handleNextPrevClick} />}
        />
        <CDBStep
          id={2}
          icon="info-circle"
          name="Personal Data"
          handleClick={() => handleNextPrevClick(2)}
          active={active}
          component={<Step2 handleNextPrevClick={handleNextPrevClick} />}
        />
        <CDBStep
          id={3}
          icon="book-reader"
          name="Terms and Conditions"
          handleClick={() => handleNextPrevClick(3)}
          active={active}
          component={<Step3 handleNextPrevClick={handleNextPrevClick} />}
        />
        <CDBStep
          id={4}
          icon="check"
          name="Finish"
          handleClick={() => handleNextPrevClick(4)}
          active={active}
          component={<Step4 handleNextPrevClick={handleNextPrevClick} />}
        />
      </CDBStepper>
  );
};

export default Stepper;

const Step4 = ({ handleNextPrevClick }) => {
  return (
    <StepContainer md="12">
      <div style={{ width: '100%', background: '#f9f9f9', padding: '30px 10px', height: '100%' }}>
        <div
          style={{
            margin: '0 auto',
            maxWidth: '500px',
            borderRadius: '10px',
            background: '#f5f5f5',
            boxShadow: '0px 4px 10px 0 rgba(0, 0, 0, 0.05)',
          }}
        >
          <FlexColumnContainer>
            <div
              style={{
                textAlign: 'center',
                padding: '20px 0 10px 0',
                color: '#939393',
                fontSize: '30px',
                fontWeight: 'bold',
              }}
            >
              Step 4
            </div>
            <FlexColumnContainer width="100%">
              <div style={{ fontSize: '25px', textAlign: 'center' }}>
                Congratulations! You have completed this process.
                <span style={{ fontSize: '50px', display: 'block' }} role="img" aria-label="image">
                  🎉
                </span>
              </div>
              <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-around' }}>
                <CDBBtn
                  flat
                  outline
                  circle={false}
                  color="secondary"
                  onClick={() => handleNextPrevClick(3)}
                >
                  Previous
                </CDBBtn>
              </div>
            </FlexColumnContainer>
          </FlexColumnContainer>
        </div>
      </div>
    </StepContainer>
  );
};

const Step3 = ({ handleNextPrevClick }) => {
  const topics = ['Situational', 'Current Affairs'];
  const [selectedTopics, setSelectedTopics] = useState([]);

  const handleToggleTopic = (topic) => {
    if (selectedTopics.includes(topic)) {
      setSelectedTopics(selectedTopics.filter((selectedTopic) => selectedTopic !== topic));
    } else {
      setSelectedTopics([...selectedTopics, topic]);
    }
  };

  return (
    <StepContainer>
      <div style={{ width: '100%', background: '#f9f9f9', padding: '30px 10px', height: '100%' }}>
        <div
          style={{
            margin: '0 auto',
            maxWidth: '500px',
            borderRadius: '10px',
            background: '#f5f5f5',
            boxShadow: '0px 4px 10px 0 rgba(0, 0, 0, 0.05)',
          }}
        >
          <FlexColumnContainer>
            <div
              style={{
                textAlign: 'center',
                padding: '20px 0 10px 0',
                color: '#939393',
                fontSize: '30px',
                fontWeight: 'bold',
              }}
            >
              Select Topics
            </div>
            <FlexColumnContainer width="100%">
              <div
                style={{
                  fontSize: '10px',
                  fontWeight: '200',
                  maxHeight: '300px',
                  overflowY: 'auto',
                }}
              >
                {/* ... (other lorem ipsum paragraphs) */}
              </div>

              {/* List container with selectable topics */}
              <div style={{ marginTop: '20px' }}>
                <h3>Relevant Topics for You</h3>
                <div>
</div>
<div className='list-container'>
      {topics.map((topic) => (
        <Chip
          key={topic}
          label={topic}
          className="chip"
          style={{
            backgroundColor: selectedTopics.includes(topic) ? '#4CAF50' : '#e0e0e0',
            color: selectedTopics.includes(topic) ? '#ffffff' : '#000000',
            border: selectedTopics.includes(topic) ? '1px solid #4CAF50' : '1px solid #e0e0e0',
            borderRadius: '8px',
            margin: '4px',
            paddingLeft:'13px',
            padding: '8px',
            cursor: 'pointer',
          }}
          icon={selectedTopics.includes(topic) ? <FaCheckCircle /> : <FaTimesCircle />}
          onClick={() => handleToggleTopic(topic)}
        />
      ))}
      </div>
              </div>

              {/* Another list container with non-selectable items */}
              <div style={{ marginTop: '20px' }}>
                <h3>You May Also Add</h3>
                <div className='list-container'>
      {topics.map((topic) => (
        <Chip
          key={topic}
          label={topic}
          className="chip"
          style={{
            backgroundColor: selectedTopics.includes(topic) ? '#4CAF50' : '#e0e0e0',
            color: selectedTopics.includes(topic) ? '#ffffff' : '#000000',
            border: selectedTopics.includes(topic) ? '1px solid #4CAF50' : '1px solid #e0e0e0',
            borderRadius: '8px',
            margin: '4px',
            paddingLeft:'13px',
            padding: '8px',
            cursor: 'pointer',
          }}
          icon={selectedTopics.includes(topic) ? <FaCheckCircle /> : <FaTimesCircle />}
          onClick={() => handleToggleTopic(topic)}
        />
      ))}
      </div>
              </div>

              {/* Select element with options */}
              <div className="my-styled-form-control">
    <div className="my-styled-label-container">
      <label className="my-styled-input-label" htmlFor="select-number-of-questions">
        Select the number of questions
      </label>
      <select
        className="my-styled-select"
        id="select-number-of-questions"
        // value={numberOfQuestionsSelected}
        // onChange={handleNumberOfQuestionsSelectedChange}
      >
        <option className="my-styled-menu-item" value={20}>
          20
        </option>
        <option className="my-styled-menu-item" value={30}>
          30
        </option>
        <option className="my-styled-menu-item" value={40}>
          40
        </option>
      </select>
    </div>
  </div>

              <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-around' }}>
                <CDBBtn
                  className="float-start"
                  circle={false}
                  color="secondary"
                  flat
                  outline
                  onClick={() => handleNextPrevClick(2)}
                >
                  Previous
                </CDBBtn>
                <CDBBtn
                  className="float-end"
                  flat
                  color="secondary"
                  circle={false}
                  onClick={() => handleNextPrevClick(4)}
                >
                  Start Mock
                </CDBBtn>
              </div>
            </FlexColumnContainer>
          </FlexColumnContainer>
        </div>
      </div>
    </StepContainer>
  );
};

// ... (previous code)

const Step2 = ({ handleNextPrevClick }) => {
  return (
    <StepContainer>
      <div style={{ width: '100%', background: '#f9f9f9', padding: '30px 10px', height: '100%' }}>
        <div
          style={{
            margin: '0 auto',
            maxWidth: '500px',
            borderRadius: '10px',
            background: '#f5f5f5',
            boxShadow: '0px 4px 10px 0 rgba(0, 0, 0, 0.05)',
          }}
        >
          <FlexColumnContainer>
            <div
              style={{
                textAlign: 'center',
                padding: '20px 0 10px 0',
                color: '#939393',
                fontSize: '30px',
                fontWeight: 'bold',
              }}
            >
              DAF Overview
            </div>
            <FlexColumnContainer width="100%">
            <div className="input-container">
  <div className="input-group">
    <label htmlFor="state" className="label-style">State:</label>
    <CDBInput color="secondary" id="state" label="" placeholder="Enter or edit your data" />
  </div>
  <div className="input-group">
    <label htmlFor="district" className="label-style">District:</label>
    <CDBInput color="secondary" id="district" label="" placeholder="Enter or edit your data" />
  </div>
  <div className="input-group">
    <label htmlFor="stream" className="label-style">Stream:</label>
    <CDBInput color="secondary" id="stream" label="" placeholder="Enter or edit your data" />
  </div>
  <div className="input-group">
  <label htmlFor="subject" className="label-style">Stream:</label>
  <CDBInput
  id="subject"
                color="secondary"
                placeholder="Enter or edit your data"
              />
</div>
</div>



              

              <h2>Personal Interests</h2>
              <div className="input-container">
              
  <div className="input-group">
    <label htmlFor="prizes" className="label-style">Prizes:</label>
    <CDBInput color="secondary" id="prizes" label="" placeholder="Enter or edit your data" />
  </div>
  <div className="input-group">
    <label htmlFor="sports" className="label-style">Sports:</label>
    <CDBInput color="secondary" id="sports" label="" placeholder="Enter or edit your data" />
  </div>
  <div className="input-group">
    <label htmlFor="leadershipPosition" className="label-style">Leadership Position:</label>
    <CDBInput color="secondary" id="leadershipPosition" label="" placeholder="Enter or edit your data" />
  </div>
  <div className="input-group">
    <label htmlFor="extracurricularActivities" className="label-style">Extracurricular Activities:</label>
    <CDBInput color="secondary" id="extracurricularActivities" label="" placeholder="Enter or edit your data" />
  </div>
</div>

              
              <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-around' }}>
                <CDBBtn
                  className="float-start"
                  circle={false}
                  color="secondary"
                  flat
                  outline
                  onClick={() => handleNextPrevClick(1)}
                >
                  Previous
                </CDBBtn>
                <CDBBtn
                  className="float-end"
                  flat
                  color="secondary"
                  circle={false}
                  onClick={() => handleNextPrevClick(3)}
                >
                  Next
                </CDBBtn>
              </div>
            </FlexColumnContainer>
          </FlexColumnContainer>
        </div>
      </div>
    </StepContainer>
  );
};

// ... (rest of the code)


// ... (previous code)

const Step1 = ({ handleNextPrevClick }) => {
  const handleFileUpload = (event) => {
    // Handle file upload logic here
  };

  return (
    <StepContainer>
      <div style={{ width: '100%', background: '#f9f9f9', padding: '30px 10px', height: '100%' }}>
        <div
          style={{
            margin: '0 auto',
            maxWidth: '500px',
            borderRadius: '10px',
            background: '#f5f5f5',
            boxShadow: '0px 4px 10px 0 rgba(0, 0, 0, 0.05)',
          }}
        >
          <FlexColumnContainer>
            <div
              style={{
                textAlign: 'center',
                padding: '20px 0 10px 0',
                color: '#939393',
                fontSize: '30px',
                fontWeight: 'bold',
              }}
            >
              A Bit About Yourself
            </div>
            <FlexColumnContainer width="100%">
              <CDBInput
                color="secondary"
                type="file"
                label="Upload Your Daf"
                onChange={handleFileUpload}
              />
              <p className="or-text">(OR)</p>
              <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <CDBBtn
                  color="secondary"
                  flat
                  circle={false}
                  className="float-end"
                  onClick={() => handleNextPrevClick(2)}
                >
                  Enter details Manually
                </CDBBtn>
              </div>
            </FlexColumnContainer>
          </FlexColumnContainer>
        </div>
      </div>
    </StepContainer>
  );
};

// ... (rest of the code)


const FlexColumnContainer = styled('div')`
  padding: 10px;
  display: flex;
  flex-direction: column;
  width: ${props => props.width};
  justify-content: ${props => (props.justifyContent ? props.justifyContent : 'center')};
  align-items: ${props => (props.alignItems ? props.alignItems : 'center')};
  box-sizing: border-box;
`;

const StepContainer = styled('div')`
  width: 100%;
  height: 100%;
`;