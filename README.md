
# Features
- Easy-to-use CLI
- Handles all modern JS features
- Bundles commonjs and es module formats
- Storybook for documentation (You can use your own documentation library)
- Rollup for bundling
- You can add other depedencies to support your project such as depedency for testing the component. 

# How to use
To run on your development project you can use `npm run dev`. this script already to watch you project if any changes.
```sh
npm run dev 
```

or you can use  `npm run build` to compile the project.
```sh
npm run build 
```

You can run storybook as component documentation by running `npm run storybook`. this script use `start-storybook -p 6006` it's run on 6006 port by default. 
```sh
npm run storybook 
```


# Publish to NPM 
You can publish your library to NPM or Yarn by run the script below.
```sh
npm publish 
```
but, make sure you've loggedin to your npm account. to update the published package you can read more documentation about npm.