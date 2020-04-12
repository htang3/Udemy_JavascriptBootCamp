// Lecture: Create Question List

/*******************************
*********QUIZ CONTROLLER********
*******************************/
// 1
var quizController = (function () {

    // 4
    //*********Question Constructor*********/
    function Question(id, questionText, options, correctAnswer) {
        this.id = id;
        this.questionText = questionText;
        this.options = options;
        this.correctAnswer = correctAnswer;
    }

    //34
    var questionLocalStorage = {
        // 35
        setQuestionCollection: function (newCollection) {
            localStorage.setItem('questionCollection', JSON.stringify(newCollection));
        },
        // 36
        getQuestionCollection: function () {
            return JSON.parse(localStorage.getItem('questionCollection'));
        },
        // 37
        removeQuestionCollection: function () {
            localStorage.removeItem('questionCollection');
        }
    }
    // 90 //if local storage is empty, we need to prepare localstage when application starts
    if (questionLocalStorage.getQuestionCollection() === null) {
        questionLocalStorage.setQuestionCollection([]);
    }
    // 13
    return {
        // 80
        getQuestionLocalStorage: questionLocalStorage,
        // 14
        addQuestionOnLocalStorage: function (newQuestText, opts) {
            // 18
            // console.log('Hi');
            // 19           // 25    // 29       // 31        // 43            // 59
            var optionsArr, corrAns, questionId, newQuestion, getStoredQuests, isChecked;
            // 48
            if (questionLocalStorage.getQuestionCollection() === null) {
                questionLocalStorage.setQuestionCollection([]);
            }
            //20
            optionsArr = [];
            // 30 -- // 41 - Delete --> questionId = 0;
            // questionId = 0;
            // 21
            for (var i = 0; i < opts.length; i++) {
                // 22
                if (opts[i].value !== "") {
                    // 23
                    optionsArr.push(opts[i].value);
                }
                // 26
                if (opts[i].previousElementSibling.checked && opts[i].value !== "") {
                    // 27
                    corrAns = opts[i].value;
                    // 60
                    isChecked = true;
                }
            }

            // 38
            // [ {id: 0}, {id: 1} ]

            // 39
            if (questionLocalStorage.getQuestionCollection().length > 0) {
                // 42
                questionId = questionLocalStorage.getQuestionCollection()[questionLocalStorage.getQuestionCollection().length - 1].id + 1;
                // 40    
            } else {
                questionId = 0;
            }
            // 52
            if (newQuestText.value !== "") {
                // 55
                if (optionsArr.length > 1) {
                    // 58
                    if (isChecked) {
                        // 32
                        newQuestion = new Question(questionId, newQuestText.value, optionsArr, corrAns);
                        // 44
                        getStoredQuests = questionLocalStorage.getQuestionCollection();
                        // 45
                        getStoredQuests.push(newQuestion);
                        // 46
                        questionLocalStorage.setQuestionCollection(getStoredQuests);
                        // 24
                        // console.log(optionsArr);
                        // 28
                        // console.log(corrAns);
                        // 33
                        // console.log(newQuestion);
                        // 48
                        newQuestText.value = "";
                        // 49
                        for (var x = 0; x < opts.length; x++) {
                            // 50
                            opts[x].value = "";
                            // 51
                            opts[x].previousElementSibling.checked = false;
                        }
                        // 47
                        console.log(questionLocalStorage.getQuestionCollection());
                        // 96 //if admin add the question successfully
                        return true;
                        // 61
                    } else {
                        // 62
                        alert('You missed to check correct answer, or you checked answer without value');
                        //97 otherwise
                        return false;
                    }
                    // 56
                } else {
                    // 57
                    alert('You must insert at least two options');
                    // 98 otherwise
                    return false;
                }
                // 53
            } else {
                // 54
                alert('Please, Insert Question');
                // 99 otherwise
                return false;
            }
        }
    };

})();

