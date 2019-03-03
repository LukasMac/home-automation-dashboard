#!/bin/bash

rm ./dist/*
npm run build
gsutil -h "Cache-Control:public" cp -a public-read ./dist/main.*.js gs://home-automation-dashboard-assets/main.js
gsutil -h "Cache-Control:public" cp -a public-read ./dist/main.*.css gs://home-automation-dashboard-assets/main.css

echo "Files uploaded to Google Storage successfully"
echo "---------------------------------------------"
echo "Don't forger to push new changes to github"