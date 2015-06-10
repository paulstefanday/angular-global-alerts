# angular-global-alerts
A global alert system for angular apps using webpack. Import using webpack with babel and less loaders installed. package.json example included in example folder.

# Description
Any http errors create an alert in the top right corner. Default message is 'An error has occured.' or if the http request returned data, format json as { message: 'error message here.' }.

# Usage

Install:
```
npm install angular-global-alerts --save
```

Angular code:
```
angular.module('app', [ require('angular-global-alerts') ])
```

HTML code anywhere inside app:
```
<div flash-message="5000" ></div>  
```

Then do an $http call that fails and see an alert appear.

# Example
1. cd example
2. sudo npm install
3. npm start
4. view http://localhost:1337