# Mental Health Companion Chatbot

A full-stack student-facing support application that uses sentiment analysis to detect mood and generate empathetic, motivational chatbot responses.

## Project Structure

- `backend/` - Express API that performs sentiment analysis and builds supportive chatbot replies.
- `frontend/` - React + Vite app with a chat interface and mood display.

## Setup Instructions

### Backend

1. Open a terminal in `backend/`
2. Run `npm install`
3. Run `npm start`

The backend listens on `http://localhost:4000`

### Frontend

1. Open a terminal in `frontend/`
2. Run `npm install`
3. Run `npm run dev`

The frontend will run on a Vite local server, typically `http://localhost:5173/`.

### One-click launch

If you want to start the app without typing commands manually, double-click `run-chatbot.bat` from the project root. It will:

- launch the backend
- launch the frontend
- open the browser at `http://localhost:5173`

If the services are already running, use `open-chatbot-url.bat` to open the app in your browser.

## Usage

- Type a message about how you are feeling.
- The chatbot will analyze mood and respond with supportive advice and a relaxation tip.

## Notes

- No professional advice is provided. This application is for supportive companion use only.
- For real counseling, please contact a licensed mental health professional.
