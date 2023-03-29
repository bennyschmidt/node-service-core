This project was bootstraped with [`node-service-core`](https://github.com/bennyschmidt/node-service-core).

## Full Stack Example

#### Create a new service

In `/index.js`:

```javascript
const Services = {
  "Example": {} // add your new service
};
```

In `/src/services/example/index.js`:

```javascript
const { http } = require('node-service-library');

// Import your API endpoints
const { hello } = require('./api');

// Bind them to HTTP method handlers (declarative)
module.exports = http({
  GET: {
    hello
  },
  POST: {},
  PUT: {},
  DELETE: {}
});
```

In `/src/services/example/api/hello/index.js`:

```javascript
// Implement the new API response
module.exports = () => ({ 
  message: 'Hello world :)' 
});
```
#### Create a new app

In `/index.js`:

```javascript
const Apps = [
  "/",
  "mycoolapp" // Add your new front-end app
];
```

In `/src/apps/mycoolapp/index.html`:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My Cool App</title>
  </head>
  <body>
    <script>
      (async () => {
        const response = await fetch('/example/hello');

        if (response?.ok) {
          const result = await response.json();
           
          // Prints "Hello world :)" to the DOM
          document.write(result.message);
        }
      })();
    </script>
  </body>
</html>
```

Add as many new services, APIs, and front-end applications as you need. 

For serverless setups, functions in the `api/` directory of any service are already modularized and can be moved as-is to AWS Lambda, Vercel serverless, etc.

## Node Service Library

- [Components](https://github.com/bennyschmidt/node-service-library#components)

- [Usage](https://github.com/bennyschmidt/node-service-library#usage)

- [REST APIs](https://github.com/bennyschmidt/node-service-library#rest-apis)

- [Scalability](https://github.com/bennyschmidt/node-service-library#scalability)