/*******************************
**********UI CONTROLLER*********
*******************************/
// 2
var UIController = (function () {

    // 5
    var domItems = {
        //*******Admin Panel Elements********/
        questInsertBtn: document.getElementById('question-insert-btn'), // 6
        newQuestionText: document.getElementById('new-question-text'), // 15
        adminOptions: document.querySelectorAll('.admin-option'), // 16
        adminOptionsContainer: document.querySelector(".admin-options-container"), // 65
        insertedQuestsWrapper: document.querySelector(".inserted-questions-wrapper"), // 83
        updateQuestionBtn: document.getElementById("question-update-btn"),
        deleteQuestionBtn: document.getElementById("question-delete-btn"),
        clearListQuestionBtn: document.getElementById("questions-clear-btn"),
    };

    // 7
    return {
        getDomItems: domItems, // 8
        // 63
        addInputsDynamically: function () {
            // 67
            var addInput = function () {
                // 68
                // console.log('Works');
                // 69         // 71
                var inputHTML, z;
                // 72
                z = document.querySelectorAll(".admin-option").length;
                // 70                                                                                 //73    
                inputHTML = '<div class="admin-option-wrapper"><input type="radio" class="admin-option-' + z + '" name="answer" value="' + z + '"><input type="text" class="admin-option admin-option-' + z + '" value=""></div>';
                // 74
                domItems.adminOptionsContainer.insertAdjacentHTML('beforeend', inputHTML);
                // 75
                domItems.adminOptionsContainer.lastElementChild.previousElementSibling.lastElementChild.removeEventListener('focus', addInput);
                // 76
                domItems.adminOptionsContainer.lastElementChild.lastElementChild.addEventListener('focus', addInput);
            }
            // 66
            domItems.adminOptionsContainer.lastElementChild.lastElementChild.addEventListener('focus', addInput);
        },
        // getQuestions is question LOCAL STORAGE
        createQuestionList: function (getQuestions) {
            // 86          // 91
            var questHTML, numberingArr;
            // 92 //store the number of list question
            numberingArr = [];
            // 82
            // console.log(getQuestions);
            // 84
            //make the wrapper empty string
            domItems.insertedQuestsWrapper.innerHTML = "";
            // 85 getQuestions(LOCALStORAGE).getQuestionCollection return collection of question
            for (var i = 0; i < getQuestions.getQuestionCollection().length; i++) {
                // 93 add number for numberingArr[], 
                numberingArr.push(i + 1);
                //create field to list the question
                // 87                     // 94                    // 88
                questHTML = '<p><span>' + numberingArr[i] + '. ' + getQuestions.getQuestionCollection()[i].questionText
                    + '</span><button id="question-' + getQuestions.getQuestionCollection()[i].id + '">Edit</button></p>';
                // 95
                // console.log(getQuestions.getQuestionCollection()[i].id);
                // 89 // get the inseredWrapper area
                domItems.insertedQuestsWrapper.insertAdjacentHTML('afterbegin', questHTML);
            }
        },
        editQuestionList: function (event, storedQuestionList, addinputDyFn, updatequestionDyFn) {
            //get the id
            var getid, getStorageQuestList, foundItem, placeInArr, optionHTML;
            //use id attribute different, but all question has "question-"
            if ('question-'.indexOf(event.target.id)) {
                //use split(return array of string)to get the id of the questioin we want to edit
                getid = parseInt(event.target.id.split('-')[1]); //get the second items(id) of array
                //which question object contain the id
                //use for loop define getStorage
                getStorageQuestList = storedQuestionList.getQuestionCollection();
                for (var i = 0; i < getStorageQuestList.length; i++) {
                    if (getStorageQuestList[i].id === getid) {
                        foundItem = getStorageQuestList[i];
                        placeInArr = i;
                    }

                }
                //foundItem is the current question
                domItems.newQuestionText.value = foundItem.questionText;
                domItems.adminOptionsContainer.innerHTML = "";
                //console.log(foundItem, placeInArr);
                console.log(foundItem);
                optionHTML = ""; // need to assign empty string, otherwise, it undefined
                for (var x = 0; x < foundItem.options.length; x++) {
                    optionHTML += '<div class="admin-option-wrapper"><input type="radio" class="admin-option-' + x + '" name="answer" value="' +
                        x + '"><input type="text" class="admin-option admin-option-' + x + '" value="' + foundItem.options[x] + '"></div>';
                }
                //display all the current option of the question
                domItems.adminOptionsContainer.innerHTML = optionHTML;
                //it display the options, HOWEVER, when we focus on last input, no New input created
                addinputDyFn();
                domItems.updateQuestionBtn.style.visibility = "visible";
                domItems.deleteQuestionBtn.style.visibility = "visible";
                domItems.questInsertBtn.style.visibility = "hidden"
                //pointerEvent handle mouseevent
                domItems.clearListQuestionBtn.style.pointerEvents = "none"
                //Update Button
                var updateQuestion = function () {
                    var newOptions, optionElm;
                    newOptions = [];
                    optionElm = document.querySelectorAll('.admin-option');
                    //foundItem is the current question found
                    //
                    foundItem.questionText = domItems.newQuestionText.value;
                    // console.log(foundItem); get new input
                    //set CorrectAnswer empty string;
                    foundItem.correctAnswer = "";
                    //select options
                    for (var i = 0; i < optionElm.length; i++) {
                        if (optionElm[i].value !== "") {
                            //update ALL OPTIONS
                            newOptions.push(optionElm[i].value);
                            if (optionElm[i].previousElementSibling.checked) {
                                //update CORRECT ANSWER
                                foundItem.correctAnswer = optionElm[i].value
                            }
                        }
                    }
                    foundItem.options = newOptions;
                    if (foundItem.questionText !== "") {
                        if (foundItem.options.length > 1) {
                            if (foundItem.correctAnswer != "") {
                                //get all the question list, in order to insert new update question, we need to use splice
                                //splice(position want to be replace, how many element need to replace, new value added)
                                getStorageQuestList.splice(placeInArr, 1, foundItem);
                                //add update getStorageQuestList to storedQuestionList.
                                storedQuestionList.setQuestionCollection(getStorageQuestList)
                                //after insert, update the field
                                domItems.newQuestionText.value = "";
                                for (var i = 0; i < optionElm.length; i++) {
                                    optionElm[i].value = "";
                                    optionElm[i].previousElementSibling.checked = false;
                                }

                                //update VISIbility of button
                                domItems.updateQuestionBtn.style.visibility = "hidden";
                                domItems.deleteQuestionBtn.style.visibility = "hidden";
                                domItems.questInsertBtn.style.visibility = "visible"
                                //pointerEvent handle mouseevent
                                domItems.clearListQuestionBtn.style.pointerEvents = "";

                                //update dynamically because create createQuestionList (param)
                                updatequestionDyFn(storedQuestionList);

                            }
                            else {
                                alert("Please enter correct answer")
                            }
                        }
                        else {
                            alert("Please choose at least 2 options")
                        }

                    }
                    else {
                        alert("Please, insert question")
                    }


                }
                domItems.updateQuestionBtn.onclick = updateQuestion;
            }

        }
    };

})();

