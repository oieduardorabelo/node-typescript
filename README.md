# node-typescript

Template for bootstrap projects with Node.js and TypeScript.

Example for my Medium article [Node.js e TypeScript: O como e com testes](https://medium.com/@oieduardorabelo/node-js-e-typescript-o-como-e-com-testes-7affce2c02a8)

## Debugging

After starting the app with `npm run dev:debug`, you've two options:

1. For in-editor debug with VSCode, configuration already included in `.vscode/launch.json`. It will attach the debbuger to the running process.
2. You can look at `chrome://inspect` to open a debugger panel using Google Chrome DevTools.

## Screenshots

- Starting the app with `npm run dev:debug`

<img src="https://user-images.githubusercontent.com/829902/54861576-74f66180-4d7f-11e9-9498-4871f16ea4d9.png" width="80%" />

- Go to the "Debug" panel in VSCode, press the green arrow for "Node: Nodemon" configutation and select your process

<img src="https://user-images.githubusercontent.com/829902/54861537-ad497000-4d7e-11e9-8e23-19b655880fb9.png" width="80%" />

- VSCode will attach the debbuger and show you a floating panel

<img src="https://user-images.githubusercontent.com/829902/54861552-d538d380-4d7e-11e9-9266-5aba7f688699.png" width="80%" />

- Add a breakpoint anywhere and have fun debugging!

<img src="https://user-images.githubusercontent.com/829902/54861581-9b1c0180-4d7f-11e9-8030-0054f0405783.png" width="80%" />

- On Chrome, you can go to `chrome://inspect` and click `inspect` on the "Remote Target" section pointing to your server

<img src="https://user-images.githubusercontent.com/829902/54861670-32ce1f80-4d81-11e9-982f-80560d8eaa54.png" width="80%" />

- Add a breakpoint anywhere and have fun debugging!

<img src="https://user-images.githubusercontent.com/829902/54861679-5e510a00-4d81-11e9-8545-a14ec1b0f87d.png" width="80%" />
