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
    //quizprogress
    var quizprogress = {
        questionIndex: 0
    }
    // 13
    /***********PERSON CONSTRUCTOR*************** */
    function Person(id, fname, lname, score) {
        this.id = id;
        this.fname = fname;
        this.lname = lname;
        this.score = score;
    }
    var personLocalStorage = {
        setPersonData: function (newPersonData) {
            localStorage.setItem('personData', JSON.stringify(newPersonData));

        },
        getPersonData: function () {
            return JSON.parse(localStorage.getItem('personData'))
        },
        removePersonData: function () {
            localStorage.removeItem('personData');
        }
    };
    if (personLocalStorage.getPersonData() === null) {
        personLocalStorage.setPersonData([])
    }
    return {
        getquizProgress: quizprogress,
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
        },
        checkAnswer: function (ans) {
            if (questionLocalStorage.getQuestionCollection()[quizprogress.questionIndex].correctAnswer === ans.textContent) {
                return true;
            }
            else {
                return false;
            }
        },
        isFinished: function () {
            return quizprogress.questionIndex + 1 === questionLocalStorage.getQuestionCollection().length;
        }

    };

})();

/**************************************************************
 * **************************************************************
 * *********************************************************************************************
 * *********************************************************************************************
 * *********************************************************************************************
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
        /* ************ Quiz Section*******************/
        askedQuestionText: document.getElementById("asked-question-text"),
        quizOptionWrapper: document.querySelector(".quiz-options-wrapper"),
        // queryselector the tag progress. the number
        progressBar: document.querySelector("progress"),
        //the filled bar
        progressPar: document.getElementById('progress'),
        instAnsContainer: document.querySelector(".instant-answer-container"),
        instAnsText: document.getElementById("instant-answer-text"),
        instAnsDiv: document.getElementById("instant-answer-wrapper"),
        emotionIcon: document.getElementById("emotion"),
        nextQuestbtn: document.getElementById("next-question-btn"),
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

                //backDefaultView
                var backDefaultView = function () {
                    var updatedOptions;
                    updatedOptions = document.querySelectorAll('.admin-option');
                    //after insert, update the field
                    domItems.newQuestionText.value = "";
                    for (var i = 0; i < updatedOptions.length; i++) {
                        updatedOptions[i].value = "";
                        updatedOptions[i].previousElementSibling.checked = false;
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

                //Update Button
                var updateQuestion = function () {
                    var newOptions, optionElm;
                    newOptions = [];

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

                                backDefaultView();
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
                var deleteQuestion = function () {
                    console.log("Delete");
                    getStorageQuestList.splice(placeInArr, 1);

                    storedQuestionList.setQuestionCollection(getStorageQuestList);
                    backDefaultView();
                }
                domItems.deleteQuestionBtn.onclick = deleteQuestion;

            }

        },

        clearQuestionList: function (storedQuestionList) {
            //if stored Question list. get collection not null
            if (storedQuestionList.getQuestionCollection() != null) {
                //if the length of collection >0
                if (storedQuestionList.getQuestionCollection().length > 0) {
                    //confirm() return true or false, warn the user
                    var conf = confirm("Warning: you will lose entire question list"); //return true or false
                    //if true then remove the question, set empty string
                    if (conf) {
                        storedQuestionList.removeQuestionCollection();
                        domItems.insertedQuestsWrapper.innerHTML = ""; //reload dynamically and delete the array items
                    }
                }
            }


        },

        //displayQuestion
        displayQuestion: function (storedQuestionList, progress) {
            var newOptionHTML, characterArr;
            characterArr = ['A', 'B', 'C', 'D', 'E', 'F'];
            if (storedQuestionList.getQuestionCollection().length > 0) {
                //display the question text on UI
                domItems.askedQuestionText.textContent = storedQuestionList.getQuestionCollection()[progress.questionIndex].questionText;
                domItems.quizOptionWrapper.innerHTML = ""; //first need to clear default value
                for (var i = 0; i < storedQuestionList.getQuestionCollection()[progress.questionIndex].options.length; i++) {
                    newOptionHTML = '<div class="choice-' + i + '"><span class="choice-' + i + '">' + characterArr[i] + '</span><p  class="choice-' + i + '">'
                        + storedQuestionList.getQuestionCollection()[progress.questionIndex].options[i] + '</p></div>';
                    domItems.quizOptionWrapper.insertAdjacentHTML("beforeend", newOptionHTML);
                }
            }
        },
        displayProgress: function (storedQuestionList, progress) {
            domItems.progressBar.max = storedQuestionList.getQuestionCollection().length;
            domItems.progressBar.value = progress.questionIndex + 1; // because default questioIndex =0;
            domItems.progressPar.textContent = (progress.questionIndex + 1) + "/" + storedQuestionList.getQuestionCollection().length;
        },

        newDesign: function (ansResult, selectedAnswer) {
            var twoOptions, index;
            index = 0;
            if (ansResult) {
                index = 1;
            }
            twoOptions = {
                instAnswerText: ['This is a wrong answer', "This is a correct answer"],
                instAnsClass: ['red', 'green'],
                emotionType: ['images/sad.png', 'images/happy.png'],
                optionSpanbg: ['rgba(200,0,0, .7)', 'rgba(0,250,0,.2']
            }
            domItems.quizOptionWrapper.style.cssText = "opacity: 0.6; pointer-events:none;"; //make it transparent
            domItems.instAnsContainer.style.cssText = "opacity: 1;";
            domItems.instAnsText.textContent = twoOptions.instAnswerText[index];
            domItems.instAnsDiv.className = twoOptions.instAnsClass[index];
            domItems.emotionIcon.setAttribute('src', twoOptions.emotionType[index]);
            selectedAnswer.previousElementSibling.style.backgroundColor = twoOptions.optionSpanbg[index]
        },

        resetDesign: function () {
            domItems.quizOptionWrapper.style.cssText = ""; //make it transparent
            domItems.instAnsContainer.style.opacity = "0";
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

    //clear
    selectedDomItems.clearListQuestionBtn.addEventListener('click', function () {
        UICtrl.clearQuestionList(quizCtrl.getQuestionLocalStorage);
    })
    //displayQuestion
    UICtrl.displayQuestion(quizCtrl.getQuestionLocalStorage, quizCtrl.getquizProgress);

    UICtrl.displayProgress(quizCtrl.getQuestionLocalStorage, quizCtrl.getquizProgress);

    selectedDomItems.quizOptionWrapper.addEventListener('click', function (e) {
        var updatedOptionDiv = selectedDomItems.quizOptionWrapper.querySelectorAll('div');
        for (var i = 0; i < updatedOptionDiv.length; i++) {
            if (e.target.className === 'choice-' + i) {
                var answer = document.querySelector('.quiz-options-wrapper div p.' + e.target.className);
                var answerResult = quizCtrl.checkAnswer(answer);
                //console.log(e.target.className); //choice - #
                UICtrl.newDesign(answerResult, answer);
                //when it gets to the last question, set the next button to finish.
                if (quizCtrl.isFinished()) {
                    selectedDomItems.nextQuestbtn.textContent = 'Finish'
                }
                var nextQuestion = function (questData, progress) {
                    if (quizCtrl.isFinished()) {
                        //finished quiz
                        console.log('Finished');
                    }
                    else {
                        UICtrl.resetDesign(); //if not finished, reset the design of the quiz.
                        quizCtrl.getquizProgress.questionIndex++; //we need to increase the index.
                        UICtrl.displayQuestion(quizCtrl.getQuestionLocalStorage, quizCtrl.getquizProgress);
                        UICtrl.displayProgress(quizCtrl.getQuestionLocalStorage, quizCtrl.getquizProgress)
                    }
                }
                selectedDomItems.nextQuestbtn.onclick = function () {
                    nextQuestion(quizCtrl.getQuestionLocalStorage, quizCtrl.getquizProgress)
                }
            }
        }
    })
})(quizController, UIController);











