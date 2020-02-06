# Ivengi Foundation X-Y grid template 2020
Ivengi Foundation X-Y grid 2019 uses the ZURB WebApp Template.
**Please open all issues with this template on the main [Foundation for Sites](https://github.com/zurb/foundation-sites/issues) repo.**

This is the official ZURB Template for use with [Foundation for Sites](http://foundation.zurb.com/sites). We use this template at ZURB to deliver static code to our clients. It has a Gulp-powered build system with these features:

- Handlebars HTML templates with Panini
- Sass compilation and prefixing
- JavaScript module bundling with webpack
- Built-in BrowserSync server
- For production builds:
  - CSS compression
  - JavaScript module bundling with webpack
  - Image compression

---

## Table of Contents
   - [Installation / Getting started](#installation--getting-started)
   - [Local development server](#local-development-server)
   - [Deployment](#deployment)
   - [Troubleshooting](#troubleshooting)
   
---

## Installation / Getting started

1. To use this template, your computer needs: 

   * [NodeJS](https://nodejs.org/en/) (Version 6 or greater recommended, tested with 6.11.1, 6.11.4 and 8.12.0) 
   * [Git](https://git-scm.com/) 
   
2. If the above is installed start by cloning this repository to your desired location.

3. Using a terminal cd to the folder you just cloned and run the following command to install all modules and dependencies:

    ```bash
    npm install
    ```

4. When that's finished go into the [package.json](package.json "package.json file") file and change the *name* and *description* on line *2* and *4*: 

    ```
    "name": "default-ivengi-template",
    "version": "1.0.0",
    "description": "Default Ivengi template using the Foundation CLI",
    "main": "gulpfile.babel.js"
    ```
    
    > To fit for your project: 
    
    ```
    "name": "your-project-name",
    "version": "1.0.0",
    "description": "your-project-description",
    "main": "gulpfile.babel.js"
    ```
    > The same goes for the [package-lock.json](package-lock.json "package.json file") file except here you only need to change the name on line *2*.

5. If you already have the design ready for the project, you can start off by setting the defaults for typography and color schemes by going to the [settings.scss](src/assets/scss/_settings.scss "src/assets/scss/_settings.scss") file.
    > `@Line 71` u can find:
    
    ```
    $foundation-palette: (
       primary: #00A5AA,
       secondary: #156869,
       tertiary: #FF9900,
       success: #3adb76,
       warning: #ffae00,
       alert: #cc4b37,
    );
    ```
    
    > Click trough the design and look at the colors, The color u see the most will be your primary color and second most as secondary. If applicable u can set the other colors aswell, Its also possible to add your own. **Dont forget the `,` after the last item.** to use these colors use: 
    ```scss
     $primary-color
     $your-color-name-color
     OR
     get-color(primary);  
     get-color(your-color-name);  
    ```
   
    > For typography on `@Line 87-89` u can find the font family variables:
    ```scss
    $body-font-family: 'Open Sans', Helvetica, Arial, sans-serif;
    $body-font-family-condensed: 'Roboto Condensed', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    $body-font-family-serif: 'Roboto Slab', 'Times New Roman', Georgia, serif;
    ```
    > You can import the fonts you need inside [app.scss](src/assets/scss/app.scss "src/assets/scss/app.scss file") on `@Line 8`.
    
    > on `@Line 146` u can find:
    ```scss
    $header-styles: (
      small: (
        'h1': ('font-size': 32, 'line-height': 55),
        'h2': ('font-size': 32, 'line-height': 55),
        'h3': ('font-size': 22, 'line-height': 36),
        'h4': ('font-size': 18, 'line-height': 22),
        'h5': ('font-size': 16),
        'h6': ('font-size': 16),
      ),
      medium: (
        'h1': ('font-size': 50, 'line-height': 55),
        'h2': ('font-size': 50, 'line-height': 55),
        'h3': ('font-size': 32, 'line-height': 36),
        'h4': ('font-size': 18, 'line-height': 22),
        'h5': ('font-size': 16),
        'h6': ('font-size': 16),
      ),
    );
    ```
    > Here you can set the `font-size`/`fs`, `line-height`/`lh` `margin-top`/`mt` and `margin-bottom`/`mb` for each breakpoint. You can add any breakpoint 
    that exists. look at the design and find the biggest text element this will be your H1 set its properties for the medium or large breakpoint and continue 
    doing this for each Hx element. If there is a mobile design set those properties for the small breakpoint.
 6. What's next?
    - Download some of the assets like the logo and icons from the adobe design, rename them to something appropriate and add them to the assets folder.
    
    - Start building the header and footer partials, they will be used on every page. Keep in mind you can make anything a partial for example a latest news 
    block will most likely not only be on the homepage but also on the detail page of a news post, so u can make this a partial and all you will have to do is call that partials name and done. **No need for copy pasting.**
---

## Local BrowserSynced development server

After having followed the [installation guide](#installation--getting-started "Installation guide") run this command:
```bash
npm run start
```

This wil start a local server, navigate to `http://localhost:8000/` 

---

## Deployment

To build this project run:

```bash
npm start build
```

This will compile all the files and images into a dist folder inside of your project folder these files are not minified yet making you able to debug your JS. run:

```bash
npm run build --production
```

**For minified build making file sizes alot smaller increasing page loading speed.** 

---

## Troubleshooting
- U ran `npm install` and u get a error about har-validator:
  - Delete your [package-lock.json](package-lock.json "package.json file") file

- U are trying to use a foundation plugin but it doesnt do anything:
  - Make sure u used the correct markup check: [Foundation docs](https://foundation.zurb.com/sites/docs/menu.html "Foundation documentation website") for the correct usage of all features in this template.
  
  -  Not all plugins are enabled by default go to: [foundation-explicit-pieces.js](src/assets/js/lib/foundation-explicit-pieces.js "src/assets/js/lib/foundation-explicit-pieces.js") and search for the plugin you are trying to use, make sure its not commented out. 
  (Be-aware there is a `import { plugin_name }` and `Foundation.plugin(plugin_name, 'plugin_name')`).
  
      - If u had to uncomment the plugin go to: [app.scss](src/assets/scss/app.scss "src/assets/scss/app.scss") and also uncomment the `@include plugin_name` for the base styling of the plugin.
  
  - [Google](https://google.nl "www.google.nl") is your best friend. 

- U tested a un-minified build this works fine but when building minified u get an error like: `Uncaught TypeError: Super expression must either be null or a function with BUILD.`
  - Run the following: `npm install gulp-terser --save-dev`
  - And change `$.uglify()` to `$.terser()` in [gulpfile.babel.js](gulpfile.babel.js "gulpfile.babel.js file")
--- 
