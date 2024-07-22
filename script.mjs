import chalk from "chalk";
import promptSync from "prompt-sync";

const prompt = promptSync();

/* Display Menu */
function displayMenu(message, options) {
  console.log(chalk.cyan("\nWelcome to Multitalent Forum\n"));
  console.log(chalk.blue(message));
  options.forEach((option) => {
    console.log(chalk.green(option));
  });
}

/* Shuffle Array */
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
} 

/* Check Answer */
function checkAnswer(userAnswer, correctAnswer) {
  return userAnswer.toLowerCase() === correctAnswer.toString().toLowerCase();
}

/* Quiz Function */
function quiz(questions, name) {
  let points = 0;
  const maxWrongAnswers = 3;
  let wrongAnswers = 0;

  let shuffledQuestions = shuffleArray([...questions]);

  for (let i = 0; i < shuffledQuestions.length; i++) {
    console.log(
      chalk.cyan(`\nQuestion ${i + 1}: ${shuffledQuestions[i].question}`)
    );

    let answer;


    
    if (shuffledQuestions[i].type === "multiple") {
      shuffledQuestions[i].options.forEach((option, index) => {
        console.log(chalk.blue(`${index + 1}. ${option}`));
      });

      answer =
        parseInt(prompt(chalk.yellow("Enter your answer (number): "))) - 1;
      answer = shuffledQuestions[i].options[answer];
    } else if (shuffledQuestions[i].type === "truefalse") {
      answer = prompt(chalk.yellow("Enter your answer (true/false) : "));
    } else if (shuffledQuestions[i].type === "Short-Answer") {
      answer = prompt(chalk.yellow("Enter your answer (short answer): "));
    }

    if (checkAnswer(answer, shuffledQuestions[i].answer)) {
      points += 10;
      console.log(chalk.green("Correct! You earned 10 points."));
    } else {
      wrongAnswers++;
      console.log(chalk.red("Incorrect answer."));
    }

    console.log(chalk.green(`Your total points are: ${points}`));
    console.log(chalk.red(`Wrong answers count: ${wrongAnswers}`));

    if (wrongAnswers === maxWrongAnswers) {
      console.log(
        chalk.red(
          "You have reached the maximum number of wrong answers. Better luck next time!"
        )
      );
      break;
    }
  }

  console.log(chalk.cyan(`\nParticipant Name: ${name}`));
  console.log(chalk.cyan(`Quiz over! Your total points: ${points}`));

  if (points >= 70) {
    console.log(chalk.green("Congratulations! You win $200.\n"));
    prizeMoney = 200;
    shoppingCart();
  }
}

/* Display Main Menu */
displayMenu("Please select from the following options:\n", [
  "1. Quiz Games",
  "2. Guessing Games",
  "3. Thrilling Games",
]);

const option1 = "1";
const option2 = "2";
const option3 = "3";

const choice = prompt(
  chalk.yellow("Enter your choice Number as 1 or 2 or 3: ")
);

let prizeMoney = 0;

