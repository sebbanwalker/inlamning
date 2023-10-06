const AWS = require('aws-sdk');
const db = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {

  const { gearId } = event.pathParameters;
  const { gear } = JSON.parse(event.body);

  console.log('Received gearId:', gearId);

  try {
    await db.update({
      TableName: 'music-item-table',
      Key: { id: gearId },
      ReturnValues: 'ALL_NEW',
      UpdateExpression: 'set #DYNOBASE_gear = :gear',
      ExpressionAttributeNames: {
        '#DYNOBASE_gear': 'gear'
      },
      ExpressionAttributeValues: {
        ':gear': gear
      }
    }).promise();

    return {
      statusCode: 200,
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Could not update.' }),
    };
  }
};
