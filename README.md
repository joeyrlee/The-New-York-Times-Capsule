# The New York Times Capsule
A time capsule app for visiting and getting recommendations from past The New York Times Best Sellers lists

<img src="TNYTC Small Mobile SS.png" title="Small Mobile Rendering" />
<img src="TNYTC 850px+ SS.png" title="Normal/Large Monitor Rendering" />



### Getting Started
If you'd like to use this application, you'll simply need to obtain an API key to communicate with the New York Times Books api, which you can do so here:

1. http://developer.nytimes.com/signup

Once secured, plug in your key to config/config.example.js (replace API_KEY_HERE with the key, keeping the single quotes), change the file name to just config.js, and save.

Next open your terminal, navigate to the project folder, and type in the following instructions:

```javascript
yarn install (or npm install)
```

Then run 
```javascript
yarn run start (or npm run start)
```

Once completed, simply open your browser and navigate to the address http://127.0.0.1:3000 and enjoy!
