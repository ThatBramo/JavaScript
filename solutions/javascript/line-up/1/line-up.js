//
// This is only a SKELETON file for the 'Line Up' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const format = (name, linePosition) => {
  let ending = 'th';
  if(linePosition % 10 === 1 && linePosition % 100 !== 11) {
    ending = 'st';
  } else if(linePosition % 10 === 2 && linePosition % 100 !== 12) {
    ending = 'nd';
  } else if(linePosition % 10 === 3 && linePosition % 100 !== 13) {
    ending = 'rd';
  } 
  let formattedName = name[0].toUpperCase() + name.slice(1).toLowerCase();
  return formattedName + ', you are the ' + linePosition + ending + ' customer we serve today. Thank you!';
};
