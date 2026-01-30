#!/bin/bash
# Start all three apps in parallel
# Usage: npm run start:all

echo "Starting all 3 apps..."
echo "- Main on port 3000"
echo "- Consultancy on port 3001"  
echo "- NextGen on port 3002"
echo ""

# Start each app in the background
(cd apps/main && npm start) &
MAIN_PID=$!

(cd apps/consultancy && npm start) &
CONSULTANCY_PID=$!

(cd apps/nextgen && npm start) &
NEXTGEN_PID=$!

# Wait for all processes
wait $MAIN_PID $CONSULTANCY_PID $NEXTGEN_PID
