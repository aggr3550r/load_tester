#!/bin/bash

# Set environment variables
export FIRST_NAME="John"
export LAST_NAME="Doe"
export USER_EMAIL="john.doe@example.com"

# Run k6 test and capture output to result.json
k6 run --out json=result.json \
  -e FIRST_NAME=$FIRST_NAME \
  -e LAST_NAME=$LAST_NAME \
  -e USER_EMAIL=$USER_EMAIL \
  your_k6_script.js
