import React, {useEffect, useState} from "react";
import './style.css';

const ResultPage = (props) => {

  const {
    countError,
    onResetTest,
    correctAnswers,
    totalQuestionsNumber,
    finishTime,
  } = props

  const [finishTest, setFinishTest] = useState(false)

  useEffect(() => {
    if (countError < 3 && finishTime !== '19:60') {
      setFinishTest(true)
    } else {
      setFinishTest(finishTest)
    }
  }, [finishTest])

  const testPassed = () => {
    return (
      <div className="result-wrapper-failed test-passed">
        <section className="result-list">
          <div className='smile-block test-passed-smile' />
          <p className="result-text">Тест пройден!</p>
          <div className='test-results-list'>
            <span className='test-results'>Время: {finishTime}</span>
            <span className='test-results'>Ответы: {correctAnswers}/{totalQuestionsNumber}</span>
            <span className='test-results error-color-text'>Ошибки: {countError}/2</span>
          </div>
          <div className='inputs-block-in-result'>
            <div className='link-to-home-wrap'>
              <a className='link-to-home' href="/">На главную</a>
              <i className='icon-to-home'/>
            </div>
            <div className='link-to-home-wrap repeat-button'>
              <div className='result-button' onClick={onResetTest}>Повторить</div>
              <i className='icon-to-repeat'></i>
            </div>
          </div>
        </section>
      </div>
    )
  }

  const testFailed = () => {
    return (
      <div className="result-wrapper-failed">
        <section className="result-list">
          <div className='smile-block' />
          <p className="result-text">Тест не пройден!</p>
          <div className='test-results-list'>
            <span className='test-results'>Время: {finishTime}</span>
            <span className='test-results'>Ответы: {correctAnswers}/{totalQuestionsNumber}</span>
            <span className='test-results error-color-text'>Ошибки: {countError}/2</span>
          </div>
          <div className='inputs-block-in-result'>
            <div className='link-to-home-wrap'>
              <a className='link-to-home' href="/">На главную</a>
              <i className='icon-to-home'/>
            </div>
            <div className='link-to-home-wrap repeat-button'>
              <div className='result-button' onClick={onResetTest}>Повторить</div>
              <i className='icon-to-repeat'></i>
            </div>
          </div>
        </section>
      </div>
    )
  }

  return (
      <div>
        {finishTest ? testPassed() : testFailed()}
      </div>
  )
}

export default ResultPage