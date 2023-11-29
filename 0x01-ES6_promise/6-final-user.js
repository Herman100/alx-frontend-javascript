/* eslint-disable */

import signUpUser from "./4-user-promise";
import uploadPhoto from "./5-photo-reject";

function handleProfileSignup(firstName, lastName, fileName) {
  const resultArray = [];

  const user = signUpUser(firstName, lastName);
  resultArray.push({ status: "fulfilled", value: user });

  const upload = uploadPhoto(fileName);
  resultArray.push({ status: "fulfilled", value: upload });

  return resultArray;
}

export default handleProfileSignup;
