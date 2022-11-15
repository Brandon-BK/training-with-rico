const student = {
  name: "Tim ",
  surname: "Jones",
  age: 27,
  testscore: 78,
  isProgrammer: false,
};

const students = [
  {
    name: "Bob",
    surname: "Botombe",
    age: 21,
    testscore: 55,
    isProgrammer: false,
    roleModels: ["Kanye West", "Alaxander Forbes", "Big Sean"],
  },
  {
    name: "Jimmy",
    surname: "Hendricks",
    age: 17,
    testscore: 44,
    isProgrammer: true,
    roleModels: ["Elon Musk", "Jeff Bezos"],
  },
  {
    name: "Josheph",
    surname: "Selah",
    age: 22,
    testscore: 78,
    isProgrammer: true,
    roleModels: ["Warren Beffet", "Jeff Bezos"],
  },
  {
    name: "Borris",
    surname: "Johnson",
    age: 30,
    testscore: 66,
    isProgrammer: false,
    roleModels: ["Jessica Alba", "Drake"],
  },
  {
    name: "Patrick",
    surname: "Fatacki",
    age: 41,
    testscore: 13,
    isProgrammer: true,
    roleModels: ["Mark Zuckerburg", "Elon Musk"],
  },
  {
    name: "Henrico",
    surname: "Botes",
    age: 18,
    testscore: 97,
    isProgrammer: false,
    roleModels: ["Bob Marley", "Lucky dube"],
  },
  {
    name: "Knowledge",
    surname: "Mosona",
    age: 19,
    testscore: 77,
    isProgrammer: false,
    roleModels: ["50 Cent", "Vibes Cartel"],
  },
  {
    name: "Barrick",
    surname: "Phillips",
    age: 23,
    testscore: 35,
    isProgrammer: true,
    roleModels: ["Elon Musk"],
  },
  {
    name: "Megan",
    surname: "Peters",
    age: 27,
    testscore: 88,
    isProgrammer: false,
    roleModels: ["Madonna", "Katty Perry"],
  },
];

/**
 * QUESTION 1.
 *
 * using the student variable above return the age of the student.
 */
function getStudentAge() {
  return student.age;
}
console.log(getStudentAge());

/**
 * QUESTION 2.
 *
 * using the student variable above return the name and surname
 * of the student as one string (concatination). make sure that the
 * name is seperated by a space
 */

function getStudentFullName() {
  return student.name + student.surname;
}
console.log(getStudentFullName());

/**
 * QUESTION 3.
 *
 * Having fun yet 😉 ?
 *
 * now using the students variable above return a list containing
 * the names of all the students who are programers , ie: ['Bob', 'Jeff', 'Tim']
 *
 */

function getStudentsWhoAreProgarmers() {
  const programmerStudents = [];
  students.filter((x) => {
    if (x.isProgrammer === true) programmerStudents.push(x.name);
  });
  return programmerStudents;
}
console.log(getStudentsWhoAreProgarmers());
/**
 * QUESTION 4.
 *
 * return a list of objects containing a name and score property. The list
 * should consist of all non programmers who have a testscore hight then 50
 *
 * example of the return list:
 *
 *  [
 *    {name : 'Jeff', testscore: 67},
 *    {name : 'Mary', testscore: 49},
 *  ]
 *
 */
function getNonProgramersWithMarkOver50() {
  const nonProgrammerStudents = [];

  students.map((ele) => {
    if (ele.isProgrammer === false && ele.testscore > 50)
      nonProgrammerStudents.push({ name: ele.name, testscore: ele.testscore });
  });
  return nonProgrammerStudents;
}
console.log(getNonProgramersWithMarkOver50());
/**
 * QUESTION 5.
 *
 * relax you are doing great 👍 ?
 *
 * By having a look at the mockdata we can see for ourselfs
 * how many students see Elon Musk as a role model. The problem is
 * that the computer cannot see things like we see them and this is
 * where you as the programmer step in to teach the computer.
 *
 * YOUR TASK :
 *
 * Write a function that counts how many students have listed Elon Musk
 * as a role model, after working out the correct number of students, returns
 * the count
 *
 */
function getElonMuskSupporters() {
  const total = [];
  students.filter((ele) => {
    if (ele.roleModels.includes("Elon Musk")) total.push(ele.name);
  });
  return total.length;
}
console.log(getElonMuskSupporters());
/**
   *  QUESTION 6
   *  
   *  take a moment to breath 🧘🏼‍♂️ ...
   * 
   *  Given that the pass mark is 70% determine what percentage of students have 
   *  failed and return the percentage
   * 
      NB: The formular for determining the average is :
      avg = (number of  students who failed / number of all students) * 100
   */
function getPercentageOfStudentsWhoFailed() {
  const failedStudents = [];

  students.filter((ele) => {
    if (ele.testscore < 70) failedStudents.push(ele.name);
  });

  const res = (failedStudents.length / students.length) * 100;
  return res.toFixed(2);
}
console.log(getPercentageOfStudentsWhoFailed());
