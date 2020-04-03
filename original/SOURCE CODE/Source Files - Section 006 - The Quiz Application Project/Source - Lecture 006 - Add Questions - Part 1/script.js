// Lecture: Add Questions - Part 1

/*******************************
*********QUIZ CONTROLLER********
*******************************/
//1
var quizController = (function () {

    //function constructor, question constructor
    function Question(id, questionText, options, correctAnswer) {
        this.id = id;
        this.questionText = questionText;
        this.options = options;
        this.correctAnswer = correctAnswer;
    }
    return {
        addQuestionOnLocalStorage: function (newQuestionText, options) {

            console.log("Hi");
        }
    }

})();

/*******************************
**********UI CONTROLLER*********
*******************************/
//3
var UIController = (function () {

    //create Object
    var domItems = {
        //Admin Panel Elements
        questInsertBtn: document.getElementById("question-insert-btn"),
        newQuestionText: document.getElementById('new-question-text'),
        adminOptions: document.querySelectorAll('.admin-option')//admin-option is class
    }
    //return object
    return {
        getDomItems: domItems
    }


})();



/*******************************
***********CONTROLLER***********
*******************************/
//3
var controller = (function (quizCtrl, UICtrl) {
    var selectedDomItems = UICtrl.getDomItems;
    selectedDomItems.questInsertBtn.addEventListener('click', function () {
        quizCtrl.addQuestionOnLocalStorage(selectedDomItems.newQuestionText,
            selectedDomItems.adminOptions)
    })


})(quizController, UIController);













