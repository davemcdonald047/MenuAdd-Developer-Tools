@echo off
title MenuApp Developer Tools - Git Update

echo.
echo ======================================
echo     MenuApp Developer Tools
echo ======================================
echo.

:: Verify this is a Git repository
if not exist ".git" (
    echo ERROR: This folder is not a Git repository.
    echo.
    pause
    exit /b
)

echo Adding files...
git add .

echo.
echo Checking for changes...
git diff --cached --quiet
if %errorlevel%==0 (
    echo No changes to commit.
    echo.
    pause
    exit /b
)

echo.
echo Committing...
git commit -m "Update %date% %time%"

echo.
echo Pushing...
git push

echo.
echo ======================================
echo Update Complete
echo ======================================
echo.

pause