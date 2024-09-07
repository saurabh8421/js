const course = {
    coursename:"js in hindi",
    price: "999",
    courseInstructor: "Saurabh"
}

// course.courseInstructor

const {courseInstructor}= course
const {courseInstructor:Ci}= course

console.log(courseInstructor);
console.log(Ci)