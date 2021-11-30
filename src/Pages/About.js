import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutForm from '../Components/About/AboutForm';
import ContactUs from '../Components/About/ContactUs';
import Header from '../Components/About/Header';
import '/Users/fauziahibrahim/FAST-1/src/Components/About/styleAbout.css';

class About extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="col-md-6 offset-md-3">
          <Header/>
          <ContactUs/>
          <br></br>
          <AboutForm/>
        </div>
      </div>

    );
    }}
ReactDOM.render(
    <About/>,
  document.getElementById('root'));
  export default About;
  
