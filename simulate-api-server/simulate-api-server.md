# Simulate API server
### Overview: 
Working with API server can be a headache, especially if the server itself is under development.
Working with a *json server* can help you start client development withput waiting for server,
And also be used for verfiying the API itself (the server dev can test the *json server* and see what you're expecting to get)

### Process in general: 
set json server up and running. use proxy config file for easy switch between real API server and *json server* (method here suits *angular-cli* projects)

### Step 1 : set up json server
install globally: `npm install -g json-server`
Create a `db.json` file (to be serve by the *json-server*. see [example](https://github.com/Webiks/ng2tips/tree/master/simulate-api-server/db.json).

in the file set your endpoint and data key-values, like:
```javascript
{
	"items": [array of items....]
	"users": [array of users....]
}
```
Finally run the server: `json-server db.json`
if you need some help - [see how to set it up](http://www.betterpixels.co.uk/projects/2015/05/09/mock-up-your-rest-api-with-json-server/)
It's also support [data relationship](https://www.npmjs.com/package/json-server#relationships) and other cool features.

### Step 2 (if you're using angular cli): write [proxy config](https://github.com/angular/angular-cli#proxy-to-backend) files
*files should either be at the same directory as package.json, or - add your config path to step 3*
for this example - all API requests url will be "/api/..." , local json-server is serving localhost:3000 and real server at 190.0.0.1:8081 
create a file named `json-server-proxy.conf.json`:

```javascript
{
	"/api" {
    	"target": "http://localhost:3000",
		"pathRewrite": {
			"api": ""
		}
	}
}
```
create a file named `api-server-proxy.conf.json`:

```javascript
{
	"/api" {
    	"target": "190.0.0.1:8081"
	}
}
```

### Step 3 : edit package.json - add proxy config to npm scripts

```javascript
"scripts": {
	"dev": "ng serve --proxy-config json-server-proxy.conf.json",
	"start": "ng serve --proxy-config api-server-proxy.conf.json"
}

now you can run:
`npm run dev` to start app working with your local json-server
`npm start` to start app working with the actual api-server

Happy Hacking!
