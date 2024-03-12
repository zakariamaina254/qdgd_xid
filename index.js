const uuidlib= require('uuid');
  
function generateId() {
	        return uuidlib.v3('d3M1KbRpPS', uuidlib.v4());
	}

module.exports = generateId