/* Quiz Section */
if (choice === option1) {
  displayMenu("Please select from the following options:\n", [
    "1. Quiz Related to Books",
    "2. General Knowledge",
  ]);

  const subChoice = prompt(
    chalk.yellow("Enter your choice Number as 1 or 2: ")
  );

  if (subChoice === option1) {
    let name = prompt(chalk.yellow("Enter your Name: "));
    const bookQuestions = [
      {
        type: "multiple",
        question: "Who wrote the novel 'Pride and Prejudice'?",
        options: [
          "Charlotte Brontë",
          "Jane Austen",
          "Emily Brontë",
          "Mary Shelley",
        ],
        answer: "Jane Austen",
      },
      {
        type: "multiple",
        question:
          "In which book series would you find the character Katniss Everdeen?",
        options: ["Divergent", "Twilight", "The Hunger Games", "Harry Potter"],
        answer: "The Hunger Games",
      },
      {
        type: "multiple",
        question: "Which of the following novels was written by George Orwell?",
        options: [
          "Brave New World",
          "Animal Farm",
          "Fahrenheit 451",
          "The Catcher in the Rye",
        ],
        answer: "Animal Farm",
      },
      {
        type: "multiple",
        question:
          "The book 'To Kill a Mockingbird' is set in which fictional town?",
        options: ["Maycomb", "Macondo", "Gotham", "Springfield"],
        answer: "Maycomb",
      },
      {
        type: "multiple",
        question:
          "What is the first book in J.R.R. Tolkien's 'The Lord of the Rings' trilogy?",
        options: [
          "The Two Towers",
          "The Fellowship of the Ring",
          "The Return of the King",
          "The Silmarillion",
        ],
        answer: "The Fellowship of the Ring",
      },
      {
        type: "truefalse",
        question:
          "The character Sherlock Holmes was created by Sir Arthur Conan Doyle.",
        answer: true,
      },
      {
        type: "truefalse",
        question: "'The Great Gatsby' was written by Ernest Hemingway.",
        answer: false,
      },
      {
        type: "truefalse",
        question: "The book '1984' is set in a dystopian future.",
        answer: true,
      },
      {
        type: "truefalse",
        question:
          "J.K. Rowling wrote the 'Percy Jackson & the Olympians' series.",
        answer: false,
      },
      {
        type: "truefalse",
        question:
          "'Moby-Dick' is a novel about a man's obsession with a giant whale.",
        answer: true,
      },
    ];

    quiz(bookQuestions, name);
  } else if (subChoice === option2) {
    let name = prompt(chalk.yellow("Enter your Name: "));
    const generalKnowledgeQuestions = [
      {
        question: "What is the capital of Germany?",
        answer: "Berlin",
        type: "Short-Answer",
      },
      {
        question: "What is the capital of France?",
        answer: "Paris",
        type: "Short-Answer",
      },
      {
        question: "What is the capital of Italy?",
        answer: "Rome",
        type: "Short-Answer",
      },
      {
        question: "What is the capital of Spain?",
        answer: "Madrid",
        type: "Short-Answer",
      },
      {
        question: "What is the capital of Portugal?",
        answer: "Lisbon",
        type: "Short-Answer",
      },
      {
        question: "What is the capital of Greece?",
        answer: "Athens",
        type: "Short-Answer",
      },
      {
        question: "What is the capital of Belgium?",
        answer: "Brussels",
        type: "Short-Answer",
      },
      {
        question: "What is the capital of Netherlands?",
        answer: "Amsterdam",
        type: "Short-Answer",
      },
      {
        question: "What is the capital of Austria?",
        answer: "Vienna",
        type: "Short-Answer",
      },
      {
        question: "What is the capital of Switzerland?",
        answer: "Bern",
        type: "Short-Answer",
      },
    ];

    quiz(generalKnowledgeQuestions, name);
  } else {
    console.log(chalk.red("Invalid Choice"));
  }
} 


