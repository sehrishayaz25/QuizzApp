// all questions
var Questions = [
    {
      question: "who is the father of computer?",
      options: ["Herman Hollerith", "Ada Byron", "Blaise Pascal", "Charles Babbage"],
      answer: 3,
    },
  
    {
      question:
        "IC stands for?",
      options: [" Integrated Circuit", "Integrated Computer", "Internal Computer", "Internal Circuit"],
      answer: 0,
    },
  
    {
      question: "Mark uckerberg was the principal founder of which computer company?",
      options: ["Apple", "Google", "Microsoft", "Facebook"],
      answer: 3,
    },
  
    {
      question: "C++ belongs to which category of Programming Language?",
      options: ["Structured", " Object Oriented", "Modular", "Procedural"],
      answer: 1,
    },
  
    {
      question: "The group of data and operations together are known as?",
      options: ["Function", "Class", "Object", "Structure"],
      answer: 2,
    },
  ];
  
  // access all things
  var numbers = document.querySelector(".question-numbers");
  var question = document.querySelector(".questions");
  var optionList = document.querySelector(".list-options");
  var col2 = document.querySelector("#quizcol2");
  var col4 = document.querySelector("#quizcol4");
  var col6 = document.querySelector("#quizcol6");
  var col8 = document.querySelector("#quizcol8");
  var col10 = document.querySelector("#quizcol10");
  var showquestion;
  
  // making for question
  var counter = 0;
  var rightans = 0;
  var attemptans = 0;
  var wrongans = 0;
  
  // making arrays for question and options
  var questionarray = [];
  var optionarray = [];
  
  // add question into question array
  function pushquestion() {
    for (var i = 0; i < Questions.length; i++) {
      questionarray.push(Questions[i]);
    }
  }
  
  // display the question
  function setquestion() {
    // counter
    numbers.innerHTML = "Question " + (counter + 1) + " of " + Questions.length;
  
    //random question
    var qindex = questionarray[Math.floor(Math.random() * questionarray.length)];
    showquestion = qindex;
    question.innerHTML = showquestion.question;
  
    // stop repeatition of question
    questionarray.splice(questionarray.indexOf(qindex), 1);
  
    // option length
    var optlen = qindex.options.length;
  
    // add options in optionarray
    for (var i = 0; i < optlen; i++) {
      // push in option array
      optionarray.push(i);
    }
  
    optionList.innerHTML = " ";
  
    for (var i = 0; i < optlen; i++) {
      // show options
      var optindex = optionarray[Math.floor(Math.random() * optionarray.length)];
  
      // stop the repeatition of options
      optionarray.splice(optionarray.indexOf(optindex), 1);
  
      var opttag = document.createElement("li");
      var opttext = document.createTextNode(qindex.options[optindex]);
      opttag.appendChild(opttext);
      opttag.id = optindex;
      opttag.setAttribute("onclick", "getli(this)");
      optionList.appendChild(opttag);
    }
    counter++;
  }
  
  // start quiz
  function start() {
    document.querySelector(".quiz-start").classList.add("hidden");
    document.querySelector(".quiz-question").classList.remove("hidden");
    pushquestion();
    setquestion();
  }
  
  // next
  function next() {
    if (counter === Questions.length) {
      end();
    } else {
      setquestion();
    }
  }
  
  // diable li
  function disableli() {
    var ullen = optionList.children.length;
    for (var i = 0; i < ullen; i++) {
      optionList.children[i].classList.add("disable");
    }
  }
  
  // end quiz
  function end() {
    document.querySelector(".quiz-question").classList.add("hidden");
    document.querySelector(".quiz-end").classList.remove("hidden");
    result();
  }
  
  // result
  function result() {
    col2.innerHTML = Questions.length;
    col4.innerHTML = attemptans;
    col6.innerHTML = rightans;
    col8.innerHTML = attemptans - rightans;
    col10.innerHTML = (rightans / Questions.length) * 100 + "%";
  }
  
  // right or wrong answer
  function getli(u) {
    var id = parseInt(u.id);
    if (id === showquestion.answer) {
      u.classList.add("right");
      rightans++;
    } else {
      u.classList.add("wrong");
      wrongans++;
    }
    attemptans++;
    disableli();
  }
  
  // try again function
  function tryagain() {
    document.querySelector(".quiz-end").classList.add("hidden");
    document.querySelector(".quiz-start").classList.remove("hidden");
    counter = 0;
    rightans = 0;
    attemptans = 0;
    wrongans = 0;
  }