const AWS = require('aws-sdk');
const db = new AWS.DynamoDB.DocumentClient();
const { nanoid } = require('nanoid');

exports.handler = async (event) => {

  const {gear, type} = JSON.parse(event.body);

  try {

    const id = nanoid();

    await db.put({
      TableName: 'music-item-table',
      Item: {
        id: id,
        gear: gear,
        type: type,
      }
    }).promise();

    return {
      statusCode: 201,
      body: JSON.stringify({ message: 'Music gear item created successfully', id: id }),
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
    };
  }
};