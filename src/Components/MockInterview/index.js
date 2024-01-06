import { Component,useState} from 'react';
import * as React from 'react';
import axios from 'axios';
import ReactPlayer from 'react-player'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Stepper from '../StepperC'
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import './index.css'
import Faqs from '../Faqs';

const faqsList = [
  {
    id: 0,
    questionText: 'What is IRC?',
    answerText:
      'IRC is an Industry Ready Certification that represents your readiness for a job with the necessary skills.',
  },
  {
    id: 1,
    questionText: 'What is the medium of instruction?',
    answerText:
      'The courses would be delivered in English and Telugu. The program will be available in more vernacular languages soon.',
  },
  {
    id: 2,
    questionText:
      'Is there an EMI option to pay the fee for CCBP Tech 4.0 Intensive?',
    answerText:
      'Yes, EMI support is available for credit cards. Please select EMI option while making payment for more information.',
  },
  {
    id: 3,
    questionText: 'How will my doubts be cleared? What is the mechanism?',
    answerText:
      'You can ask your doubts in the discussions section and course mentor will answer them. You can also see the doubts asked by other students.',
  },
]

const timelineItemsList = [
  {
    id: 'c6aad2fb-7673-45cf-9606-a335acc0cf4b',
    categoryId: 'COURSE',
    title: '10 DECEMBER 2020',
    courseTitle: 'Static Website',
    description:
      'Build your own personal portfolio website and a website to host conferences and events.  Publish your website and share it with your friends, family and beyond.',
    duration: '10 days',
    tagsList: [
      {
        id: 'c31b2ad8-f766-11eb-9a03-0242ac130003',
        name: 'HTML Elements',
      },
      {
        id: 'c31b2d08-f766-11eb-9a03-0242ac130003',
        name: 'Class Attribute',
      },
      {
        id: 'c31b2dee-f766-11eb-9a03-0242ac130003',
        name: 'Text Properties',
      },
      {
        id: 'c31b2eb6-f766-11eb-9a03-0242ac130003',
        name: 'Bootstrap',
      },
      {
        id: 'c31b2f6a-f766-11eb-9a03-0242ac130003',
        name: 'Box Properties',
      },
      {
        id: 'c31b347e-f766-11eb-9a03-0242ac130003',
        name: 'Layout',
      },
      {
        id: 'c31b358c-f766-11eb-9a03-0242ac130003',
        name: 'Flexbox',
      },
    ],
  },
  {
    id: 'a19d93d6-bdac-479e-b554-974ef9e6e66c',
    categoryId: 'PROJECT',
    title: '21 DECEMBER 2020',
    projectTitle: 'Tourism Website',
    description:
      'A tourism website enables the user to browse through the images of popular destinations.',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/projects-s4-img.png',
    duration: '1 hr',
    projectUrl: 'https://tourismapp.ccbp.tech/',
  },
  {
    id: '40b82899-fdf7-4a3e-a43a-41a9917b4582',
    categoryId: 'COURSE',
    title: '5 JANUARY 2021',
    courseTitle: 'Responsive Website',
    description:
      'Build a responsive website that appears beautifully on the screen of any size. Develop a personal portfolio website, an E-commerce product listing website and a website to host conferences and events.',
    duration: '12 days',
    tagsList: [
      {
        id: '551e2b7e-f767-11eb-9a03-0242ac130003',
        name: 'Responsive Web Design',
      },
      {
        id: '551e2de0-f767-11eb-9a03-0242ac130003',
        name: 'Multiple Layouts',
      },
      {
        id: '551e3114-f767-11eb-9a03-0242ac130003',
        name: 'Column Wrapping',
      },
      {
        id: '551e31e6-f767-11eb-9a03-0242ac130003',
        name: 'Navbar',
      },
      {
        id: '551e32a4-f767-11eb-9a03-0242ac130003',
        name: 'Designing Layouts',
      },
      {
        id: '551e334e-f767-11eb-9a03-0242ac130003',
        name: 'Inheritance',
      },
      {
        id: '551e3402-f767-11eb-9a03-0242ac130003',
        name: 'CSS Gradients',
      },
    ],
  },
  {
    id: 'ae2ede68-af77-427c-817c-0ce4beeb69c7',
    categoryId: 'PROJECT',
    title: '7 JANUARY 2021',
    projectTitle: 'Food Munch',
    description: 'Food Much Website is a user-centric food tech website.',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/projects-r2-img.png',
    duration: '2 hrs',
    projectUrl: 'https://fm.ccbp.tech/',
  },
  {
    id: '4938c3d1-81cd-4729-9d2c-dcd50796aa4d',
    categoryId: 'COURSE',
    title: '30 JANUARY 2021',
    courseTitle: 'Dynamic Website',
    description:
      'Learn the fundamental concepts in JavaScript and apply them to build dynamic and interactive web applications like Counter, Guessing Game, Chat Web app, E-commerce web app, etc.',
    duration: '20 days',
    tagsList: [
      {
        id: 'd4743c06-f767-11eb-9a03-0242ac130003',
        name: 'Declaring Variables',
      },
      {
        id: 'd4743ecc-f767-11eb-9a03-0242ac130003',
        name: 'Comparison Operator',
      },
      {
        id: 'd4743fe4-f767-11eb-9a03-0242ac130003',
        name: 'Functions',
      },
      {
        id: 'd47440d4-f767-11eb-9a03-0242ac130003',
        name: 'Object',
      },
      {
        id: 'd474434a-f767-11eb-9a03-0242ac130003',
        name: 'DOM Manipulations',
      },
      {
        id: 'd474443a-f767-11eb-9a03-0242ac130003',
        name: 'Loops',
      },
      {
        id: 'd4744516-f767-11eb-9a03-0242ac130003',
        name: 'Local Storage',
      },
    ],
  },
  {
    id: 'd6c4b3a5-7b1d-4906-aca8-823f44129004',
    categoryId: 'PROJECT',
    title: '6 FEBRUARY 2021',
    projectTitle: 'Todos Application',
    description:
      'This app helps users to track the day to day tasks. Users can create, edit, track the status of each todo item and able to persist them over page reloads.',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png',
    duration: '3 hrs',
    projectUrl: 'https://todossapp.ccbp.tech/',
  },
  {
    id: '0a35abbe-22ca-40a1-81da-613f656b7702',
    categoryId: 'PROJECT',
    title: '15 FEBRUARY 2021',
    projectTitle: 'Wikipedia Search Application',
    description:
      'Using this Wikipedia Search Application users can search and view curated results and can see detailed explanations in Wikipedia by clicking on the specific result.',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/wiki-logo-img.png',
    duration: '4 hrs',
    projectUrl: 'https://wikiseaarch.ccbp.tech/',
  },
  {
    id: 'd80781c3-980e-4ab9-96ca-9ad1a9cdf93d',
    categoryId: 'COURSE',
    title: '15 MARCH 2021',
    courseTitle: 'RWD using Flexbox',
    description:
      'Learn to develop responsive layouts using CSS Flexbox and CSS Media Queries.',
    duration: '7 days',
    tagsList: [
      {
        id: '34e6b208-f768-11eb-9a03-0242ac130003',
        name: 'Sizing Elements',
      },
      {
        id: '34e6b460-f768-11eb-9a03-0242ac130003',
        name: 'Flexbox Layout',
      },
      {
        id: '34e6b76c-f768-11eb-9a03-0242ac130003',
        name: 'Min & Max sizes',
      },
      {
        id: '34e6b83e-f768-11eb-9a03-0242ac130003',
        name: 'Media Query Syntax',
      },
      {
        id: '34e6b8fc-f768-11eb-9a03-0242ac130003',
        name: 'Logical Operators',
      },
      {
        id: '34e6ba28-f768-11eb-9a03-0242ac130003',
        name: 'CSS box-sizing property',
      },
      {
        id: '34e6baf0-f768-11eb-9a03-0242ac130003',
        name: 'Media Features',
      },
    ],
  },
  {
    id: '7bc3f006-f0f1-4574-924b-17c480556727',
    categoryId: 'PROJECT',
    title: '20 MARCH 2021',
    projectTitle: 'Move Messenger',
    description:
      'The landing page of Move Messenger gives you a brief intro of Move Messenger. The landing page is responsive enabling to view it across various devices.',
    imageUrl:
      'https://assets.ccbp.in/frontend/intermediate-rwd/move-messenger-img.png',
    duration: '5 hr',
    projectUrl: 'https://movemessengers.ccbp.tech/',
  },
  {
    id: 'e681e826-260c-4540-9ee5-f53d0e6ecba0',
    categoryId: 'COURSE',
    title: '30 APRIL 2021',
    courseTitle: 'React JS - Getting Started',
    description:
      'Learn how to build dynamic web applications with the React JS library. When you finish this course, you will be comfortable in creating a modern, clean, and maintainable application in React JS, from scratch.',
    duration: '18 days',
    tagsList: [
      {
        id: '94947ad2-f768-11eb-9a03-0242ac130003',
        name: 'Components',
      },
      {
        id: '94947d52-f768-11eb-9a03-0242ac130003',
        name: 'Lists',
      },
      {
        id: '94947e4c-f768-11eb-9a03-0242ac130003',
        name: 'Conditional Rendering',
      },
      {
        id: '94947f14-f768-11eb-9a03-0242ac130003',
        name: 'setState()',
      },
      {
        id: '94948270-f768-11eb-9a03-0242ac130003',
        name: 'Updating Phase',
      },
      {
        id: '94948342-f768-11eb-9a03-0242ac130003',
        name: 'Routing',
      },
      {
        id: '94948400-f768-11eb-9a03-0242ac130003',
        name: 'API Calls',
      },
    ],
  },
  {
    id: 'e093c08a-a2ae-413a-814b-e7c83f5f2ac3',
    categoryId: 'PROJECT',
    title: '26 MAY 2021',
    projectTitle: 'Nxt Trendz',
    description:
      'Nxt Trendz application is an E-commerce application like Amazon, Flipkart where users can log in and see the list of products with search, filters, sort by, etc.',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/nxt-trendz-img.png',
    duration: '6 hrs',
    projectUrl: 'https://nxtz.ccbp.tech/',
  },
]

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
          <p className='welcome-text'>Welcome to our AI-enabled audio mock interview!</p>
         <div className="mock-container">
         <div className='text-container'>
          <h1 className='mock-test green'>Get ready for interviews in minutes</h1>
          <h1 className='practice-text'>Practice Makes Perfect</h1>
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
         <h1 className="watch-text">Watch here how our Mock Interview works</h1>
         <ReactPlayer url='https://youtu.be/DE6eWekS_7I' />
         </div>
         </div>
         <div className='stepper-container'>
         <Stepper/>
         </div>
          <div className='faq-container'>
         <Faqs faqsList={faqsList} />
</div>
<div>
{/* <TimelineView timelineItemsList={timelineItemsList} /> */}
</div>
      </div>
      
    );
  }
}

export default MockInterview;
