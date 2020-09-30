//const dbuser = 'abcd';
//const dbpassword = 'abcd12';
const dbuser = 'mccollins';
const dbpassword = 'Passion007!';

//const MONGODB_URI = `mongodb://${dbuser}:${dbpassword}@ds125453.mlab.com:25453/mern-example`;
//const MONGODB_URI = `mongodb://${dbuser}:${dbpassword}@xpqes.mongodb.net:27017/mern-example`;
//const MONGODB_URI = `mongodb+srv://mccollins:Passion007!@first-cluster.xpqes.mongodb.net:27017/mern-example?retryWrites=true&w=majority`

const MONGODB_URI = `mongodb://mccollins:Passion007!@first-cluster-shard-00-00.xpqes.mongodb.net:27017,first-cluster-shard-00-01.xpqes.mongodb.net:27017,first-cluster-shard-00-02.xpqes.mongodb.net:27017/<dbname>?ssl=true&replicaSet=atlas-5vbr2a-shard-0&authSource=admin&retryWrites=true&w=majority`
module.exports = MONGODB_URI;

/*const MONGODB_URI = `mongodb://${dbuser}:${dbpassword}@first-cluster.mlab.com:25453/mern-example`;
mongodb+srv://first-cluster.xpqes.mongodb.net/<dbname>" --username mccollins

const MONGODB_URI = `mongodb+srv://mccollins:Passion007!@first-cluster.xpqes.mongodb.net/mern-example?retryWrites=true&w=majority`
*/
