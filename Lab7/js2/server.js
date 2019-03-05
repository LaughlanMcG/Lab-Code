const { createServer } = require("http")
const PORT = process.env.PORT || 5000;
const server = createServer();


server.on("request", (request, response) => {
	response.end("Hello World!");
});

server.listen(PORT, () => {
	console.log('Starting server at port ${PORT}')
});