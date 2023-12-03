import React, { useState} from 'react';

const CustomButton = () => {
  const [warnMessage, setWarnMessage] = useState('');
  const [isWarned, setIsWarned] = useState(false);
  const [hintVisible, setHintVisible] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);


  const toggleWarnButton = () => {
    if (isWarned) {
      setIsWarned(false);
      setWarnMessage('');
    } else {
      setIsWarned(true);
      setWarnMessage('It is a warning message!');
    }
  };
  const handleClick = () => {
    setButtonClicked(prevState => !prevState);
  };
  const handleWarnButtonClick = () => {
    toggleWarnButton();
  };

  const handleHintMouseOver = () => {
    setHintVisible(true);
  };

  const handleHintMouseOut = () => {
    setHintVisible(false);
  };

  return (
    <div className="custom-button-container">
    <button
        className="normal-button"
        onClick={handleClick}
      >
        Button
      </button>
      {buttonClicked && <p className="click-message">Hi there, nice to meet you!</p>}
      <button
        className={isWarned ? 'warn-button active' : 'warn-button'}
        onClick={handleWarnButtonClick}
      >
        Warning
      </button>
      {warnMessage && <p className="warn-message">{warnMessage}</p>}
      <button
        className="hint-button"
        onMouseOver={handleHintMouseOver}
        onMouseOut={handleHintMouseOut}
      >
        Hint
      </button>
      {hintVisible && (
        <p className="hint-message">It is a hint message*</p>
      )}
    </div>
  );
};

export default CustomButton;
