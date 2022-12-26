var courseName = document.getElementById('courseName')
var courseCategory= document.getElementById("courseCategory")
var coursePrice= document.getElementById("coursePrice")
var courseDescription= document.getElementById("courseDescription")
var courseCapacity= document.getElementById("courseCapacity")
var click= document.getElementById("click")
var clear =document.getElementById("clear")
var data=document.getElementById("data")
var deleteBtn= document.getElementById("deleteBtn")
var search =document.getElementById("search")
var courses = []
click.onclick = function(event){
    event.preventDefault();
    var course ={
        courseName:courseName.value,
        courseCategory:courseCategory.value,
        coursePrice:coursePrice.value,
        courseDescription:courseDescription.value,
        courseCapacity:courseCapacity.value

    }
    courses.push(course)
    clearinput()
    displayCourses()
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Course added sucessfully',
        showConfirmButton: false,
        timer: 1500
      })
}
// clear inputs
function clearinput(){
courseName.value= ""
courseCategory.value=""
coursePrice.value=""
courseDescription.value=""
courseCapacity.value=""

}

// display function 
function displayCourses(){
 var result=''
    for (var i = 0; i < courses.length; i++) {
        result+=`
        <tr>
        <th>${i+1}</th>
        <th>${courses[i].courseName}</th>
        <th>${courses[i].courseCategory}</th>
        <th>${courses[i].coursePrice}</th>
        <th>${courses[i].courseDescription}</th>
        <th>${courses[i].courseCapacity}</th>
        <th><button class="btn btn-info" >update </button> </th>
        <th><button class="btn btn-danger" onclick="deleteCourse(${i})" >detete </button> </th>
    </tr>
        
        `
          data.innerHTML= result
      }
}
 //delete course
 function deleteCourse(index){
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
            courses.splice (index,1)
            displayCourses()
          Swal.fire(
            'Deleted!',
            'Your course has been deleted.',
            'success'
          )
        }
      })

 }


 //delete all
 deleteBtn.onclick=function(){
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
            courses=[]
    data.innerHTML=''
          Swal.fire(
            
            'Deleted!',
            'Your file has been deleted.',
            'success'
            
          )
        }
      })
 }

 //search 
 search.onkeyup=function(){
    var result=''
    for (var i = 0; i < courses.length; i++) {
        if(courses[i].courseName.toLowerCase().includes(search.value.toLowerCase()) ){
        result+=`
        <tr>
        <th>${i+1}</th>
        <th>${courses[i].courseName}</th>
        <th>${courses[i].courseCategory}</th>
        <th>${courses[i].coursePrice}</th>
        <th>${courses[i].courseDescription}</th>
        <th>${courses[i].courseCapacity}</th>
        <th><button class="btn btn-info" >update </button> </th>
        <th><button class="btn btn-danger" onclick="deleteCourse(${i})" >detete </button> </th>
    </tr>
        `
         
    }
}
data.innerHTML= result

 }
