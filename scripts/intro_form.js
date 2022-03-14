function getData() 
{
  var fullName = "Name: " + document.getElementById('first_name').value + " " + document.getElementById('last_name').value;
  var computerPlatform = "Computer Platform: " + document.getElementById('computer_platform').value;
  var personalBackground = "Personal Background: " + document.getElementById('personal_background').value;
  var academicBackground = "Academic Background: " + document.getElementById('academic_background').value;
  var subjectBackground = "Subject Background: " + document.getElementById('subject_background').value;
  var interestingFact = "Interesting Fact: " + document.getElementById('interesting_fact').value; 
  let formInfo = [fullName, computerPlatform, personalBackground, academicBackground, subjectBackground, interestingFact];

  var checkboxes = document.querySelectorAll('input[name="courses"]:checked');
    var courses = [];
    checkboxes.forEach((checkbox) => {
        courses.push(checkbox.value);
     });

     var willGraduate = document.querySelector('input[name="graduate"]:checked').value;

  
  displayData(formInfo, courses, willGraduate);
}


function displayData(dataArray, courses, willGraduate) 
{
  alert(willGraduate);

  for (let i = 0; i < dataArray.length; i++)
  {
    //creates new element & stores in variable
    var newListItem = document.createElement('li');
    
    //creates text node & stores in variable
    var newText = document.createTextNode(dataArray[i]);
    
    //attaches text node to new element
    newListItem.appendChild(newText);
    
    //find position where element should be added
    var position = document.getElementsByTagName('ul')[0];
    
    //insert new element in correct position
    position.appendChild(newListItem);
    
  }
if (courses.length > 0){
  var allCourses = "";
  courses.forEach((course) => {
    allCourses += course + ", ";
  });

  allCourses = allCourses.slice(0, -2);
  
    var newListItem = document.createElement('li');
    var newText = document.createTextNode("I am enrolled in " + allCourses);
    newListItem.appendChild(newText);
    var position = document.getElementsByTagName('ul')[0];
    position.appendChild(newListItem);
} else {
  var newListItem = document.createElement('li');
    var newText = document.createTextNode("I am not enrolled in any courses");
    newListItem.appendChild(newText);
    var position = document.getElementsByTagName('ul')[0];
    position.appendChild(newListItem);
}

var graduateText = "";
if (willGraduate === "yes"){
  graduateText = "I will graduate this year!"
} else {
  graduateText = "I will not graduate this year."
}

var newListItem = document.createElement('li');
    var newText = document.createTextNode(graduateText);
    newListItem.appendChild(newText);
    var position = document.getElementsByTagName('ul')[0];
    position.appendChild(newListItem);
 

}