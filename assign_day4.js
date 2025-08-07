// ✅ Micro Assignment: Student Score Tracker
// 1.	Create array of 5 students with {name, marks, passed}
// 2.	Use:
// o	map() to extract names
// o	filter() to list passed students
// o	reduce() to calculate average
// 3.	Create function to update a student’s marks


let student={name:"chatGpt",marks:70,passed:true}

let {name,marks,passed}=student           //object destructuring
console.log(name)



let student_details=[{Name:"chatGpt",marks:70,passed:true},
                 {Name:"claude",marks:20,passed:false},
                {Name:"cursor",marks:33,passed:false},
            {Name:"windsurf",marks:90,passed:true},
        {Name:"gemini",marks:30,passed:false},]


    let students_name =  student_details.map(student=>student.Name)       //get the students name using map
    console.log(students_name)
    
    let students_passed=student_details.filter(student=>student.passed==true)  //get the student result using filter
    console.log(students_passed)

   let average_marks = student_details.reduce((accu,student)=>accu+student.marks,0)/student_details.length //calculate the student average marks using reduce
   console.log(average_marks)



//function to update the student marks and other details

student_details=student_details.map(update_marks)

function update_marks(student){
    let new_marks=Math.floor(Math.random()*100)+1;
    if(new_marks<34) student.passed=false
    else student.passed=true;
    student.marks=new_marks
    return { Name:student.Name,
      marks:student.marks,
    passed:student.passed}
   
}

console.log(student_details)