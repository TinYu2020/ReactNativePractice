# Quick summary

This is the app that has been built after a React Native beginner course.
This file contains the steps to set up the environment on Mac OS to run the app on XCode simulator, Android Studio Emulator and real iOS device.

This project is using Expo as project manager.

# Environment Setup

## Prerequisite

- Install [homebrew](https://brew.sh/): in Mac OS terminal, run the following command:
  `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`
- Install [Node.js LTS release](https://nodejs.org/en/): run `brew install node`
- Install [Git](https://git-scm.com/): run `brew install git`
- Install [Watchman](https://facebook.github.io/watchman/docs/install#buildinstall): `brew install watchman `
- Install Expo CLI: `sudo npm i -g expo-cli`. Verify that the installation was successful by running `expo whoami`. You will see "Not logged in" as you're not login yet. If you want to create an account, you can create an account by running `expo register`. If you have one already run `expo login`, but you don't need an account to get started

## How to run the App?

## Start the server

- Clone the repo: `git clone https://github.com/TinYu2020/ReactNativePractice`
- Go to the `server` folder, in the folder terminal, run `npm install` or `yarn install` to install all dependencies
- Go to `server` -> `config` -> `development.json` file, change the IP address in `assetsBaseUrl` to your private IP address
- Run `node index.js` in terminal to start the server, you will see `Server started on port 9000...`

## Start the React Native frontend

- Go to reactNative folder, in the folder terminal, run `npm install` or `yarn install` to install all dependencies
- Go to `reactNative` -> `app` -> `api` -> `client.js`, change the IP address in the baseURL to your private IP address
- In terminal, run `npm start`, allow the IDE get access to Google Chrome, it will open Metro Bundler on browser, on the left hand side you will see list of button to run iOS, Android, or web

## Set up iOS simulator

- Install [Xcode](https://apps.apple.com/us/app/xcode/id497799835?mt=12), go to AppStore to download Xcode
- Open XCode, go to menu bar on the top: Xcode -> Preferences -> locations -> install latest Command Line Tools
- Then go to Xcode -> Open Developer Tool -> Simulator
- On Metro Bundler, click on `Run on iOS simulator`, allow the System Access for the IDE, allow to Open the app in Expo, then you will see the app

## Set up Android Studio Emulator

- Install [Android Studio](https://developer.android.com/studio), in Mac OS terminal run: `brew install --cask android-studio`
- Set up [configuration for Mac](https://docs.expo.io/workflow/android-studio-emulator/)
- Open Android Studio, select "Standard" for the "Install Type" inside the wizard
- Go to Preferences > Appearance & Behavior > System Settings > Android SDK. Click on the "SDK Tools" tab and make sure you have at least one version of the "Android SDK Build-Tools" installed.
- Copy the path in the "Android SDK Location". To add Android SDK location to your PATH: in Mac OS terminal, run `vim ~/.zprofile`
- Add following command for the zprofile: change the {YOUR_USERNAME} to your username
  `export ANDROID_SDK=/Users/{YOUR_USERNAME}/Library/Android/sdk`
  `export PATH=/Users/{YOUR_USERNAME}/Library/Android/sdk/platform-tools:$PATH`
- Run `source .zprofile` to save the changes
- After this, make sure you can run command `adb` (Android Debug Bridge). ADB is a tool in Android SDK to manage Android simulator and Android device

- Now you can set up a virtual device. Click "Configure", then "AVD Manager" -> "+ Create Virtual Device" to create and run an Android emulator
- When the emulator is running, go to Metro Bundler, click on `Run on Android device/emulator`
- Make sure you have grand the access of Android emulator on the System Preferences settings

## Run on iOS device

- Download Expo from App Store
- Go to the Metro Bundler, you will see a QR code on the left hand side
- Open the camera on your device to scan the QR code, it will direct to expo and open the app

## Fast key to get developer menu

- Mac for Android: press `Command` + `M`
- Mac for iOS: press `Control` + `D`, then press `Command` + `D`
- On iOS device: Shaking your iOS device

## Who to talk to ?

The purpose is mainly for sharing and for anyone who is interested in playing with React Native. Feel free to clone the repo and reach Tin for any suggestions and ideas :)
