
var quizController = (function () {

    //1st, create question constructor
    var Question = function (questId, questText, Options, corAnswer) {
        this.questId = questId;
        this.questText = questText;
        this.Options = Options;
        this.corAnswer = corAnswer;
    };
    //Create a local storage collection
    var LocalStorageCollection = {
        //set newCollection into local storage
        setQuestCollection: function (newCollection) {
            //when setItem, the first is key
            localStorage.setItem("mycollection", JSON.stringify(newCollection))
        },
        //method to get myCollection from local Storage
        getQuestCollection: function () {
            //use getItem to get the collection, use JSON.parse to turn string into JSON
            return JSON.parse(localStorage.getItem('mycollection'))
        },
        //method to delete the collection
        deleteQuestCollection: function () {
            localStorage.removeItem("mycollection")
        }
    }

    /*
    create method (addQuestionLocalStorage) to handle local storage
    this method will receive newquestionText and answerOptions
    */
    return {

        addQuestionLocalStorage: function (newquestionText, answerOptions) {

            //first we need to set up the variable
            var qId, qText, ansOptions, corOption, isChecked, storedCollection;

            ansOptions = [];
            qId = 0;

            isChecked = false


            //second, check if localstorage is null or not, if it null, set a collection with empty array
            if (LocalStorageCollection.getQuestCollection() === null) {
                LocalStorageCollection.setQuestCollection([]);
            }
            //check if option is not empty, then we add it into an array, also check the checkbox
            for (var i = 0; i < answerOptions.length; i++) {
                if (answerOptions[i].value !== "") {
                    ansOptions.push(answerOptions[i].value)
                }
                //check if the radio button is check and the value of option is filled
                if (answerOptions[i].previousElementSibling.checked && answerOptions[i].value !== "") {
                    corOption = answerOptions[i].value;

                    isChecked = true;
                }
            }



            //Each question has an id, get the last elements then add 1
            if (LocalStorageCollection.getQuestCollection().length > 0) {
                console.log(LocalStorageCollection.getQuestCollection());
                console.log(LocalStorageCollection.getQuestCollection().length);
                console.log(LocalStorageCollection.getQuestCollection()[LocalStorageCollection.getQuestCollection().length - 1].questId);
                qId = LocalStorageCollection.getQuestCollection()[LocalStorageCollection.getQuestCollection().length - 1].questId + 1;
                console.log(qId);
            }
            else {
                qId = 0;
            }

            //check if the newQuestionText is empty or not. check the length of an Array length. check if at least correct answer is selected
            if (newquestionText.value !== "") {
                //check if answer option is at least one
                if (ansOptions.length > 1) {
                    if (isChecked) {

                        qText = new Question(qId, newquestionText, ansOptions, corOption);

                        //get the stored Collection
                        storedCollection = LocalStorageCollection.getQuestCollection("mycollection");
                        storedCollection.push(qText);   //add new Question with text and answer options
                        LocalStorageCollection.setQuestCollection(storedCollection);

                        newquestionText.value = "";
                        for (var x = 0; x < answerOptions.length; x++) {
                            answerOptions[x].value = "";
                            answerOptions[x].previousElementSibling.checked = false;
                        }

                    }
                    else {
                        alert("Please select correct option or you choose an empty anser")
                    }

                }
                else {
                    alert("Please enter at least two options")
                }

            }
            else {
                alert('Please fill in some text')
            }

        }

    }



})();


var UIController = (function () {
    var elements = {
        InsertBtn: document.getElementById("question-insert-btn"),
        newQuestionText: document.getElementById("new-question-text"),
        adminOptions: document.querySelectorAll(".admin-option"),
        //purpose: add one more question to the last input option
        adminOptionsContainer: document.querySelector('.admin-options-container'), //get class options-container

    }
    return {
        getdomElements: elements,
        addInputDynamically: function () {
            var input = function () {
                //initalize the input field we want to add, z: is the length of the option variable
                var newInput, z;
                //z is the length of all the current option
                z = document.querySelectorAll(".admin-options").length;
                newInput = '<div class="admin-option-wrapper"><input type="radio" class="admin-option-' + z + '" name="answer" value="' + z + '"><input type="text" class="admin-option admin-option-' + z + '" value=""></div>';
                //insert newly created input field
                elements.adminOptionsContainer.insertAdjacentHTML('beforeend', newInput);
                //remove the EventListenner to update with real data
                elements.adminOptionsContainer.lastElementChild.previousElementSibling.lastElementChild.removeEventListener('focus', input)

                //
                elements.adminOptionsContainer.lastElementChild.lastElementChild.addEventListener('focus', input)
            }


            elements.adminOptionsContainer.lastElementChild.lastElementChild.addEventListener('focus', input)
        }


    }

})();

var controller = (function (quizCtrl, uiCtrl) {
    var selectedElement = uiCtrl.getdomElements;
    uiCtrl.addInputDynamically();

    selectedElement.InsertBtn.addEventListener('click', function () {
        var adminOptions = document.querySelectorAll(".admin-option")
        quizCtrl.addQuestionLocalStorage(selectedElement.newQuestionText,
            adminOptions)
    })
})(quizController, UIController);

/*
//first create 3 controllers: quizController, UIController, and controller
quizController handle all the logic, how data is processesed/stored and retrieved
UIController get the Elements from index.html file
quiz

*/