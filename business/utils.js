function isValidCandidate( candidate ) {
  const errors = [];

  //if no name property on candidate object
  if (!candidate.name) {
    //string has to match utils.test.js
    errors.push(`missing the candidate name`)
  }
  else if (candidate.name.length < 2) {
    errors.push(`the candidate name must be at least 2 characters`);
  }

  if(errors.length) {
    return errors;
  }
  return true;
}

function isValidPassword( pw ) {
  /* 
    require password to have (using positive look-ahead):
    • number       /d
    • lower case   [a-z]
    • upper case   [A-Z]
    • special char [ !"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~]
    • at least 8 characters
  */

    //specify length for password
    //^.{8,}*$ - start of line, any characters, with the length of 8 (no maximum length), any number of times, until the end of the line
    //length of pw doenst matter bcos hash is same length and that's what's being stored in DB
    // return /^.{8,}*$/.test(pw);

    //adding in condition to look for at least 1 numeric number
    //using (?=.*) positive look ahead (?=.*\d), find a digit (\d)
    //.* to match any character then the range
    // return /^(?=.*\d).{8,}$/.test(pw);

    //lower case, upper case, special characters 
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[ !"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~]).{8,}$/.test(pw);
}

export { 
  isValidCandidate,
  isValidPassword
}
