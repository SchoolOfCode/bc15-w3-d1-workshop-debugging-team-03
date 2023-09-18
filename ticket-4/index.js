function getGradeFromPoints(points) {
  if ((points) >= 90) {
    return "A";
  } else if (points >= 70) {
    return "B";
  } else if (points >= 50) {
    return "C";
  } else if (points >= 40) {
    return "D";
  }
  return "E";
}

const grade = getGradeFromPoints(90);
console.log(grade, "should be A");

console.log(getGradeFromPoints(100));
console.log(getGradeFromPoints(90));
console.log(getGradeFromPoints(70));
console.log(getGradeFromPoints(50));
console.log(getGradeFromPoints(40));
console.log(getGradeFromPoints(39));
console.log(getGradeFromPoints(0));




