import React, { useState } from 'react';
import './QuestionContainer.css';

const QuestionContainer = () => {
  const [firstQuestionAnswer, setFirstQuestionAnswer] = useState(null);
  const [secondQuestionAnswer, setSecondQuestionAnswer] = useState(null);
  const [thirdQuestionAnswer, setThirdQuestionAnswer] = useState(null);
  const [selectedTags, setSelectedTags] = useState([]);

  const handleFirstQuestion = (answer) => {
    setFirstQuestionAnswer(answer);
  };

  const handleSecondQuestion = (answer) => {
    setSecondQuestionAnswer(answer);
  };

  const handleThirdQuestion = (answer) => {
    setThirdQuestionAnswer(answer);
  };

  const handleTagSelection = (tag) => {
    if (!selectedTags.includes(tag)) {
      setSelectedTags([...selectedTags, tag]);
    } else {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    }
  };

  return (
    <div className='question-container-tag-div'>
      <div className='question-container-div'>
        <p>Première question : Est-ce que vous aimez les films droles ?</p>
        <button onClick={() => handleFirstQuestion('oui')}>Oui</button>
        <button onClick={() => handleFirstQuestion('non')}>Non</button>
        <p>Deuxième question : Est-ce que vous aimez les chiens ?</p>
        <button onClick={() => handleSecondQuestion('oui')}>Oui</button>
        <button onClick={() => handleSecondQuestion('non')}>Non</button>
        <p>Troisième question : Est-ce que vous aimez les oiseaux ?</p>
        <button onClick={() => handleThirdQuestion('oui')}>Oui</button>
        <button onClick={() => handleThirdQuestion('non')}>Non</button>
      </div>
      <div className='tag-container-div'>
        <p>Quels sont vos tags préférés ?</p>
        <div>
          <input
            type='checkbox'
            id='tag1'
            onChange={() => handleTagSelection('tag1')}
          />
          <label htmlFor='tag1'>Tag 1</label>
        </div>
        <div>
          <input
            type='checkbox'
            id='tag2'
            onChange={() => handleTagSelection('tag2')}
          />
          <label htmlFor='tag2'>Tag 2</label>
        </div>
        <div>
          <input
            type='checkbox'
            id='tag3'
            onChange={() => handleTagSelection('tag3')}
          />
          <label htmlFor='tag3'>Tag 3</label>
        </div>
        <div>
          <input
            type='checkbox'
            id='tag4'
            onChange={() => handleTagSelection('tag4')}
          />
          <label htmlFor='tag4'>Tag 4</label>
        </div>
        <div>
          <input
            type='checkbox'
            id='tag5'
            onChange={() => handleTagSelection('tag5')}
          />
          <label htmlFor='tag5'>Tag 5</label>
        </div>
      </div>
    </div>
  );
};

export default QuestionContainer;
