@echo off
REM Starts backend and frontend and opens the app in your browser.
cd /d "%~dp0backend"
start "Mental Health Backend" cmd /k "npm start"
timeout /t 2 >nul
cd /d "%~dp0frontend"
start "Mental Health Frontend" cmd /k "npm run dev"
timeout /t 3 >nul
start "" "http://localhost:5173"
exit
