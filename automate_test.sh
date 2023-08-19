#!/bin/bash

# Check if environment variables are provided as command line arguments
if [ $# -lt 3 ]; then
  echo "Usage: $0 <FIRST_NAME> <LAST_NAME> <USER_EMAIL>"
  exit 1
fi

# Set environment variables from command line arguments
export FIRST_NAME=$1
export LAST_NAME=$2
export USER_EMAIL=$3

# Run k6 test and capture output to result.json
k6 run --out json=result.json \
  -e FIRST_NAME=$FIRST_NAME \
  -e LAST_NAME=$LAST_NAME \
  -e USER_EMAIL=$USER_EMAIL \
  your_k6_script.js
