const courseList = [
    { code: "ACIT 1620", name: "fundamental web technology" },
    { code: "ACIT 1630", name: "database systems" },
    { code: "ACIT 1515", name: "scripting for IT" },
  ];
  
  let userInput = "";
  while (userInput.length !== 4 || isNaN(userInput)) {
    userInput = prompt("enter a 4-digit course code");
  }
  
  let isCourseTaken = false;
  for (let course of courseList) {
    if (course.code.includes(` ${userInput}`)) {
      console.log(`yes! i am taking the course: ${course.code} - ${course.name}`);
      isCourseTaken = true;
      break;
    }
  }
  
  if (!isCourseTaken) {
    courseList.push({ code: `ACIT ${userInput}`, name: null });
    console.log(`the course with code ${userInput} has been added to the list.`);
  }