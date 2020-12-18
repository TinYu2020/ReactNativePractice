#### Quick summary

This is the app that has been built after a React Native beginner course.
This file contains the steps to set up the environment on Mac to run the app on XCode simulator, Android Studio Emulator and real iOS device.

This project is using Expo as project manager.

#### Environment Setup

## Prerequisite

- ✅Install homebrew: https://brew.sh/ `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`
- ✅Install [Node.js LTS release](https://nodejs.org/en/)
- ✅Install [Git]
- ✅Install [Watchman](https://facebook.github.io/watchman/docs/install#buildinstall)
- ✅Install Expo CLI on Mac by running `sudo npm i -g expo-cli` in Mac terminal. Verify that the installation was successful by running `expo whoami`. You will see "Not logged in" as you're not login yet. You can create an account by running `expo register` if you want to, or if you have one already run `expo login`, but you don't need an account to get started

#### How to run the App?

# start the server

- Clone the repo
- Go to the server folder terminal, run `npm install` or `yarn install` to install all dependencies
- In the config folder, open `development.json` file, change the IP address in `assetsBaseUrl` to your private IP address
- Run `node index.js` in terminal to start the server, you will see `Server started on port 9000...`

# start the React Native frontend

- Go to reactNative folder terminal, run `npm install` or `yarn install` to install all dependencies
- Go to `client.js` file, change the IP address in the baseURL to your private IP address
- In the folder terminal, run `yarn start`, it will open Metro Bundler on browser, on the left hand side you will see list of button to open iOS, Android, or web

## Set up iOS simulator

- Install [Xcode](https://apps.apple.com/us/app/xcode/id497799835?mt=12) ✅
- Go to Preference -> locations -> install latest Command Line Tools
- Open Developer Tool -> Simulator

## Set up Android Studio Emulator

- Install [Android Studio](https://developer.android.com/studio)
- Set up [configuration for Mac](https://docs.expo.io/workflow/android-studio-emulator/)
- Add Android SDK location to your PATH:
- Go to terminal, run `vim ~/.zprofile`
- Go to terminal, run `vim ~/.zshrc`
- Add following command for both file: change to your username
  `export ANDROID_SDK=/Users/{YOUR_USERNAME}/Library/Android/sdk`
  `export PATH=/Users/{YOUR_USERNAME}/Library/Android/sdk/platform-tools:$PATH`
- run `source .zprofile` and `source .zshrc` to save the changes
- After this, make sure you can run command `adb` (Android Debug Bridge). ADB is a tool in Android SDK to manage Android simulator and Android device

## Run on iOS device

- Install Expo Client on iOS device
- Download Expo from App Store
- Open the Metro Bundler, you will see a QR code on the left hand side
- Open the camera on your device to scan the QR code, it will direct to expo and open the app

## Fast key to get developer menu

- Mac for Android: press `Command` + `M`
- Mac for iOS: press `Control` + `D`, then press `Command` + `D`
- On iOS device: Shaking your iOS device

The purpose is mainly for sharing and for anyone who is interested in playing with React Native. Feel free to clone the repo and reach Tin for any suggestions and ideas
