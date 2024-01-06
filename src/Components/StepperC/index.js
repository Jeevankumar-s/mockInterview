import React, { useState } from "react";
import styled from '@emotion/styled'
import { CDBStepper, CDBStep, CDBInput, CDBBtn, CDBContainer } from "cdbreact";


const Stepper = () => {
  const [active, setActive] = useState(1);

  const handleNextPrevClick = a => setActive(a);
  return (
      <CDBStepper>
        <CDBStep
          id={1}
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
  const handleTopicSelection = (topic) => {
    // Handle the selection logic for the topics
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
              Step 3
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
                <ul>
                  <li>
                    <label>
                      <input
                        type="checkbox"
                        onChange={() => handleTopicSelection('Situational Current Affairs')}
                      />
                      Situational Current Affairs
                    </label>
                  </li>
                  {/* Add more list items for other topics as needed */}
                </ul>
              </div>

              {/* Another list container with non-selectable items */}
              <div style={{ marginTop: '20px' }}>
                <h3>You May Also Add</h3>
                <ul>
                  <li>Jeevan</li>
                  <li>Kirthi</li>
                  {/* Add more list items as needed */}
                </ul>
              </div>

              {/* Select element with options */}
              <div style={{ marginTop: '20px' }}>
                <h3>Select Options</h3>
                <select>
                  <option value="40">40</option>
                  <option value="30">30</option>
                  <option value="20">20</option>
                </select>
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
              Step 2
            </div>
            <FlexColumnContainer width="100%">
              <h2>Your DAF Overview</h2>
              <CDBInput color="secondary" label="State" placeholder="Enter or edit your data" />
              <CDBInput color="secondary" label="District" placeholder="Enter or edit your data" />
              <CDBInput color="secondary" label="Stream" placeholder="Enter or edit your data" />
              <CDBInput
                color="secondary"
                label="Optional Subject"
                placeholder="Enter or edit your data"
              />

              <h2>Personal Interests</h2>
              <CDBInput color="secondary" label="Prizes" placeholder="Enter or edit your data" />
              <CDBInput color="secondary" label="Sports" placeholder="Enter or edit your data" />
              <CDBInput
                color="secondary"
                label="Leadership Position"
                placeholder="Enter or edit your data"
              />
              <CDBInput
                color="secondary"
                label="Extracurricular Activities"
                placeholder="Enter or edit your data"
              />

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
              Step 1
            </div>
            <FlexColumnContainer width="100%">
              <CDBInput
                color="secondary"
                type="file"
                label="Upload a File"
                onChange={handleFileUpload}
              />
              <p>(OR)</p>
              <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-around' }}>
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