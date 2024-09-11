// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Add your functions below:
const validateCred = cardNumber => {
    let newCardNumber = [...cardNumber]
    let sum = 0;
    let isSecond = false;
    for(let  i = newCardNumber.length-1; i >= 0; i--){
      if(isSecond){
        newCardNumber[i] *= 2;
        if(newCardNumber[i] > 9){
          newCardNumber[i] -= 9;
        }
      }
      sum += newCardNumber[i];
      isSecond = !isSecond;
    }
    return sum % 10 == 0;
};

const findInvalidCards = cards => {
    const invalid = [];
  
    for (let i = 0; i < cards.length; i++) {
      let currCred = cards[i];
      if (!validateCred(currCred)) {
        invalid.push(currCred);
      }
    }
    return invalid;
};
  

const idInvalidCompanies = invalidArray => {
    const companies = [];
    for(let i = 0; i < invalidArray.length; i++){
      switch(invalidArray[i][0]){
        case 3 : 
        if(!companies.includes("Amex (American Express)")){
          companies.push("Amex (American Express)")
        }
        break;
        case 4 : 
        if(companies.indexOf("Visa") === -1){
          companies.push("Visa");
        }
        break;
        case 5 :
        if(companies.indexOf("Mastercard") === -1){
          companies.push("Mastercard");
        }
        break;
        case 6 :
        if(companies.indexOf("Discover")=== -1){
          companies.push("Discover");
        }
        break;
        default:
        console.log("Company not found")
      }
    }
    return companies;
};

const creditArrays = creditCard => {
    const number = creditCard.toString();
    const digits = number.replace(/\D/g,"").split("").map(Number);
    return digits;
};

const generateValidCardNumber = baseNumber => {
    let digits = creditArrays(baseNumber);
    // Apply the Luhn algorithm to calculate the check digit
    let sum = 0;
    let isSecond = false;
    for (let i = digits.length - 1;i>=0; i--) {
        let digit = digits[i];
        if (isSecond) {
            digit *= 2;
            if (digit > 9) digit -= 9;
        }
        sum += digit;
        isSecond = !isSecond;
    }

    // Calculate the check digit
    let checkDigit = (10 - (sum % 10)) % 10;

    // Append the check digit to the base number
    return baseNumber + ',' + checkDigit;
};

console.log(validateCred(invalid1));
console.log(validateCred(valid1));

console.log(findInvalidCards(batch));

let invalidNumbers = findInvalidCards(batch);
console.log(idInvalidCompanies(invalidNumbers));

console.log(creditArrays(4716646279170861));

console.log(generateValidCardNumber(invalid1));
