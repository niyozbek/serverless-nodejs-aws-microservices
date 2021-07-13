import AWS from 'aws-sdk'

const dynamodb = new AWS.DynamoDB.DocumentClient() 

export async function getEndedAuctions() {
    const now = new Date()
    const params = {
        TableName: process.env.AUCTIONS_TABLE_NAME,
        IndexName: 'statusAndEndDate',
        KeyConditionExpression: '#status = :status AND endingAt <= :now',
        
        ExpressionAttributeNames: {
            // status is keyword(reserved word, therefore # is used)
            '#status': 'status'
        },
        ExpressionAttributeValues: {
            ':status': 'OPEN',
            ':now': now.toISOString()
        },
    }

    const result = await dynamodb.query(params).promise()
    return result.Items
}