import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const dbName = 'Clones';
    const collectionName = 'Instagram';

    const URL = process.env.MONGO_URI

    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        const instagramSchema = new mongoose.Schema({
            username: String,
            post: String,
            likes: Number
        });

        // Access the Instagram collection
        const Instagram = mongoose.model('Instagram', instagramSchema, collectionName);
        console.log('Database connected successfully');
        return Instagram;
    } catch (error) {
        console.log('Error while connecting to the database ', error);
        throw error;
    }
};

export default Connection;