# My Universal React Project

<p>
  <!-- iOS -->
  <a href="https://itunes.apple.com/app/apple-store/id982107779">
    <img alt="Supports Expo iOS" longdesc="Supports Expo iOS" src="https://img.shields.io/badge/iOS-4630EB.svg?style=flat-square&logo=APPLE&labelColor=999999&logoColor=fff" />
  </a>
  <!-- Android -->
  <a href="https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=blankexample">
    <img alt="Supports Expo Android" longdesc="Supports Expo Android" src="https://img.shields.io/badge/Android-4630EB.svg?style=flat-square&logo=ANDROID&labelColor=A4C639&logoColor=fff" />
  </a>
  <!-- Web -->
  <a href="https://docs.expo.dev/workflow/web/">
    <img alt="Supports Expo Web" longdesc="Supports Expo Web" src="https://img.shields.io/badge/web-4630EB.svg?style=flat-square&logo=GOOGLE-CHROME&labelColor=4285F4&logoColor=fff" />
  </a>
</p>






## 🚀 How to use

- Install packages with `yarn` or `npm install`.
  - If you have native iOS code run `npx pod-install`
- Run `yarn start` to start the bundler.
- Open the project in a React runtime to try it:
  - iOS: [Client iOS](https://itunes.apple.com/app/apple-store/id982107779)
  - Android: [Client Android](https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=blankexample)
  - Web: Any web browser

## 🚀 How to run on emulator (iOS and Android)

1. iOS(macOS):
  - Go to your project directory.
  - Run `yarn iOS` will start the expo developer tools on a port from the browser window.
  - In Split seconds you will see expo automatically open the app in the simulator.
  - On the first instance expo will be installing the "Expo Go" app on the simulator.
  - After the successful installation of "Expo Go" you will see the app(project) in the simulator.
  - If expo fails to open/ recognize the iOS simaltor on your mac, you can go to the browser window on which expo bundler is present and manually run the app on the simulator by clicking "run on iOS simulator".

2. Android:
  - Go to your project directory.
  - Run `yarn android` will start the the expo developer tools on a port from the browser window.
  - You will have to keep the andorid emulator open and running.
  - Once the emulator is ready, you can go to the browser window on which expo bundler is present and manually run the app on the emulator by clicking "run on Android emulator".
  - On the first instance expo will be installing the "Expo Go" app on the emulator.
  - After the successful installation of "Expo Go" you will see the app(project) in the emulator.

- Open the project in a React runtime to try it:
  - iOS: [Client iOS](https://itunes.apple.com/app/apple-store/id982107779)
  - Android: [Client Android](https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=blankexample)
  - Web: Any web browser

## Running the app on real device

## About the project

- The project is built using Expo[React Native].
- It is a universal app that can be run on iOS, Android and Web.
- The app basically has 2 screens.
  - The first screen is the home screen.
  - The second screen is the details screen.
  - The details screen is the screen that is shown when the user clicks on a list item.
- The home screen ha 3 sections.
  - The first section basically displays all types of items(video and article) in a   card view and the section is named Trending.
  - The second section is the Article section which displays only articles.
  - The third section is the Video section which displays only Videos.

- The details screen displays two types of content. If the user clicks on a article item, the details screen will display the article content with a description.
  - If the user clicks on a video item, the details screen will display the video content.

- The home screen has a search bar that can be used to search for any item of a particular section.

- The seach bar gets rest if the user navigates to a different sections of a home screen.

