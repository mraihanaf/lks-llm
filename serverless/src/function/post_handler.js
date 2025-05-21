const {
    createConversation,
 } = require("./controller");
 
 exports.handler = async (event, context) => {
    context.callbackWaitsForEmptyEventLoop = false;
 
    // Parse the incoming event and route to the appropriate function
    const { httpMethod, pathParameters, body } = event;
 
    // Extract uid and id from pathParameters
    const { uid, id } = pathParameters || {};
 
    switch (httpMethod) {
       case "POST":
          if (uid && !id) {
             const requestBody = JSON.parse(body);
             requestBody.userId = uid; // Ensure userId is set in the request body
             return await createConversation(requestBody);
          }
        break;
    }
 
    return {
       statusCode: 400,
       body: JSON.stringify({ message: "Invalid request" }),
    };
 };
 