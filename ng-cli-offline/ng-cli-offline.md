# Angular-Cli Offline
### Purpose: Install  (locally or globally) and work with angular-cli offline
### Process in general: Cache your packages, copy the cache folder to the offiline machine, then force npm to use that cache folder instead of accessing the internet.

There is a [Post] on this subject.

### Step 1 : Cache it
From terminal: 
You may clean the cache befor we start (this step is optional, in case you want the minimal code to migrate)
```bash
npm cache clean 
```

than simply make npm cache angular-cli by installing it and start a nw project (in any folder you choose)
```bash
npm install angular-cli -g
ng new dummyproject
```

### Step 2: Move it
Copy your cache folder and move it to offline machine. the [location](https://docs.npmjs.com/cli/cache#cache) of it depend on your OS.
Note: nodejs should be installed on the offline machine as well

### Step 3: Install it 
Copy cache folder (in this example: "my_cache_folder") to a folder in your offline machine (in this example: "my_project")
From the terminal change the working directory to my_project and run the following command:
```bash
npm i angular-cli --cache my_cache_folder --cache-min 999999999 --no-shrinkwrap
```
(for installing globally, add the "-g" flag)

### Step 3 alternative: Set permanent cache (User level) and install normally 
You can copt and edit the .npmrc file (in this folder) or simply type the following command on terminal:

set reference to cache folder (can be skipped if you use the npm [default cache location](https://docs.npmjs.com/cli/cache#cache))
```bash
npm config set cache PATH_TO_CACHE_FOLDER
```

Now add the other configs
```bash
npm config set cache min 999999999
npm config shrinkwrap false
```
