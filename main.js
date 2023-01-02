const school = {
    name: "Acme School",
    location: "New York",
    students: [
      {
        name: "Alice",
        age: 16,
        grade: 10,
        classes: ["math", "english", "history"]
      },
      {
        name: "Bob",
        age: 17,
        grade: 11,
        classes: ["math", "physics", "chemistry"]
      }
    ],
    teachers: [
        {
            name: "Mr. Smith",
            subject: "math",
            gradeLevels: [9, 10, 11],
            classes: ["math", "english"]
        },
        {
            name: "Ms. Johnson",
            subject: "history",
            gradeLevels: [10, 11],
            classes: ["history", "English"]
        }
    ]
  };
  
function findSharedClasses (studName, teachName){
    let studentIndex, teacherIndex
    for (let i in school.students){
        if (school.students[i].name === studName){
            studentIndex = i
        }
    }
    for (let i in school.teachers){
        if (school.teachers[i].name === teachName){
            teacherIndex = i
        }
    }
    for (let stcls of school.students[studentIndex].classes){
        for (let tecls of school.teachers[teacherIndex].classes){
            if (stcls === tecls){
                return true
            }
        }
    }
    return false
  }

console.log(findSharedClasses("Bob","Mr. Smith"));
console.log(findSharedClasses("Bob","Ms. Johnson"));
  