else if (choice === option2) {
  /* Guessing Games */
  displayMenu("Please select from the following options:", [
    "1. Guess Number",
    "2. Guess Letter",
  ]);

  const subChoice = prompt(
    chalk.yellow("Enter your choice Number as 1 or 2: ")
  );

  /* Guessing Number */
  if (subChoice === option1) {
    console.log(chalk.magenta("Welcome to the Guessing Number Game!\n"));
    let name = prompt(chalk.yellow("Enter your Name: "));

    let counter = 0;
    let guessedCorrectly = false;
    let randomNumber = Math.floor(Math.random() * 100) + 1;

    console.log(chalk.cyan("Guess a number between 1 and 100\n"));

    while (counter < 3 && !guessedCorrectly) {
      let userGuess = prompt(chalk.yellow("Enter your guess: "));
      counter++;

      if (parseInt(userGuess) === randomNumber) {
        console.log(
          chalk.green(
            "Congratulations! You guessed the correct number. You win $200.\n"
          )
        );
        prizeMoney = 200;
        guessedCorrectly = true;
        shoppingCart();
      } else if (counter < 3) {
        console.log(chalk.red("Incorrect guess. Try again."));
      }
    }

    if (!guessedCorrectly) {
      console.log(
        chalk.red(
          `Sorry, ${name} you have used all attempts. The correct number was ${randomNumber}. Better luck next time!\n`
        )
      );
    }
  } else if (subChoice === option2) {
    /* Guessing Letter */
  

    function playGame() {
      let name = prompt(chalk.yellow("Enter your Name: "));
      let correctGuesses = 0;
      let wrongGuesses = 0;

      const places = [
        "Eiffel Tower",
        "Great Wall of China",
        "Machu Picchu",
        "Pyramids of Giza",
        "Statue of Liberty",
        "Taj Mahal",
        "Colosseum",
        "Santorini",
        "Grand Canyon",
        "Sydney Opera House",
      ];
      const shuffledPlaces = shuffleArray([...places]);

      for (
        let i = 0;
        i < shuffledPlaces.length && correctGuesses < 7 && wrongGuesses < 3;
        i++
      ) {
        let wordToGuess = shuffledPlaces[i];

        let missingIndex = Math.floor(Math.random() * wordToGuess.length);
        let missingLetter = wordToGuess[missingIndex];

        while (missingLetter === " ") {
          missingIndex = Math.floor(Math.random() * wordToGuess.length);
          missingLetter = wordToGuess[missingIndex];
        }

        let maskedWord = wordToGuess.replace(missingLetter, "_");
        console.log(chalk.cyan(`Guess the word: ${maskedWord}`));

        let userGuess = prompt(
          chalk.yellow("Enter your guess for the missing letter: ")
        )
          .trim()
          .toLowerCase();

        if (userGuess === missingLetter.toLowerCase()) {
          console.log(chalk.green(`Correct! The place is: ${wordToGuess}`));
          correctGuesses++;
        } else {
          console.log(
            chalk.red(`Wrong guess. The correct letter was: "${missingLetter}"`)
          );
          wrongGuesses++;
        }

        console.log(
          chalk.cyan(
            `Correct Guesses: ${correctGuesses}, Wrong Guesses: ${wrongGuesses}\n`
          )
        );
      }

      if (correctGuesses === 7) {
        console.log(
          chalk.green(
            `Congratulations, ${name}! You guessed 7 names correctly !.You win $200.\n`
          )
        );
        prizeMoney = 200;
        shoppingCart();
      } else {
        console.log(
          chalk.red(
            `Sorry, ${name}. You made 3 incorrect guesses. Better luck next time!`
          )
        );
      }
    }

    playGame();
  } else {
    console.log(chalk.red("Invalid Choice"));
  }
} 


