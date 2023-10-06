const AWS = require('aws-sdk');
const db = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
  try {
    const { Items } = await db.scan({
      TableName: 'music-item-table',
      FilterExpression: "attribute_exists(#DYNOBASE_gear)",
      ExpressionAttributeNames: {
        "#DYNOBASE_gear": "gear"
      }



    }).promise();
    return {
      statusCode: 200,
      body: JSON.stringify(Items),
    };
  }
  
  catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Cannot read.' }),
    };
  }
};
