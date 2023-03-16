const courseList = [
    { code: "ACIT 1620", name: "Web Fundamental Technologies" },
    { code: "ACIT 1630", name: "Database Systems" },
    { code: "ACIT 1515", name: "Introduction to Programming" },
  ];
  
  let userInput = "";
  while (userInput.length !== 4 || isNaN(userInput)) {
    userInput = prompt("Please enter a 4-digit number (valid course codes are: 1620, 1630, and 1515)");
  }
  
  let isCourseTaken = false;
  for (let course of courseList) {
    if (course.code.includes(` ${userInput}`)) {
      console.log(`Yes, I am taking the course: ${course.code} - ${course.name}`);
      isCourseTaken = true;
      break;
    }
  }
  
  if (!isCourseTaken) {
    courseList.push({ code: `ACIT ${userInput}`, name: null });
    console.log(`Success! The course with code ACIT ${userInput} has been added to the list.`);
  }