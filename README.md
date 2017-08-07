# Simply theme for [Ghost v1](https://github.com/tryghost/ghost/) by @GodoFredoNinja

[![Ghost version](https://img.shields.io/badge/Ghost-1.x.x-brightgreen.svg)](https://github.com/TryGhost/Ghost)
[![Node](https://img.shields.io/node/v/uno-zen.svg)](https://nodejs.org/en/)
[![Donate](https://img.shields.io/badge/donate-paypal-blue.svg)](https://bit.ly/PayPal-GodoFredoNinja)

> Simple and Elegant theme for [Ghost](https://github.com/tryghost/ghost/).

### ⚠ This theme is only compatible with ghost version 1.x.x. — If you want to use in previous versions follow the link 👉 [Simply-Tag-0.02](https://github.com/godofredoninja/simply/tree/0.0.2)

### Free theme for Ghost

Hello, I created this theme for Ghost with inspiration from [Medium](https://medium.com/).
It is available for free so you can use on your site. It is strictly forbidden to use it for commercial use. If you have any suggestions to improve the theme,  you can send me a tweet [@GodoFredoNinja](https://goo.gl/y3aivK)

## ❤ Please, help me with a small donation on [Paypal](https://bit.ly/PayPal-GodoFredoNinja). It'll help motivate me to update the theme with many improvements.
[![](./donate.gif)](https://bit.ly/PayPal-GodoFredoNinja)

![](./screenshot.png)


## Demo
You can see Simply in action on my Page [Demo](https://goo.gl/V7moIY)

## Featured
- Responsive layout
- Blog navigation
- Page 404 (Multiple faces emoticons)
- Page subscribe
- Pagination Infinite Scroll
- Cover images for blog, tag and author
- links to followers in social media
- Related Articles (6 articles)
- Video Post Format => add tag `#video-post-format`
- Image post Format => add tag `#image-post-format`
- YouTube Subscribe Button in video post Format
- 5 articles latest posts in the (author - tag) section sidebar
- Previous and next button in the Post
- Has button to save the link on Facebook
- Support for comments (Facebook or Disqus)
- Support for counter comments (Facebook or Disqus)
- Buttons to share the article (Facebook - Twitter - Reddit - Linkedin - Pinterest - Whatsapp)
- Counter shared articles on Facebook
- Sticky content in the sidebar
- YouTube, Vimeo, kickstarter, Facebook, dailymotion, Spotify, soundcloud => Responsive
- Lazy image loading for better performance only in backgrounds
- Code syntax [Prismjs](http://prismjs.com/index.html#languages-list) Supported all syntax.

> **To have the best design is recommended to have 12 or 14 articles per page.**

## Web Browser Support for Simply
Simply supports the following web [browsers](http://caniuse.com/#search=flexbox).

## Theme development

Simply uses [Webpack](https://webpack.github.io/) as a build tool and [npm](https://www.npmjs.com/) to manage front-end packages.

### Font Icons
Icons generated by [Icomoon](https://icomoon.io/app/#/select) and import  `src/fonts/selection.json`

### Install dependencies

From the command line on your host machine (not on your Vagrant development box), navigate to the theme directory then run `yarn`:

```shell
# @ themes/simply
$ yarn
```

You now have all the necessary dependencies to run the build process.

### Build commands

* `yarn run start` — Compile assets when file changes are made, start Browsersync session
* `yarn run build` — Compile and optimize the files in your assets directory
* `yarn run build:production` — Compile assets for production

#### Additional commands

* `yarn run rmassets` — Remove your `assets/` folder
* `yarn run lint` — Run eslint against your assets and build scripts

### Using Browsersync

To use Browsersync you need to update `devUrl` at the bottom of `src/config.json` to reflect your local development hostname.

If your local development URL is `https://project-name.dev`, update the file to read:
```json
...
  "devUrl": "https://project-name.dev",
...
```

By default, Browsersync will use webpack's [HMR](https://webpack.github.io/docs/hot-module-replacement.html), which won't trigger a page reload in your browser.

If you would like to force Browsersync to reload the page whenever certain file types are edited, then add them to `watch` in `src/config.json`.

```json
...
  "watch": [
    "**/*.hbs"
  ],
...
```

## Documentation
To continue with the configuration [read](https://github.com/GodoFredoNinja/simply)

### Credits
- [Normalize](https://necolas.github.io/normalize.css/)
- [Jquery.ghostHunter](https://github.com/jamalneufeld/ghostHunter)
- [Prismjs](http://prismjs.com/)
- [sticky-kit](https://github.com/leafo/sticky-kit)
- [lunr.js](https://github.com/olivernn/lunr.js)
- [zoom.js](https://github.com/fat/zoom.js/)
- [jquery-lazyload](http://www.appelsiini.net/projects/lazyload)
- [Fonts](https://fonts.google.com/?selection.family=Droid+Serif:400,700|Source+Code+Pro|Source+Sans+Pro:300,400,600,700&query=Droid+Serif)

## Copyright & License

Copyright (c) 2017 GodoFredoNinja - Released under the [CC BY-NC 4.0](LICENSE).
