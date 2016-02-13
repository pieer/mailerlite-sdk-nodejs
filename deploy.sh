#!/bin/sh

set -e

REPOSITORY="https://$GITHUB_DEPLOY_CREDENTIALS@github.com/fmoliveira/mailerlite-sdk-nodejs.git"
OUTPUT_FOLDER=".docs"
CONFIG_NAME=`git config user.name`
CONFIG_EMAIL=`git config user.email`
AUTHOR_NAME=${GITHUB_DEPLOY_AUTHOR_NAME:CONFIG_NAME}
AUTHOR_EMAIL=${GITHUB_DEPLOY_AUTHOR_EMAIL:CONFIG_EMAIL}

# Remove output folder if already being used
rm -rf $OUTPUT_FOLDER

# Clone GitHub pages
git clone -b gh-pages --single-branch $REPOSITORY $OUTPUT_FOLDER

# Remove current content
git -C $OUTPUT_FOLDER rm -rf .

# Build documentation
npm run make:docs

# Add new content
git -C $OUTPUT_FOLDER add --all .

# Set author info
git config user.name $AUTHOR_NAME
git config user.email $AUTHOR_EMAIL

# Do commit
git -C $OUTPUT_FOLDER commit -m "Deploy to GitHub pages."

# Push
git -C $OUTPUT_FOLDER push

# Remove temporary folder
rm -rf $OUTPUT_FOLDER