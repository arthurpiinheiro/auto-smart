<h1 align="center"><img height="150" src="./docs/logo.png" /><br>Webpack 4 TypeScript config</h1>
<p align="center">
  <sub>TypeScript, Babel, SASS... <sub>
</p>

This is my personal Webpack 4 config for single page (index.html) without frameworks. It will be updated as needed.
  
## Installation

Clone this repository and install modules:

```bash
git clone https://github.com/arthurpiinheiro/auto-smart.git
cd auto-smart/app
npm install
```

![](./docs/split.png)

## Commands

Run development mode

```bash
npm run start
```

Run build mode

```bash
npm run build
```

## Features

* TypeScript
* Babel
* CSS/SASS
* Minifying JS & CSS
* Two .js chunks - main.js and vendor.js (modules)

![](./docs/split.png)

## Entry point 

Webpack.common.js

```javascript
{
    watch: true,
    entry: "./src/ts/app.ts",
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    module: {
        rules: [
            {test: /\.scss$/, use: ["style-loader", "css-loader", "sass-loader"]},
            {test: /\.tsx?$/, loader: "babel-loader"},
            {test: /\.tsx?$/, loader: "ts-loader"},
            {enforce: "pre", test: /\.js$/, loader: "source-map-loader"}
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Production',
            template: "./src/index.html"
        }),
    ]
}
```
