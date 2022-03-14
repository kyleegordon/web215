function getData() 
{
  var fullName = "Name: " + document.getElementById('first_name').value + " " + document.getElementById('last_name').value;
  var computerPlatform = "Computer Platform: " + document.getElementById('computer_platform').value;
  var personalBackground = "Personal Background: " + document.getElementById('personal_background').value;
  var academicBackground = "Academic Background: " + document.getElementById('academic_background').value;
  var subjectBackground = "Subject Background: " + document.getElementById('subject_background').value;
  var courses = "Current Courses: " + document.getElementById('courses').value;
  var interestingFact = "Interesting Fact: " + document.getElementById('interesting_fact').value; 
  
  let formInfo = [fullName, computerPlatform, personalBackground, academicBackground, subjectBackground, courses, interestingFact];
  
  displayData(formInfo);
}


function displayData(dataArray) 
{
  
    
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
}