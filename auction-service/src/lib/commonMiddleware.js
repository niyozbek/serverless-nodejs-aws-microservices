import middy from '@middy/core'
import httpJsonBodyParser from '@middy/http-json-body-parser'
import httpEventNormalizer from '@middy/http-event-normalizer'
import httpErrorHandler from '@middy/http-error-handler'

export default handler => middy(handler)
    .use([
        // no need for JSON.parse
        httpJsonBodyParser(),
        // reduce room for errors, less if statements
        httpEventNormalizer(),
        // error handling smooth and clean
        httpErrorHandler()
    ])