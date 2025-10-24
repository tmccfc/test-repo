const { MongoClient } = require('mongodb');

// Import necessary libraries

// Connection URL
const url = 'mongodb://localhost:27017';
const dbName = 'myDatabase';

// Function to save data
async function saveData(data) {
    const client = new MongoClient(url);

    try {
        // Connect to the database
        await client.connect();
        console.log('Connected to the database');

        const db = client.db(dbName);
        const collection = db.collection('page1Data');

        // Insert data into the collection
        const result = await collection.insertOne(data);
        console.log('Data saved:', result.insertedId);
    } catch (error) {
        console.error('Error saving data:', error);
    } finally {
        // Close the connection
        await client.close();
    }
}

// Example usage
const page1Data = {
    title: 'Page',
    content: 'This is the content of page 1',
};

saveData(page1Data);