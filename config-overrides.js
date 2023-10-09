const {alias} = require ("react-app-rewire-alias")
const path = require("path")

module.exports = function override(config,env){
	alias({
		"@pages": path.resolve(__dirname,"src/pages"),
		"@components":path.resolve(__dirname,"src/components"),
		"@styles":path.resolve(__dirname,"src/styles"),
		"@assets":path.resolve(__dirname,"src/assets")
	})(config,env)
	return config
}