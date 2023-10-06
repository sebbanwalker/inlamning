const AWS = require('aws-sdk');
const db = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
  const { gearId } = event.pathParameters;

  try {
    await db.delete({
      TableName: 'music-item-table',
      Key: { id: gearId }
    }).promise();

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Item deleted successfully' }),
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Item could not be deleted.' }),
    };
  }
};
