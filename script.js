document.addEventListener("DOMContentLoaded", function () {
  generateQuestions();
  document
    .getElementById("submit-button")
    .addEventListener("click", submitQuiz);
});

function generateQuestions() {
  const questions = [
    {
      question: "What is a Deterministic Finite Automaton (DFA)?",
      options: [
        "A machine that performs calculations",
        "An abstract machine that can be in exactly one of a finite number of states at any given time",
        "A machine that can be in multiple states at the same time",
        "A machine that has an infinite number of states",
      ],
      answer:
        "An abstract machine that can be in exactly one of a finite number of states at any given time",
    },
    {
      question: "Which of the following is true for a DFA?",
      options: [
        "It can use an empty string transition",
        "It can move to multiple states from a given state and input symbol",
        "It cannot use nondeterminism",
        "It has no states",
      ],
      answer: "It cannot use nondeterminism",
    },
    {
      question: "In a DFA, what does each state represent?",
      options: [
        "A possible computation",
        "A specific input symbol",
        "A particular condition or stage in the computation",
        "A final state only",
      ],
      answer: "A particular condition or stage in the computation",
    },
    {
      question: "How does a DFA read input?",
      options: [
        "One character at a time from right to left",
        "All characters at once",
        "One character at a time from left to right",
        "Randomly selecting characters",
      ],
      answer: "One character at a time from left to right",
    },
    {
      question:
        "What happens when a DFA encounters an input not defined in its transition function?",
      options: [
        "It moves to a special error state",
        "It repeats the current state",
        "It halts immediately",
        "It chooses a random transition",
      ],
      answer: "It halts immediately",
    },
    {
      question: "What is required for a DFA to accept an input string?",
      options: [
        "The input string must be empty",
        "The DFA must reach a final state after reading the entire input string",
        "The DFA must read the input string in reverse",
        "All states the DFA passes through must be final states",
      ],
      answer:
        "The DFA must reach a final state after reading the entire input string",
    },
    {
      question:
        "How many transition functions are defined for each state in a DFA?",
      options: [
        "One for each symbol in the input alphabet",
        "Only one for all symbols",
        "As many as the number of states in the DFA",
        "No transition functions are defined",
      ],
      answer: "One for each symbol in the input alphabet",
    },
    {
      question:
        "What is the main difference between a DFA and an NFA (Nondeterministic Finite Automaton)?",
      options: [
        "A DFA can use empty string transitions, while an NFA cannot",
        "An NFA can be in multiple states at once for some input, whereas a DFA cannot",
        "A DFA has more states than an NFA",
        "An NFA is easier to implement than a DFA",
      ],
      answer:
        "An NFA can be in multiple states at once for some input, whereas a DFA cannot",
    },
    {
      question: "Which of the following is NOT a characteristic of a DFA?",
      options: [
        "Deterministic transition",
        "Single final state",
        "Fixed set of states",
        "Reads input one symbol at a time",
      ],
      answer: "Single final state",
    },
    {
      question: "In the context of DFAs, what is a dead state?",
      options: [
        "A state from which no transitions are possible",
        "A state that is not reachable from the initial state",
        "A state that cannot lead to a final state",
        "The initial state of the DFA",
      ],
      answer: "A state that cannot lead to a final state",
    },
  ];

  shuffleArray(questions);

  const form = document.getElementById("quiz-form");
  form.innerHTML = "";

  questions.forEach((q, index) => {
    let questionHTML = `<div class="question">
            <p>${q.question}</p>
            ${q.options
              .map(
                (option) =>
                  `<label><input type="radio" name="question${index}" value="${option}">${option}</label><br>`
              )
              .join("")}
        </div>`;
    form.innerHTML += questionHTML;
  });
}
