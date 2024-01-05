import { Component,useState} from 'react';
import axios from 'axios';
import ReactPlayer from 'react-player'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import './index.css'
import { toBePartiallyChecked } from '@testing-library/jest-dom/matchers';

class MockInterview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
    };
  }

  handleFileChange = async (event) => {
    try {
      let file = event.target.files[0];
      if (file) {
        const form = new FormData();

        form.append("daf_file", file);
        // setLoadingDAFUpload(true);
        let response = await axios.post(
          "https://collectorbabu.com/api/interview/daf_upload",
          form,
          {
            params: {
              user_id: "659662fb004103e6fd40aac4",
            },
            headers: {
              accept: "application/json",
              token: "87957bdf-8fb3-4afc-a5c7-4ad62f785a60",
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log(response.data)

        let mockQuestionsPayload = "";
        for (let key in response.data) {
          if (typeof response.data[key] === "object") {
            for (let subData in response.data[key]) {
            //   mockQuestionsPayload += response.data[key][subData] + " ";
            }
          } else {
            // mockQuestionsPayload += response.data[key] + " ";
          }
        }

        // mockQuestionsPayload = mockQuestionsPayload.trim();

        let sortedTableData = {};

        for (let data of orderOfTableData) {
          sortedTableData[data] = response.data[data];
        }

        // setDafOverviewData(sortedTableData);
        // setActiveStep(1);
        // setDafUploadError(false);
        // setLoadingDAFUpload(false);
      }
    } catch (error) {
        console.log(error)
    //   setLoadingDAFUpload(false);
    //   setDafUploadError(true);
    }
  };

  handleUpload = async () => {
    try {
      const { selectedFile } = this.state;

      if (selectedFile) {
        const formData = new FormData();
        formData.append('daf_file', selectedFile);

        await axios.post('https://collectorbabu.com/api/interview/daf_upload', formData, {
          params: {
            user_id: loggedInUserDetails.user_id,
          },
          headers: {
            accept: 'application/json',
            token: '87957bdf-8fb3-4afc-a5c7-4ad62f785a60',
            'Content-Type': 'multipart/form-data',
          },
        });

        // Add any additional logic here based on the API response

        console.log('File uploaded successfully');
      } else {
        console.log('No file selected');
      }
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };




  render() {

    const TopicsList = () => {
      const topics = ['Situational', 'Current Affairs','jeevan','kirthi'];
      const [selectedTopics, setSelectedTopics] = useState([]);
    
      const handleToggleTopic = (topic) => {
        if (selectedTopics.includes(topic)) {
          setSelectedTopics(selectedTopics.filter((selectedTopic) => selectedTopic !== topic));
        } else {
          setSelectedTopics([...selectedTopics, topic]);
        }
      };
    
      return (
        <ul className='list-container'>
          {topics.map((topic) => (
            <li key={topic} className={`list-item ${selectedTopics.includes(topic) ? 'selected' : ''}`}>
              <span>{topic}</span>
              <button onClick={() => handleToggleTopic(topic)}>
                {selectedTopics.includes(topic) ? <FaCheckCircle /> : <FaTimesCircle />}
              </button>
            </li>
          ))}
        </ul>
      );
    };


    const renderDafModel: React.FC = () => (
      <div>
      <div className="header">
      <h1 className='black'>A Bit About Your Self</h1>
      </div>
      <div className="content">
      <label htmlFor="fileInput" className="custom-upload-label">
    Upload your DAF:
    <input type="file" id="fileInput" className='daf-input' />
  </label>
  <h1>Or fill the details manually</h1>
  <form className='form-container'>
  <div className="input-container">
<label htmlFor="state" className="label-style">State:</label>
<input
  type="text"
  id="state"
  className="input-style"
  name="state"
  placeholder="Edit or enter your data"
  // value={formData.state}
  // onChange={handleChange}
  required
/><br />
</div>

{/* District Input */}
<div className="input-container">
<label htmlFor="district" className="label-style">District:</label>
<input
  type="text"
  id="district"
  name="district"
  className="input-style"
  placeholder="Edit or enter your data"
  // value={formData.district}
  // onChange={handleChange}
  required
/><br />
</div>

{/* Stream Input */}
<div className="input-container">
<label htmlFor="stream" className="label-style">Stream:</label>
<input
  type="text"
  id="stream"
  name="stream"
  className="input-style"
  placeholder="Edit or enter your data"
  // value={formData.stream}
  // onChange={handleChange}
  required
/><br />
</div>

{/* Optional Subject Input */}
<div className="input-container">
<label htmlFor="optionalSubject" className="label-style">Optional Subject:</label>
<input
  type="text"
  id="optionalSubject"
  name="optionalSubject"
  className="input-style"
  placeholder="Edit or enter your data"
  // value={formData.optionalSubject}
  // onChange={handleChange}
  required
/><br />
</div>

{/* Personal Interests Section */}
<h2>Personal Interests</h2>

{/* Prizes Input */}
<div className="input-container">
<label htmlFor="prizes" className="label-style">Prizes:</label>
<input
  type="text"
  id="prizes"
  name="prizes"
  className="input-style"
  placeholder="Edit or enter your data"
  // value={formData.prizes}
  // onChange={handleChange}
  required
/><br />
</div>

{/* Sports Input */}
<div className="input-container">
<label htmlFor="sports" className="label-style">Sports:</label>
<input
  type="text"
  id="sports"
  name="sports"
  className="input-style"
  placeholder="Edit or enter your data"
  // value={formData.sports}
  // onChange={handleChange}
  required
/><br />
</div>

{/* Leadership Position Input */}
<div className="input-container">
<label htmlFor="leadershipPosition" className="label-style">Leadership Position:</label>
<input
  type="text"
  id="leadershipPosition"
  name="leadershipPosition"
  className="input-style"
  placeholder="Edit or enter your data"
  // value={formData.leadershipPosition}
  // onChange={handleChange}
  required
/><br />
</div>

{/* Extracurricular Activities Input */}
<div className="input-container">
<label htmlFor="extracurricularActivities" className="label-style">Extracurricular Activities:</label>
<input
  type="text"
  id="extracurricularActivities"
  name="extracurricularActivities"
  className="input-style"
  placeholder="Edit or enter your data"
  // value={formData.extracurricularActivities}
  // onChange={handleChange}
  required
/><br />
</div>

{/* Next Button */}
<button type="submit" className="button-style">Next</button>
</form>
      </div>
      </div>
    );

    const renderTopicModel:React.FC=()=>(
<div>
  <h1 className="daf-successful">
  <IoCheckmarkDoneCircleOutline size={20}/>DAF parsing successful. Please select topics for mock below.</h1>
  <h1>Relevant topics for you</h1>
  {TopicsList()}
  <h1>You May also add</h1>
  {TopicsList()}
  <select>
  <option disabled selected>Select the number of questions</option>
  <option>40</option>
  <option>30</option>
  <option>20</option>
</select>
<button className='blue'>Previous</button>
<button className='green'>Start Mock</button>
</div>
    );

    return (

      <div className="app-container">
         <div className="mock-container">
         <div className='text-container'>
          <h1 className='mock-test green'>Get ready for interviews in minutes</h1>
          <p className='mock-test black'>Welcome to our AI-enabled audio mock interview!</p>
          <h1 className='mock-test black'>Practice Makes Perfect</h1>
          <Popup
        trigger={<button className='mock-button' type="button">Start Mock Interview</button>}
        modal
        nested
      >
        {close => (
          <div className="modal">
            <button className="close" onClick={close}>&times;</button>
           {renderDafModel()}
          </div>
        )}
      </Popup>
         </div>
         <div className='image-container'>
         <h1>Watch here how our Mock Interview works</h1>
         <ReactPlayer url='https://youtu.be/DE6eWekS_7I' />
         </div>
         </div>
      </div>
      
    );
  }
}

export default MockInterview;
