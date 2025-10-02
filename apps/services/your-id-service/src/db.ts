import  mongoose  from 'mongoose';

const {
   MONGO_INITDB_ROOT_USERNAME,
   MONGO_INITDB_ROOT_PASSWORD,
   MONGO_INITDB_DATABASE,
   AUTH_SOURCE
} = process.env

const DB_URI = `mongodb://${MONGO_INITDB_ROOT_USERNAME}:${MONGO_INITDB_ROOT_PASSWORD}@localhost:27017/${MONGO_INITDB_DATABASE}?authSource=${AUTH_SOURCE}`;

function connectDataBase() {
    mongoose.set('strictQuery', false);

    mongoose.connect(DB_URI)
        .then((db) => {
            console.log('[Server]:', `Connected to ${db.connection.name} database on ${db.connection.host}:${db.connection.port}`);
        })
        .catch((error: any) => {
            console.error('[Server]:', 'Database connection error:', error);
        });
}

export { connectDataBase };
