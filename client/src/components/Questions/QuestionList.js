import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchQuestions, answerQuestion } from '../../actions/questions'

class QuestionList extends Component {
  componentDidMount() {
    this.props.fetchQuestions()
  }

  render() {
    return (
      <div className='question-list'>
        <h3>Recently Added</h3>
        {this.props.questions.map(question => (
          <div className='card' key={question.question_id}>
            <div className='card-body'>
              <h5 className='card-title'>{question.text}</h5>
              <div className='card-body'>
                <button className='btn btn-success' style={{ marginRight: 10 }} onClick={
                  this.props.answerQuestion({
                    question: question.question_id,
                    answer: true
                  })
                }>Yes</button>
                <button className='btn btn-danger' onClick={
                  this.props.answerQuestion({
                    question: question.question_id,
                    answer: false
                  })
                }>No</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

const mapStateToProps = ({ questions }) => ({
  questions: questions.all
})

const mapDispatchToProps = {
  fetchQuestions,
  answerQuestion
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionList)