else if (choice === option3) {
  
  
    /* Thrilling Games */
  displayMenu("Please select from the following options:", [
    "1. Fighting Game",
    "2. Tic-Tac-Toe",
  ]);

  const subChoice = prompt(
    chalk.yellow("Enter your choice Number as 1 or 2: ")
  );

  /* Free Style Fighting */
  if (subChoice === option1) {
    function fight() {
      let fighter1 = prompt(chalk.yellow("Enter Fighter 1's name: "));
      let fighter2 = prompt(chalk.yellow("Enter Fighter 2's name: "));

      let power1 = 100;
      let power2 = 100;
      const moves = {
        jab: 5,
        hammerfist: 10,
        kick: 15,
        choke: 20,
      };
      let turn = 1;

      while (power1 > 0 && power2 > 0) {
        if (turn === 1) {
          let move = prompt(
            chalk.yellow(
              `${fighter1}, enter your move (jab/hammerfist/kick/choke): `
            )
          );
          if (moves[move] !== undefined) {
            power2 -= moves[move];
            console.log(
              chalk.green(
                `${fighter1} uses ${move} on ${fighter2} and ${fighter2}'s new power is ${power2}`
              )
            );
            turn = 2;
          } else {
            console.log(chalk.red("Invalid move, try again."));
          }
        } else {
          let move = prompt(
            chalk.yellow(
              `${fighter2}, enter your move (jab/hammerfist/kick/choke): `
            )
          );
          if (moves[move] !== undefined) {
            power1 -= moves[move];
            console.log(
              chalk.green(
                `${fighter2} uses ${move} on ${fighter1} and ${fighter1}'s new power is ${power1}`
              )
            );
            turn = 1;
          } else {
            console.log(chalk.red("Invalid move, try again."));
          }
        }
      }

      if (power1 <= 0) {
        console.log(chalk.red(`${fighter1} is knocked out! ${fighter2} wins!`));
        console.log(chalk.green("Winner gets $200!\n"));
        prizeMoney = 200;
        shoppingCart();
      } else if (power2 <= 0) {
        console.log(chalk.red(`${fighter2} is knocked out! ${fighter1} wins!`));
        console.log(chalk.green("Winner gets $200!\n"));
        prizeMoney = 200;
        shoppingCart();
      }
    }

    fight();
  } else if (subChoice === option2) {
    /* Tic-Tac-Toe Game */
    let rows = parseInt(prompt(chalk.yellow("Enter the number of rows:")));
    let columns = parseInt(
      prompt(chalk.yellow("Enter the number of columns:"))
    );

    let player1Name = prompt(chalk.yellow("Enter the name of Player 1:"));
    let player2Name = prompt(chalk.yellow("Enter the name of Player 2:"));

    let matrix = [];

    for (let i = 0; i < rows; i++) {
      matrix[i] = [];
      for (let j = 0; j < columns; j++) {
        matrix[i][j] = 0;
      }
    }

    function printMatrix() {
      console.log(chalk.cyan("Current matrix:"));
      for (let i = 0; i < rows; i++) {
        console.log(matrix[i].join("\t"));
      }
    }

    function checkWin(player) {
      for (let i = 0; i < rows; i++) {
        let count = 0;
        for (let j = 0; j < columns; j++) {
          if (matrix[i][j] === player) {
            count++;
            if (count === 3) {
              return true;
            }
          } else {
            count = 0;
          }
        }
      }

      for (let j = 0; j < columns; j++) {
        let count = 0;
        for (let i = 0; i < rows; i++) {
          if (matrix[i][j] === player) {
            count++;
            if (count === 3) {
              return true;
            }
          } else {
            count = 0;
          }
        }
      }

      return false;
    }

    let turn = 1;
    let totalCells = rows * columns;
    let cellsFilled = 0;
    let winner = null;

    while (cellsFilled < totalCells) {
      printMatrix();

      if (turn === 1) {
        let rowIndex = parseInt(
          prompt(
            chalk.yellow(`${player1Name}, enter row index (0 to ${rows - 1}):`)
          )
        );
        let columnIndex = parseInt(
          prompt(
            chalk.yellow(
              `${player1Name}, enter column index (0 to ${columns - 1}):`
            )
          )
        );

        if (
          rowIndex >= 0 &&
          rowIndex < rows &&
          columnIndex >= 0 &&
          columnIndex < columns &&
          matrix[rowIndex][columnIndex] === 0
        ) {
          let value = prompt(
            chalk.yellow(
              `${player1Name}, enter value for element at row ${rowIndex}, column ${columnIndex} (enter 'X'):`
            )
          );
          if (value === "X") {
            matrix[rowIndex][columnIndex] = value;
            cellsFilled++;
            if (checkWin("X")) {
              printMatrix();
              winner = player1Name;
              break;
            }
            turn = 2;
          } else {
            console.log(chalk.red("Invalid input. Please enter 'X'."));
          }
        } else {
          console.log(
            chalk.red("Invalid input or cell already filled. Please try again.")
          );
        }
      } else if (turn === 2) {
        let rowIndex = parseInt(
          prompt(
            chalk.yellow(`${player2Name}, enter row index (0 to ${rows - 1}):`)
          )
        );
        let columnIndex = parseInt(
          prompt(
            chalk.yellow(
              `${player2Name}, enter column index (0 to ${columns - 1}):`
            )
          )
        );

        if (
          rowIndex >= 0 &&
          rowIndex < rows &&
          columnIndex >= 0 &&
          columnIndex < columns &&
          matrix[rowIndex][columnIndex] === 0
        ) {
          let value = prompt(
            chalk.yellow(
              `${player2Name}, enter value for element at row ${rowIndex}, column ${columnIndex} (enter '✓'):`
            )
          );
          if (value === "✓") {
            matrix[rowIndex][columnIndex] = value;
            cellsFilled++;
            if (checkWin("✓")) {
              printMatrix();
              winner = player2Name;
              break;
            }
            turn = 1;
          } else {
            console.log(chalk.red("Invalid input. Please enter '✓'."));
          }
        } else {
          console.log(
            chalk.red("Invalid input or cell already filled. Please try again.")
          );
        }
      }
    }

    if (winner) {
      printMatrix();
      console.log(chalk.green(`${winner} wins $200!`));
      prizeMoney = 200;
      shoppingCart();
    } else {
      console.log(chalk.red("It's a draw."));
    }
  } else {
    console.log(chalk.red("Invalid Choice"));
  }
} else {
  console.log(chalk.red("Invalid Choice"));
}

