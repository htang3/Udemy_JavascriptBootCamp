// Lecture: Project - Edit And Delete Items - Part 1

/*
var ul = document.querySelector('ul');

//**********ADD ITEMS
document.getElementById('add-btn').addEventListener('click', function(e) {
    e.preventDefault();
    // console.log('Hello');

    var addInput = document.getElementById('add-input');
    
    if(addInput.value !== '') {
        var li = document.createElement('li'),
            firstPar = document.createElement('p'),
            secondPar = document.createElement('p'),
            firstIcon = document.createElement('i'),
            secondIcon = document.createElement('i'),
            input = document.createElement('input');

        firstIcon.className = "fa fa-pencil-square-o";
        secondIcon.className = "fa fa-times";
        input.className = "edit-note";
        input.setAttribute('type', 'text');

        firstPar.textContent = addInput.value;

        secondPar.appendChild(firstIcon);
        secondPar.appendChild(secondIcon);
        li.appendChild(firstPar);
        li.appendChild(secondPar);
        li.appendChild(input);
        ul.appendChild(li);
        // console.log(li);
        addInput.value = '';
    }
});

//**********EDIT AND DELETE ITEMS

ul.addEventListener('click', function(e) {

  // console.log(this);
  // console.log(e.target;
  // console.log(e.target.classList[1]);
    
  if(e.target.classList[1] === "fa-pencil-square-o") {
      
   // console.log('Hello');
      var parentPar = e.target.parentNode;
      parentPar.style.display = 'none';
      
      var note = parentPar.previousElementSibling;
      var input = parentPar.nextElementSibling;
      // console.log(note, input);
      
      input.style.display = 'block';
      input.value = note.textContent;
      
  }
});
*/

var list = document.querySelector('ul');
console.log(list);


list.addEventListener('click', function (e) {
    console.log(e.target); // refer to the clicked <li> or <i> if clicked on it
    console.log(this); //refer to the <ul> not <li> or <i>
    console.log(e.target.classList[1]); //fa-pencil-square-o

    if (e.target.classList[1] === "fa-pencil-square-o") {
        var parentNode = e.target.parentNode; //parentnode is p in this case
        console.log(parentNode);//<p> <i> </i> </p>
        parentNode.style.display = "none";

        var note = parentNode.previousElementSibling;
        var newInput = parentNode.nextElementSibling;
        console.log(note, newInput);
        newInput.style.display = "block";
        //newInput.value = note.textContent;
        newInput.addEventListener('keypress', function (e) {
            console.log(e); //keyboardEvent, "Enter" has keyCode =13
            if (e.keyCode === 13) {
                if (newInput.value !== "") {
                    note.textContent = newInput.value;
                    parentNode.style.display = "block";
                    newInput.style.display = 'none'
                } else {
                    //if it an empty input, clear the whole element
                    var li = newInput.parentNode;
                    li.parentNode.removeChild(li)
                }

            }

        }
        )
    } else if (e.target.classList[1] === "fa-times") {
        console.log("delete");
        var list = e.target.parentNode.parentNode;//1st parentNode is p, 2nd parentNode is <li>
        console.log(list);
        list.parentNode.removeChild(list);
    }
})
