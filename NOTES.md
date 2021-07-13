benefits of using serverless: Security, Durability, Availability, Scalability, Reliability
packages: auth0.com, 
aws: dynamodb, cloudformation, sqs, ses, dlq(dead letter queue)

to login into aws cli type `aws configure`

to create sls type `sls create --name auction-service --template-url https://github.com/codingly-io/sls-base`

to deploy serverless (sls) app type `sls deploy -v`

to see resources used, go to AWS dashboard and search for CloudFormation, -> Stacks -> auction-service

to remove app type `sls remove -v`

to watch logs type:
    -tail `sls logs -f processAuctions -t`
    -all `sls logs -f processAuctions`
    -last minute `sls logs -f processAuctions --startTime`

how to execute lambda functions manually `sls invoke -f processAuctions -l`

we can use outputs to send variable from one stack to another (bulletproof feature)
