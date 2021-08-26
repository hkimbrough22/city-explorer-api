function notFound(request, response) {
    //Saw the Date.now() in Joe Ivans code and wanted to use it as well
    //Ended up using this response: https://stackoverflow.com/a/66580009
    console.error(`${new Date().toLocaleString() + ''}: Route Not Found`);
    response.status(404).send(`${new Date().toLocaleString() + ''}: Address Not Found`);
};

module.exports = notFound;