# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Meta Quest Support 🥽

This repository sets up an Expo project with Meta Quest (Horizon OS) specific libraries, enabling you to build immersive VR experiences for Meta Quest devices.

The project includes:
- **expo-horizon-core**: Core functionality for Meta Horizon OS
- **expo-horizon-location**: Location services for VR environments
- **expo-horizon-notifications**: Notifications support for Meta Quest

### Running on Meta Quest

Use the following commands to run the app on Meta Quest:

```bash
# Debug build
npm run quest

# Release build
npm run quest:release
```

### Resources

- [React Native Meta Horizon OS Documentation](https://oss.callstack.com/react-native-meta-horizon-os/): Official documentation for React Native Meta Horizon OS
- [How to Add Meta Quest Support to Your Expo App](https://blog.swmansion.com/how-to-add-meta-quest-support-to-your-expo-app-68c52778b1fe): Step-by-step guide for adding Meta Quest support

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
