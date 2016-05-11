// Example application demonstrating server-side rendering of gulp built react-toolbox components using react-toolbox-build4server
// ---------------------------------------------------------------------------------------------------------------------

// Start up a HTTP server
var fs = require('fs'),
    http = require('http'),
    React = require('react'),
    ReactDOMServer = require('react-dom/server'),
    server = http.createServer(function (request, response) {

        // Define demo react component
        var component = require('./example').default,
            compiledComponent = ReactDOMServer.renderToString(React.createElement(component), null, 2),
            compiledComponentStyle = fs.readFileSync('./node_modules/react-toolbox-build4server/react-toolbox/style.css').toString(),
            exampleStyle = fs.readFileSync('./example.css').toString();

        // Handle request
        response.end(
            '<html>' +
                '<head>' +
                    '<title>React-Toolbox Server-Side rendered project DEMO</title>' +
                    '<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">' +
                '</head>' +
                '<body>' + '' +
                    '<style>' +
                        exampleStyle + '\r\n\r\n' +
                        compiledComponentStyle +
                    '</style>' +
                    compiledComponent +
                '</body>' +
            '</html>'
        );

    });

// Start HTTP server
server.listen(3001, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", 3001);
});
