const data = [
  {
    id: 1,
    question: "What is an Accordion component?",
    answer:
      "An accordion is a UI component that displays a list of items where each item can be expanded or collapsed to show additional content. It is commonly used for FAQs, documentation, settings, and other interfaces where displaying everything at once would take up too much space.",
  },
  {
    id: 2,
    question: "How does this Accordion project work?",
    answer:
      "The project stores the currently selected question in React state and uses that state to conditionally display its answer. When a question is clicked, its ID is stored in state. Clicking the same question again removes its ID and collapses the answer.",
  },
  {
    id: 3,
    question: "How does single-selection mode work?",
    answer:
      "In single-selection mode, only one question can be open at a time. The selected question's ID is stored in the selected state. When another question is clicked, its ID replaces the previous one, automatically closing the previous question.",
  },
  {
    id: 4,
    question: "How does multi-selection mode work?",
    answer:
      "Multi-selection mode stores multiple question IDs inside an array called multiple. When a question is clicked, its ID is added to the array if it is not already present, or removed if it is already there. This allows several answers to remain open simultaneously.",
  },
  {
    id: 5,
    question: "Why are there two pieces of state for selection?",
    answer:
      "The project uses selected for single-selection mode and multiple for multi-selection mode. Keeping them separate makes the logic for each mode easier to understand and allows the component to switch between the two behaviors.",
  },
  {
    id: 6,
    question: "How is the accordion data organized?",
    answer:
      "The questions and answers are stored separately in data.js as an array of objects. Each object contains an ID, question, and answer. The Accordion component imports this data and dynamically generates the UI using the map() method.",
  },
  {
    id: 7,
    question: "Why does each accordion item need a unique key?",
    answer:
      "React uses the key prop to identify individual elements when rendering a list. Each accordion item uses its unique ID as the key, allowing React to efficiently track changes when the list is updated.",
  },
  {
    id: 8,
    question: "What happens when an accordion question is clicked?",
    answer:
      "The click event calls a handler with the item's ID. Depending on the current selection mode, the handler either replaces the current selected ID or adds/removes the ID from the multiple array. React then re-renders the component and conditionally displays the appropriate answer.",
  },
  {
    id: 9,
    question: "Why is conditional rendering used in this project?",
    answer:
      "Conditional rendering determines whether an answer should be displayed. The answer is rendered only when its question ID matches the selected ID or exists in the multiple selection array. This allows the accordion to expand and collapse dynamically.",
  },
  {
    id: 10,
    question: "What React concepts does this project demonstrate?",
    answer:
      "This project demonstrates several fundamental React concepts including functional components, useState, event handling, conditional rendering, rendering lists with map(), props through component structure, and managing arrays in state.",
  },
];

export default data;