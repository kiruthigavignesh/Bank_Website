

import React, { useState } from 'react';

const CardDetailsForm = () => {
  const [username, setUsername] = useState('');
  const [cardNum, setCardNum] = useState('');
  const [cardMm, setCardMm] = useState('');
  const [cardYy, setCardYy] = useState('');
  const [cardCvc, setCardCvc] = useState('');
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState({});


  const handleInputChange = (e, setter) => {
    setter(e.target.value);
  };

  const displayFormattedCardNumber = (cardNumber) => {
    return cardNumber.replace(/(\d{4})/g, '$1 ');
  };
  const liveUpinfo = (input, regex, maxLength, display1) => {
    input.addEventListener('input', function () {
      const value = input.value.trim();

      input.classList.remove('success', 'error');
      setSuccess(input);

      if (value.length === 0) {
        setError(input, 'Field is empty');
      }

      if (!regex.test(value)) {
        setError(input, 'Only specific characters are allowed');
      }

      if (value.length > maxLength) {
        setError(input, `Maximum ${maxLength} characters allowed`);
      }

      if (value.length > 0 && regex.test(value) && value.length <= maxLength) {
        setSuccess(input);
        if (display1 === 'card_num') {
          setCardNum(value.replace(/(\d{4})/g, '$1 '));
        } else {
          setErrors((prevErrors) => ({ ...prevErrors, [display1]: '' }));
        }
      }
    });
  };

  const setError = (element, message) => {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');
    inputGroup.classList.add('error1');
    inputGroup.classList.remove('success');
    errorElement.innerText = message;
    setErrors((prevErrors) => ({ ...prevErrors, [element.name]: message }));
  };

  

  const validateInputs = () => {
    const newErrors = {};

    if (username.trim() === '') {
      newErrors.username = 'Cardholder name is empty';
    }

    if (!/^[0-9]+$/.test(cardNum)) {
      newErrors.cardNum = 'Only numbers are allowed for Card number';
    } else if (cardNum.length > 16) {
      newErrors.cardNum = 'Only 16 numbers are allowed for Card number';
    }

    if (!/^[0-9]+$/.test(cardMm)) {
      newErrors.cardMm = 'Only numbers are allowed for Month';
    }

    if (!/^[0-9]+$/.test(cardYy)) {
      newErrors.cardYy = 'Only numbers are allowed for Year';
    }

    if (!/^[0-9]+$/.test(cardCvc)) {
      newErrors.cardCvc = 'Only numbers are allowed for CVC';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setSuccess(false);
    } else {
      setErrors({});
      setSuccess(true);
      document.querySelector('.compsub').style = `display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 20px;
        `;
      document.querySelector('.detail').style.display = 'none';
    }
  };


  const handleSubmit = (e) => {
    validateInputs();

    e.preventDefault();
    // Validate inputs here and submit if valid
    // For simplicity, we are not implementing validation in this example.
  };

  return (
    <div className="container">
      <div className="col_1">
        <div className="f_card">
          <img src="card-logo.svg" alt="" />
          <p id="card_num">{displayFormattedCardNumber(cardNum)}</p>
          <div className="col_1sub">
            <p id="card_name">{username.toUpperCase()}</p>
            <p id="card_ex">
              <span id="card_mm">{cardMm}</span>/
              <span id="card_yy">{cardYy}</span>
            </p>
          </div>
        </div>
        <div className="b_card">
          <p id="card_cvc">{cardCvc}</p>
        </div>
      </div>
      <div className="col_2">
        <div className="compsub">
          <img src="icon-complete.png" alt="" />
          <b>Thank you!</b>
          <p>We've added your card details</p>
          <input type="button" value="Continue" id="conBtn" />
        </div>
        <div className="detail">
          <form className="main_form" onSubmit={handleSubmit}>
            <div className={`input-group ${errors.username ? 'error1' : ''}`}>
              <label htmlFor="username">CARDHOLDER NAME</label>
              <input
                type="text"
                value={username}
                onChange={(e) => handleInputChange(e, setUsername)}
                name="username"
                id="username"
                placeholder="e.g. Kiruthiga"
                autoComplete="username"
              />
              <div className="error"></div>
            </div>
            <div className={`input-group ${errors.cardNum ? 'error1' : ''}`}>
              <label htmlFor="card_num">CARD NUMBER</label>
              <input
                type="text"
                value={cardNum}
                onChange={(e) => handleInputChange(e, setCardNum)}
                name="card_num"
                id="card_nu"
                placeholder="e.g. 1234 5678 9123 0000"
                autoComplete="card_num"
              />
              <div className="error"></div>
            </div>
            <div className="cvc">
              <div className="cvc1">
                <div id="dop">
                  <div className="input-group dop">
                    <label htmlFor="cardMm">EXP. DATE (MM)</label>
                    <input
                      type="text"
                      value={cardMm}
                      onChange={(e) => handleInputChange(e, setCardMm)}
                      id="cardMm"
                      name="cardMm"
                      placeholder="MM"
                      autoComplete="cardMm"
                    />
                    <div className="error"></div>
                  </div>
                </div>
                <div className="input-group">
                  <label htmlFor="cardMm">(YY)</label>
                  <input
                    type="text"
                    value={cardYy}
                    onChange={(e) => handleInputChange(e, setCardYy)}
                    id="cardYy"
                    name="cardYy"
                    placeholder="YY"
                    autoComplete="cardYy"
                  />
                  <div className="error"></div>
                </div>
              </div>
              <div className="cvc2">
                <div className="input-group">
                  <label htmlFor="cardCvc">CVC</label>
                  <input
                    type="text"
                    value={cardCvc}
                    onChange={(e) => handleInputChange(e, setCardCvc)}
                    name="cardCvc"
                    id="cardCvc"
                    placeholder=" e.g. 123"
                    autoComplete="cardCvc"
                  />
                  <div className="error"></div>
                </div>
              </div>
            </div>
            <button id="conBtn" type="submit">
              Register Here
            </button>
          </form>
          
        </div>
      </div>
    </div>
  );
};

export default CardDetailsForm;
