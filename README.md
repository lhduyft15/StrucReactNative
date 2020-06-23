# StrucReactNative

##How to use this project:
- Clone this project
- Cd project folder
- run npm install 
- react-native run-android for Android | react-native run-ios for IOS

#Extension

##Structure react native project

This project base on atomic design to build on a basic structure composed of 5 distinct stages working together
to create interface design system.
The five stages of atomic design are:

1.Atoms are UI elements that can’t be broken down any further
and serve as the elemental building blocks of an interface.

2.Molecules are collections of atoms that form relatively simple UI components.

3.Organisms are relatively complex components that form discrete sections of an interface.

4.Templates place components within a layout and demonstrate the design’s underlying content structure.

5.Pages apply real content to templates and articulate variations to demonstrate the final UI
and test the resilience of the design system.


##How to link files together:

Add package.json file at folder with content:
{"name":"folder name"}

=> Files anywhere in project can interract with files in this folder by import filename from "foldername/filename"
However,you can't use [ ctrl + click on link ] to access to file (I use VS Code)
Therefore, you must add create a jsconfig.json file in your project, then copy and paste this lines:

{
    "compilerOptions": {
      "baseUrl": ".",
      "paths": {
        "assets/*": ["src/assets/*"],
        "components/*": ["src/components/*"],
        "atoms/*": ["src/components/atoms/*"],
        "molecules/*": ["src/components/molecules/*"],
        "organisms/*": ["src/components/organisms/*"],
        "navigations/*": ["src/navigations/*"],
        "scenes/*": ["src/scenes/*"],
        "services/*": ["src/services/*"],
        "styles/*": ["src/styles/*"],
        "utils/*": ["src/utils/*"]
      },
      // "target": "ES6",
      // "jsx": "preserve",
      // "allowSyntheticDefaultImports": true
    }
}


##Referents:
https://atomicdesign.bradfrost.com/chapter-2/#atoms
