@echo off
REM Start all three apps in parallel (Windows)
REM Usage: start-all.bat

echo Starting all 3 apps...
echo - Main on port 3000
echo - Consultancy on port 3001
echo - NextGen on port 3002
echo.

REM Open new CMD windows for each app
start cmd /k "cd apps\main && npm start"
start cmd /k "cd apps\consultancy && npm start"
start cmd /k "cd apps\nextgen && npm start"

echo All apps starting in separate windows...
pause
