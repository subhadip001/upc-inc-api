//write the code for the user controller here.

//Register a user => /api/v1/register
exports.testController = (req, res, next) => {
    res.status(200).json({
        success: true,
        message: 'This is a test controller'
    })
}
