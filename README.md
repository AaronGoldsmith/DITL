# DITL

### A backstory:
I started making a similar project in 2018 and never finished it.

I ripped out a bunch of that code to make this beautiful beast

### Setup:
You need to be able to run **npm scripts**

(Clone repo, load in the moment module)
```sh
 $  git clone https://github.com/AaronGoldsmith/DITL
 $  cd DITL
 $  npm i --save-dev
```

If you want to install the package to run it anywhere on your computer,
>>  `ditl -n [your sweet day]` 
or
>>  `ditl finished this stuff`


you can link the node package so your local node_modules directory
```sh
$  npm link
```
*note* you may have to run this with sudo if you don't have user permissions setup for your /usr/bin folder
*quotes are optional
### Usage:
Using node
```sh
node index.js -n ["journal title" ]
node index.js lets log one
```
Running ditl
```sh
ditl -n ["Delightful Days"]
ditl "im ready to leave for work"
```

### NOTES:
If you don't put your input in quotes, then you lose out on some punctuation.
(It breaks when you use apostrophes or question marks)

*It does however work entirely the same without using quotes*

### DEMO:

![img](https://i.imgur.com/0g40HEi.gif)
![img](https://i.imgur.com/CD8W1b7.gif)
![img](https://i.imgur.com/LKftDOo.gif)

![img](https://i.imgur.com/F986QJb.png)
