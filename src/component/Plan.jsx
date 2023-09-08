import React from 'react'
import './plan.css';
//import { applyMiddleware } from 'redux';
import { useNavigate } from 'react-router-dom';
const Plan = () => {
  const navigate=useNavigate();

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
     document.body.appendChild(script);
   });
};

const begin=()=>{
  navigate("/");
}

const displayRazorpay = async (amount) =>{
  const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js")
   if(!res){
      alert("net connect kr phele")
   }
  console.log(amount);
   const options = {
    key: "rzp_test_bNADZawpeOETFm",
    currency: "INR",
    amount: amount * 100,
    name: "Learning To Code Online",
    description: "Test Wallet Transaction",
    image: "https://freepngimg.com/thumb/silver/2-2-silver-free-download-png-thumb.png",
    
    handler: function (response) {
    //  alert(response.razorpay_payment_id);
    //  alert(response.razorpay_order_id);
    //  alert(response.razorpay_signature);
    navigate("/");
  },
    prefill: {
      name: "Anirudh Jwala",
      email: "anirudh@gmail.com",
      contact: "9999999999",
    },
  };
  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
  
}


  return (
    <div className='completebox'>
      <div className="box">
         <div className="box1">
            <div className="free"><h3>Free</h3></div>
            <div className="box1-text">
                <h1><sup>$</sup>0</h1>
                <h6>GREAT FOR STARTER</h6><br />
                <p>Free Plan can post only 1 question a day</p>

            </div><br /><br />
            <button className='btn-class'  onClick={()=>{begin()}}>Get Started</button>
            <div className="info">
              <p>1question/Day can post</p>
              <p>No offers applied</p>
            </div>
         </div>


         <div className="box1">
            <div className="silver"><h3>Silver Plan</h3></div>
            <div className="box1-text">
                <h1><sup>$</sup>100</h1>
                <h6>GREAT FOR PRACTICE</h6><br />
                <p>Silver Plan can post 5 question a day </p>

            </div><br /><br />
            <button className='btn-class-silver'  onClick={()=>{displayRazorpay(100)}}>Get Started</button>
            <div className="info">
              <p>5question/Day can post</p>
              <p>Some offers applied</p>
            </div>
         </div>



         <div className="box1">
            <div className="gold"><h3>Gold Plan</h3></div>
            <div className="box1-text">
                <h1><sup>$</sup>1000</h1>
                <h6>GREAT FOR EXPERIENCE</h6><br />
                <p>Gold Plan can post only unlimited question a day</p>

            </div><br /><br />
            <button className='btn-class' onClick={()=>{displayRazorpay(1000)}}>Get Started</button>
            <div className="info">
              <p> ∞ question/Day can post</p>
              <p>Many offers applied</p>
            </div>
         </div>
      </div>
    </div>
  )
}

export default Plan
