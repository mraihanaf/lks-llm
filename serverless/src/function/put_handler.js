const {
    updateConversation,
 } = require("./controller");
 
 exports.handler = async (event, context) => {
    context.callbackWaitsForEmptyEventLoop = false;
 
    // Parse the incoming event and route to the appropriate function
    const { httpMethod, pathParameters, body } = event;
    const { uid, id } = pathParameters || {};
 
    switch (httpMethod) {
       case "PUT":
          if (uid && id) {
             return await updateConversation(id, JSON.parse(body));
          }
          break;
    }
 
    return {
       statusCode: 400,
       body: JSON.stringify({ message: "Invalid request" }),
    };
 };
 