const CracoAlias = require("craco-alias"); // here we import the plugin we want to add "craco-alias"

module.exports = {
    plugins: [ // here we have an array of plugins we want to set one plugin right now.
        {
            plugin: CracoAlias, // here we put the plugin 
            options: { // object of it's options 
                source: 'tsconfig', // src for config file 
                baseUrl: './src', // base url ./src
                tsConfigPath: './tsconfig.paths.json' //this is the paths we want to make alias for it.
            } 
        }
    ]
}