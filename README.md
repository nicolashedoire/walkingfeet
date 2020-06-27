### APACHE Script

````
cd /etc/apache2/sites-enabled/
````

edit https file and add this lines

````
<Directory "/var/www/html">
  #######################################################################
  # GENERAL                                                             #
  #######################################################################

  # Make apache follow sym links to files
  Options +FollowSymLinks
  # If somebody opens a folder, hide all files from the resulting folder list
  IndexIgnore */*


  #######################################################################
  # REWRITING                                                           #
  #######################################################################

  # Enable rewriting
  RewriteEngine On

  # If its not HTTPS
  RewriteCond %{HTTPS} off

  # Comment out the RewriteCond above, and uncomment the RewriteCond below if you're using a load balancer (e.g. CloudFlare) for SSL
  # RewriteCond %{HTTP:X-Forwarded-Proto} !https

  # Redirect to the same URL with https://, ignoring all further rules if this one is in effect
  RewriteRule ^(.*) https://%{HTTP_HOST}/$1 [R,L]

  # If we get to here, it means we are on https://

  # If the file with the specified name in the browser doesn't exist
  RewriteCond %{REQUEST_FILENAME} !-f

  # and the directory with the specified name in the browser doesn't exist
  RewriteCond %{REQUEST_FILENAME} !-d

  # and we are not opening the root already (otherwise we get a redirect loop)
  RewriteCond %{REQUEST_FILENAME} !\/$

  # Rewrite all requests to the root
  RewriteRule ^(.*) /

</Directory>
````

and restart Apache Server 

````
sudo service apache2 restart
````

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
