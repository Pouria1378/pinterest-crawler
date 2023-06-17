const responseMessage = (statusCode) => {
    const messages = {
        200: {
            statusCode: 200,
            success: true,
            msg: "user crawled successfully",
        },
        400: {
            statusCode: 400,
            success: false,
            msg: "user not found!",
        },
        404: {
            statusCode: 200,
            success: false,
            msg: "Page not found",
        },
        500: {
            statusCode: 500,
            success: false,
            msg: "error crawling user page",
        },
    }

    return messages[statusCode] ||
    {
        statusCode: 500,
        success: false,
        message: "Internal server error",
    }
}

module.exports = responseMessage;