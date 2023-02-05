exports.handler = async () => {
    return {
        statusCode: 200,
        body: JSON.stringify({
            name: 'GRACE',
            age: 28,
            email: 'nej1044@naver.com'
        })
    }
}