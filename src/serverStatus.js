

function getServerStatus(request, response) {
    //Saw the Date.now() in Joe Ivans code and wanted to use it as well
    //Ended up using this response: https://stackoverflow.com/a/66580009
    try {
        response.send(`${new Date().toLocaleString() + ''}: Server is working`);
    } catch (error) {
        console.error(`${new Date().toLocaleString() + ''}: Server is not working and is giving the following error: ${error}`);
        response.status(400).send(`${new Date().toLocaleString() + ''}: Server is not working and is giving the following error: ${error}`);
    }
};

module.exports = getServerStatus;