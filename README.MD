
# Input Consulting - Currency Converter
Christmas present from us to you

## Machine Setup

This app is built on node.js, which has a couple of prerequisites you must install first. If you have previously setup your machine for node.js, you can skip this step.

* Install NodeJS >= 8.x
    * You can [download it here](https://nodejs.org/en/).
* Install a Git Client
    * Here's [a nice GUI client](https://desktop.github.com).
    * Here's [a standard client](https://git-scm.com).

Once you have the prerequisites installed, you need a couple of packages. From the command line, use npm to install them globally:

```
npm install gulp -g
npm install aurelia -g
```
Optional package manager
```
npm install yarn -g
```

> Note: Always run commands from a Bash prompt. Depending on your environment, you may need to use `sudo` when executing npm global installs.

## Application Setup

Once you've setup your machine (or if it's been previous setup), you simply need to install the dependencies. From within the app folder, execute the following command:

```
npm install
```
or
```
yarn install
```

## Running The App

To run the app, execute the following command from within the app folder:

```
au run --env dev --watch
```
## Add this to your phone

On your phone browse to the page http://localhost:9000/ 
Your phone must obviously be on the same network as your computer.

Thats it, the app is cached. You can also add it to your homescreen. On iPhone's just click the share button at the bottom of the browser and choose "Add to homescreen". That will make the app more appable on your Phone :)

## Application Cache

This app makes use of the Application Cache to work offline. The cache manifest is in the file offline.manifest. During development it's advisable to disable this feature in index.html.
Since the app will always load from cache no matter what, the only way to force an update is to change the content in the offline.manifest file. Easy way is to change the comment line with the date and time.

This should be sorted automatically in the build process.
