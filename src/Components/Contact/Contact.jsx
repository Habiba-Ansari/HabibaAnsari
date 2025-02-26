import React from 'react'
import './Contact.css'
import c1 from '../../assets/c1.png'
import c2 from '../../assets/c2.png'
import c3 from '../../assets/c3.png'

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "e2697dfc-1cfa-443a-9374-4b7f193ddea3");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
      
      <div className='contact-col'>
        <h3>Send me a message</h3>
        <p>Feel free to reach out to me for any queries, assistance, or collaboration. I'm here to help and would love to hear from you!</p>
        <ul>
          <li><img src={c1} alt="" />ansarihabiba@gmail.com</li>
          <li><img src={c2} alt="" />+91 8591870319</li>
          <li><img src={c3} alt="" />habiba_j_ansari</li>
        </ul>
        </div>
      <div className='contact-col'>
        <form onSubmit={onSubmit}>
          <lable>Your Name</lable>
          <input type='text' name='name' placeholder='Enter your name' required/>
          <lable>Your Phone Number</lable>
          <input type='tel' name='phone' placeholder='Enter your number' required/>
          <lable>Your Message</lable>
          <textarea type='text' name='message' placeholder='Enter your Message' rows={6} required></textarea>
          <button type="submit" className='btn'>Submit Now</button><br />
          <span>{result}</span>
        </form>
      </div>
    </div>
  )
}

export default Contact
