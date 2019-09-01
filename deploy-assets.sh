#!/bin/bash

rm ./dist/*
npm run build
gcloud config set account lukas.maciulis@gmail.com
gsutil -h "Cache-Control:public" cp -a public-read ./dist/main.*.js gs://home-automation-dashboard-assets/main.js
gsutil -h "Cache-Control:public" cp -a public-read ./dist/main.*.css gs://home-automation-dashboard-assets/main.css

echo "Files uploaded to Google Storage successfully"
echo "If you want to swith to another gcloud acount run: gcloud config set account <email>"
echo "---------------------------------------------"
echo "Don't forger to push new changes to github"