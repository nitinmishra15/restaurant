// import React, {  useEffect , useState } from 'react';
// import { Link, useNavigate } from "react-router-dom";
// import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

// const Success = () => {
//   const [countdown, setCountdown]= useState(10);
//   const navigate = useNavigate();

//   useEffect(() =>{
//     const timeoutId = setInternal (()=>{
//       setCountdown((preCount)=>{
//         if(preCount === 1){
//           clearInterval(timeoutId);
//           navigate("/");

//         }
//         return preCount -1;
//       });
//     }, 1000);
//     return ()=> clearInterval(timeoutId);
//   }, [navigate]);

//   return(
//    <>
//   <section className="notFound">
//     <div className="container">
//       <img src="/sandwich.png" alt="success"/>
//       <h1>Redirecting to Home in {countdown} seconds...</h1>
//       <Link to ={'/'}> 
//       Back to Home <HiOutlineArrowNarrowRight/> </Link>
//     </div>
//   </section>
//   </>
//   );
// };



import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

const Success = () => {
  const [countdown, setCountdown] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    // Initialize the countdown interval
    const intervalId = setInterval(() => {
      setCountdown((prevCount) => {
        // Check if countdown reaches 1
        if (prevCount === 1) {
          clearInterval(intervalId);
          // Only navigate when countdown is 1
          navigate("/");
        }
        return prevCount - 1;
      });
    }, 1000);
    
    // Cleanup function to clear the interval
    return () => clearInterval(intervalId);
  }, [navigate]);

  return (
    <>
      <section className="notFound">
        <div className="container">
          <img src="/sandwich.png" alt="success" />
          <h1>Redirecting to Home in {countdown} seconds...</h1>
          <Link to="/">
            Back to Home <HiOutlineArrowNarrowRight />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Success;

