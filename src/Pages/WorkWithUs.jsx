import React, { useState } from 'react';
import Navbar from '../Components/Navbar'

function WorkWithUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobileNo: '',
    skills: '',
    location: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    fetch('https://kstraining-server.vercel.app/api/trainer/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        // Handle success, e.g., show a success message to the user
        alert('Form submitted successfully!');
        // Reset the form
        document.getElementById('myForm').reset();
      })
      .catch((error) => {
        console.error('Error:', error);
        // Handle error, e.g., show an error message to the user
      });
  };
  return (
  <>
  <Navbar/>
    <div className='workwithus'>
    <h1>Work With Us</h1>


    </div>
    <div className='berainer'>
        <h2>Become a Trainer</h2>
        <br/>
        <p>If you have expertise in any technology, looking for a platform on which to share your knowledge and have the passion to work with us, then SS JOB SUPPORT is the right place for you. We are associated with more than 100+ trainers and they are supporting our students on a regular basis.</p>
    </div>
    <br/>
    <br/>
    <br/>
    <div className='inpt-section'>
      <div className='inpt'>
        <label>Your Name</label>
        <input name='name' placeholder='Your Name' onChange={handleChange} />
        <br />
        <br />
        <label>Your Email</label>
        <input name='email' placeholder='Your Email' onChange={handleChange} />
        <br />
        <br />
        <label>Phone Number</label>
        <input name='mobileNo' placeholder='Phone Number' type='number' onChange={handleChange} />
        <br />
        <br />
        <label>Your Skills</label>
        <input name='skills' placeholder='Your Skills' onChange={handleChange} />
        <br />
        <br />
        <label>Your Location</label>
        <input name='location' placeholder='Your Location' onChange={handleChange} />
        <br />
        <br />
        <label>Your Message</label>
        <textarea name='message' rows='4' cols='50' onChange={handleChange}></textarea>
        <br />
        <br />
        <button onClick={handleSubmit}>Send</button>
      </div>
    </div>

    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <footer>
    <div className='footer-top'>
    <div className='f1'>
    <div className="logo">
            <p>logo</p>

          
          </div>
          <br/>
    <h3>Mission</h3>
    <br/>
    <p>We are a social enterprise on a mission to accelerate the regeneration of nature. We enable companies to gift trees that are brought back in the heart of Africa. Easily, at scale, and with an epic customizable gifting experience.</p>
    <br/>
    <h4>Sign up for Our Newsletter</h4>
    <br/>
   <div className='footerinput'> <input placeholder='Enter your email' /><button>Sign Up</button></div>

    </div>
    <div className='f2'>
      <ul>Pages
        <li>Plateform</li>
        <li>Solution</li>
        <li>Resources</li>
        <li>Our Customers</li>
        <li>Event</li>

      </ul>
    </div>
    <div className='f3'>
      <h5>Registration for sponsorship & collaboration</h5>
    <br/>  <button>REGISTER</button>
    <br/> 
    <br/> 
      <h3>Contact Info</h3>
      <br/> 
      <h2>+4863154859</h2>
    </div>



    </div>
    <div className='footer-bottom'>
    <ul>
      <li>Terms and condition</li>
      <li>Privacy policy</li>
      <li>All rights reserved gethire.ai..</li>

    </ul>


    </div>

    </footer>
  </>
  )
}

export default WorkWithUs