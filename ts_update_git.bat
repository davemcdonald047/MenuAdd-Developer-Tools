@echo off
title MenuApp Developer Tools - Git Update

echo.
echo ======================================
echo MenuApp Developer Tools
echo Git Update Utility
echo ======================================
echo.

cd /d "%~dp0"

echo.
echo Building project...
echo.

call npm run compile

if errorlevel 1 (
    echo.
    echo **************************************
    echo Build FAILED.
    echo Commit cancelled.
    echo **************************************
    pause
    exit /b
)

echo.
git status

echo.
set /p MESSAGE=Enter commit message:

if "%MESSAGE%"=="" (
    set MESSAGE=Update %date% %time%
)

echo.
git add .

git commit -m "%MESSAGE%"

git push

echo.
echo ======================================
echo Update Complete
echo ======================================

pause