import r from 'rethinkdbdash';
const rethinkdb = r({port: 39725});

const dbConnect = (req, res, next) => {
	req.database = rethinkdb; 
	next(); 
};

export function rethink() {
	return rethinkdb;
}

export default dbConnect;
