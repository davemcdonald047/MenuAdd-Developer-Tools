@echo off
title MenuApp Developer Tools - Git Update

echo.
echo ======================================
echo MenuApp Developer Tools
echo Git Update Utility
echo ======================================
echo.

:: --------------------------------------------------
:: Change to script folder
:: --------------------------------------------------

cd /d "%~dp0"

:: --------------------------------------------------
:: Build project
:: --------------------------------------------------

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

:: --------------------------------------------------
:: Show repository status
:: --------------------------------------------------

echo.
git status

:: --------------------------------------------------
:: Stage all changes
:: --------------------------------------------------

echo.
git add .

:: --------------------------------------------------
:: Check if anything was staged
:: --------------------------------------------------

git diff --cached --quiet

if %errorlevel%==0 (
    echo.
    echo No changes to commit.
    echo.
    pause
    exit /b
)

:: --------------------------------------------------
:: Commit
:: --------------------------------------------------

echo.
set /p MESSAGE=Enter commit message:

if "%MESSAGE%"=="" (
    set MESSAGE=Update %date% %time%
)

echo.
git commit -m "%MESSAGE%"

:: --------------------------------------------------
:: Push
:: --------------------------------------------------

echo.
git push

echo.
echo ======================================
echo Update Complete
echo ======================================

pause