/* Shopping Cart */
function shoppingCart() {
  console.log(
    chalk.cyan(
      "Congratulations! Welcome to Our Online Shop. You can buy different items like jeans, shirts, hats, shoes, etc."
    )
  );
  const products = [
    { type: "t-shirt", color: "white", price: 19.99 },
    { type: "jeans", color: "blue", price: 39 },
    { type: "hat", color: "red", price: 9 },
    { type: "t-shirt", color: "yellow", price: 19 },
    { type: "t-shirt", color: "red", price: 29 },
    { type: "jeans", color: "white", price: 19 },
    { type: "shirt", color: "yellow", price: 19 },
    { type: "shoes", color: "green", price: 49 },
    { type: "sandals", color: "brown", price: 12 },
    { type: "jeans", color: "grey", price: 22 },
    { type: "hat", color: "red", price: 19 },
  ];

  let totalExpenses = 0;
  let purchasedItems = [];

  while (prizeMoney > 0) {
    let itemType = prompt(
      chalk.yellow("Enter the type of item you want to buy: ")
    ).toLowerCase();
    let itemColor = prompt(
      chalk.yellow("Enter the color of the item you want to buy: ")
    ).toLowerCase();

    let itemQuantity;
    while (true) {
      itemQuantity = parseInt(
        prompt(chalk.yellow("Enter the quantity you want to buy: ")),
        10
      );
      if (isNaN(itemQuantity) || itemQuantity <= 0) {
        console.log(
          chalk.red("Invalid quantity. Please enter a positive number.")
        );
      } else {
        break;
      }
    }

    let filteredProducts = products.filter(
      (product) =>
        product.type.toLowerCase() === itemType &&
        product.color.toLowerCase() === itemColor
    );

    if (filteredProducts.length > 0) {
      let unitPrice = filteredProducts[0].price;
      let totalPrice = unitPrice * itemQuantity;

      if (totalPrice <= prizeMoney) {
        console.log(
          chalk.green(
            `You have selected ${itemQuantity} ${itemType}(s) of color ${itemColor} with a total price of $${totalPrice.toFixed(
              2
            )}`
          )
        );
        prizeMoney -= totalPrice;
        totalExpenses += totalPrice;
        for (let i = 0; i < itemQuantity; i++) {
          purchasedItems.push(filteredProducts[0]);
        }
        console.log(
          chalk.green(`Remaining prize money: $${prizeMoney.toFixed(2)}`)
        );
      } else {
        console.log(
          chalk.red(
            `The total price of the selected products exceeds your prize money. You have $${prizeMoney.toFixed(
              2
            )} left.`
          )
        );
      }
    } else {
      console.log(
        chalk.red(
          `No products found for type: ${itemType} and color: ${itemColor}`
        )
      );
    }

    if (prizeMoney > 0) {
      let continueShopping = prompt(
        chalk.yellow("Do you want to continue shopping? (yes/no): ")
      ).toLowerCase();
      if (continueShopping !== "yes") {
        break;
      }
    }
  }
  console.log(chalk.cyan("Shopping Summary:\n"));
  console.log(chalk.green(`Total Expenses: $${totalExpenses.toFixed(2)}`));
  console.log(chalk.green(`Remaining Prize Money: $${prizeMoney.toFixed(2)}`));
  console.log(
    chalk.green(`Total Money Utilized: $${(200 - prizeMoney).toFixed(2)}`)
  );
  console.log(chalk.cyan("Purchased Items:"));
  purchasedItems.forEach((item) => {
    console.log(
      chalk.green(`- ${item.type} (${item.color}) - $${item.price.toFixed(2)}`)
    );
  });
}
