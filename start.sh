#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}Starting Boba Fetch setup...${NC}"

# Function to check if a command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Check for required commands
if ! command_exists node; then
    echo "Node.js is not installed. Please install Node.js first."
    exit 1
fi

if ! command_exists npm; then
    echo "npm is not installed. Please install npm first."
    exit 1
fi

# Server setup
echo -e "${YELLOW}Setting up server...${NC}"
cd server

# Check if node_modules exists, if not install dependencies
if [ ! -d "node_modules" ]; then
    echo "Installing server dependencies..."
    npm install
fi

# Start server in background
echo -e "${GREEN}Starting server...${NC}"
npm run start:dev &
SERVER_PID=$!

# Client setup
echo -e "${YELLOW}Setting up client...${NC}"
cd ../react-client

# Check if node_modules exists, if not install dependencies
if [ ! -d "node_modules" ]; then
    echo "Installing client dependencies..."
    npm install
fi

# Start client
echo -e "${GREEN}Starting client...${NC}"
npm start

# Cleanup function
cleanup() {
    echo -e "${YELLOW}Stopping server...${NC}"
    kill $SERVER_PID
    exit 0
}

# Trap SIGINT (Ctrl+C) and call cleanup
trap cleanup SIGINT

# Keep script running
wait 