# My-build-React

![](./logo.png)

## Install
First, clone the repo via git:
    
```bash
git clone https://github.com/krlls/My-build-React.git your-project-name
```

And then install dependencies.
**ProTip**: Install with [yarn](https://github.com/yarnpkg/yarn) for faster and safer installation

```bash
$ cd your-project-name && yarn
```

## Run

Run these commands:

```bash
$ yarn dev
```

# Build
For build run this command

```bash
$ yarn build
```

## Test
For test run this command

```bash
$ yarn test
```

# Lint
For lint run this command

```bash
$ yarn lint
```

For autocorrection, you can do
```bash
$ yarn lint-fix
```

# Docker 
For build docker image run
>The name of the docker image will be taken from the name of your application in packaje.json
```bash
$ yarn build:docker
```
And run image
```bash
$ yarn run:docker
```
or
```bash
$ docker run -p 80:80 npm_package_name
```
