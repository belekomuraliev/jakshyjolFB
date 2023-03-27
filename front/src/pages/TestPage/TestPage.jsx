import React, {useState} from 'react';
import DrivingTestModule from "../../modules/driving-test/TestingWindow";
import CountDown from "../../components/timer";
import ResultPage from "../ResultPage/ResultPage";

const TestPage = () => {
  const [timerInfo, setTimerInfo] = useState({
    isOver: false,
    finishTime: ''
  })
  const [resultInfo, setResultInfo] = useState({
    errors: 0,
    correctAnswers: 0,
    totalQuestionsNumbers: 0
  })

  const [isFinishedTest, setIsFinishedTest] = useState(false)

  const handleGetTimerInfo = (info) => {
    setTimerInfo(info)
  }
  const handleFinishTest = (resultInfo) => {
    setResultInfo(resultInfo)
    setIsFinishedTest(true)
  }
  const handleChangeTest = (resultInfo) => {
    setResultInfo(resultInfo)
  }
  const handleResetTest = () => {
    setIsFinishedTest(false)
    setTimerInfo({
      isOver: false,
      finishTime: ''
    })
    setResultInfo({
      errors: 0,
      correctAnswers: 0,
      totalQuestionsNumbers: 0
    })
  }

  return (
    <>
      {timerInfo.isOver ? (
        <ResultPage
          onResetTest={handleResetTest}
          countError={resultInfo.errors}
          correctAnswers={resultInfo.correctAnswers}
          totalQuestionsNumber={resultInfo.totalQuestionsNumbers}
          finishTime={timerInfo.finishTime}
          timerInfo={timerInfo}
        />
      ) : (
        <>
          <CountDown isOver={isFinishedTest} getTimerInfo={handleGetTimerInfo}/>
          <DrivingTestModule onChangeTest={handleChangeTest} onFinishTest={handleFinishTest}/>
        </>
        )}
    </>
  );
};

export default TestPage;