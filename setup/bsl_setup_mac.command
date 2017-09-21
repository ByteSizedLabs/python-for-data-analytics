#!/bin/bash
xcode-select --install

if test ! $(which brew); then
    echo "Installing homebrew..."
    ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
fi

echo "export PATH=/usr/local/bin:$PATH" >> ~/.bash_profile
echo "alias python='python3'" >> ~/.bash_profile

source ~/.bash_profile

brew install python3
brew cask install sublime-text