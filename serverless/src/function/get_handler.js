const {
    getAllConversations,
    getConversationById,
 } = require("./controller");
 
 exports.handler = async (event, context) => {
    context.callbackWaitsForEmptyEventLoop = false;
 
    // Parse the incoming event and route to the appropriate function
    const { httpMethod, pathParameters } = event;
 
    // Extract uid and id from pathParameters
    const { uid, id } = pathParameters || {};
 
    switch (httpMethod) {
       case "GET":
          if (uid && !id) {
             return await getAllConversations(uid);
          }
          if (uid && id) {
             return await getConversationById(id);
          }
          break;
    }
 
    return {
       statusCode: 400,
       body: JSON.stringify({ message: "Invalid request" }),
    };
 };
 