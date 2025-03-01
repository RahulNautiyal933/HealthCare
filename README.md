# Diabetes Healthcare Website

This project is a comprehensive healthcare website focused on diabetes management and prevention. It offers various features including diabetes prediction, latest health news, recommended exercises, physical activities, do's and don'ts, meal recommendations, and an assistive chatbot.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Usage](#usage)

## Features

1. **Assistive Chatbot**:
   - A chatbot that guides users about the app and provides recommendations.


2. **Dedicated Login and Signup Pages**:
   - Users can create an account or log in to access personalized information such as diabetes prediction and profile section.


3. **Explore Our Tools**:
   - **Diabetes Prediction**:
     - A machine learning model that predicts whether a person is diabetic based on input data.
   - **BMI Prediction**:
     - A tool to calculate the Body Mass Index based on input data.
   - **Personalized Recommendations**:
     - Customized health recommendations based on user input.





4. **Latest Health News**:
   - A section displaying the most recent health news related to diabetes.



5. **Recommended Exercises and Physical Activities**:
   - A curated list of exercises and physical activities suitable for diabetic patients.


6. **Do's and Don'ts**:
   - Guidelines on what diabetic patients should and shouldn't do to manage their condition.

7. **Meal Recommendations**:
   - Dietary advice and meal plans for diabetic patients as well as for maintaining general health.

## Technologies Used

- **Backend**: 
  - Flask

- **Frontend**: 
  - MERN Stack (MongoDB, Express.js, React.js, Node.js)
  - Framer Motion
  - Tailwind CSS

## Setup Instructions

### Prerequisites

Ensure you have the following installed:

- Node.js
- MongoDB
- Python and pip
- Flask

### Backend Setup

1. Clone the repository:
    ```sh
    git clone https://github.com/RahulNautiyal933/HealthCare.git
    cd HealthCare/backend
    ```

2. Create a virtual environment and activate it:
    ```sh
    python -m venv venv
    source venv/bin/activate  # On Windows use `venv\Scripts\activate`
    ```

3. Install the required packages:
    ```sh
    pip install -r requirements.txt
    ```

4. Run the Flask server:
    ```sh
    flask run
    ```

### Frontend Setup

1. Navigate to the frontend directory:
    ```sh
    cd ../frontend
    ```

2. Install the required packages:
    ```sh
    npm install
    ```

3. Start the development server:
    ```sh
    npm start
    ```

## Usage

After setting up both the backend and frontend, you can access the website by navigating to `http://localhost:3000` in your web browser.

- **Assistive Chatbot**: Interact with the chatbot for guidance and recommendations.
- **Login and Signup**: Create an account or log in to access personalized features.
- **Explore Our Tools**:
  - **Diabetes Prediction**: Fill in the required health details in the prediction form and submit to get the result.
  - **BMI Prediction**: Enter your height and weight to calculate your BMI.
  - **Personalized Recommendations**: Receive customized health recommendations based on your input.
- **Health News**: Browse the latest articles in the news section.
- **Exercises**: Explore the recommended exercises tailored for diabetic patients.
- **Do's and Don'ts**: Follow the guidelines provided to manage diabetes effectively.
- **Meal Recommendations**: Get dietary advice and meal plans to maintain a healthy lifestyle.



