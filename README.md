⏱️ React Stopwatch App

A simple and clean Stopwatch Application built using React Hooks.
It allows users to start, stop, and reset the timer with accurate time formatting (MM:SS).

🚀 Features

▶ Start the stopwatch

⏸ Stop the stopwatch

🔄 Reset the stopwatch

⏱ Time format in minutes : seconds (MM:SS)

Prevents multiple intervals from running at the same time

Clean and responsive UI using external CSS

🛠️ Tech Stack

React.js

JavaScript (ES6)

CSS

React Hooks used:

useState

useRef

useEffect

📂 Project Structure
src/
│── App.jsx
│── App.css
│── main.jsx
│── Login.jsx

⚙️ How It Works

useState stores the time value

useRef stores the interval ID to avoid re-rendering

setInterval increases time every second

clearInterval stops the timer

useEffect clears the interval when component unmounts

Time is formatted using a custom formatTime() function

📥 Installation & Run Locally

Clone the repository:

git clone https://github.com/your-username/stopwatch-react.git


Go inside the project folder:

cd DAY8


Install dependencies:

npm install


Run the project:

npm run dev

🎯 Usage

Click Start to begin the stopwatch

Click Stop to pause

Click Reset to reset time to 00:00

🌱 Future Improvements

Add lap functionality

Add dark/light theme

Add sound on start/stop

Mobile animations

🙌 Author

Developed by [Sibtain Raza]
Learning React step by step 🚀

# LOGIN
🔐 React Login Form (useRef)

A simple Login Form built using React and useRef Hook to capture user input values without re-rendering the component.

🚀 Features

Email and Password input fields

Uses useRef instead of controlled inputs

Prevents page reload on submit

Clean UI using inline CSS

Logs user credentials to console (for learning purpose)

🛠️ Tech Stack

React.js

JavaScript (ES6)

Inline CSS

React Hooks:

useState

useRef


⚙️ How It Works

useRef is used to get values directly from input fields

No re-render happens when user types

handleSubmit() prevents default form submission

On submit, email and password are printed in console