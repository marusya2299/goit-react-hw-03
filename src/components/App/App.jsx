import Description from "../Description/Description";
import Feedback from "../Feedback/Feedback";
import Options from "../Options/Options";

import { useState, useEffect } from 'react';

export default function App(){
  const [values, setValues] = useState(()=>{
    const savedValues = window.localStorage.getItem("feedback-values");
    return savedValues ? JSON.parse(savedValues) : {good: 0, neutral: 0, bad: 0};
  });

  useEffect(() => {
    window.localStorage.setItem("feedback-values", JSON.stringify(values));
  }, [values]);

  const updateFeedback = (feedbackType)=>{
    setValues(value => ({...value, [feedbackType]: value[feedbackType] + 1}));
  }

  const resetFeedback = ()=>{
    setValues({good: 0, neutral: 0, bad: 0});
  }

  if (values.good+values.neutral+values.bad === 0) {
    return(
      <>
        <Description />
        <Options flag={false} updateFeedback={updateFeedback} resetFeedback={resetFeedback} />
        <p>No feedback yet</p>
      </>
    )
  }
  else{
    return(
      <>
        <Description />
        <Options flag={true} updateFeedback={updateFeedback} resetFeedback={resetFeedback} />
        <Feedback good={values.good} neutral={values.neutral} bad={values.bad} />
      </>
    )

  }
}