/*******************************
***********CONTROLLER***********
*******************************/
// 3
var controller = (function (quizCtrl, UICtrl) {

    // 11
    var selectedDomItems = UICtrl.getDomItems;
    // 64
    UICtrl.addInputsDynamically();
    // 81 return question collection LOCALSTORAGE
    UICtrl.createQuestionList(quizCtrl.getQuestionLocalStorage);
    // 9 -- //12 (change with var selectedDomItems)
    selectedDomItems.questInsertBtn.addEventListener('click', function () {
        // 77
        var adminOptions = document.querySelectorAll('.admin-option');
        // 10
        // console.log('Works');
        // 100 addQuestionOnLocalStorage return either true or false            // 17                                                                // 78
        var checkBoolean = quizCtrl.addQuestionOnLocalStorage(selectedDomItems.newQuestionText, adminOptions);
        // 101 if question added successfully then we need to invoke again  UPDATED list of question
        if (checkBoolean) {
            // 102 //Page reload dynamically
            UICtrl.createQuestionList(quizCtrl.getQuestionLocalStorage);
        }

    });
    //add event listner to wrapper
    selectedDomItems.insertedQuestsWrapper.addEventListener('click', function (e) {
        UICtrl.editQuestionList(e, quizCtrl.getQuestionLocalStorage,
            UICtrl.addInputsDynamically, UICtrl.createQuestionList);
    })

})(quizController, UIController);











