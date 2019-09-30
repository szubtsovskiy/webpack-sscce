# webpack-sscce
An app showcasing a problem with developing an Elm-powered MPA application with Webpack

## Get started
* `npm install`
* `npm run watch` - dev part
* `npm start` - public part

Going to `http://localhost:3333` you'll see links to three pages, each importing a Webpack-generated bundle.

Change string returned by `view` function in `elm/One.elm` and save the file. 
You'll see three times "Started compiling Elm.." in terminal window where `watch` script is running, which means that all three apps are being rebuilt. 
In case of more bundles with larger apps this is taking decent time on each change.

I am looking for a solution to this as I want only parts I change to be built.  
  
