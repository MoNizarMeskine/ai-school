#include <bson/bson.h>
#include <mongoc/mongoc.h>
#include <stdio.h>
#include <stdbool.h>

int main() 
{
    // Setting up the variables 
    mongoc_client_t *client;
    mongoc_collection_t *collection;
    bson_error_t error;

    mongoc_init();

    // Connects to the database 
    client = mongoc_client_new("mongodb+srv://cybergroundcrypt:N6MhrIZQ8USG4yTO@school.ulgnf.mongodb.net/?retryWrites=true&w=majority&appName=School");
    
    // Gets the specified database and collection 
    collection = mongoc_client_get_collection(client, "school", "users");

    // Sets up the query 
    bson_t *filter = BCON_NEW("email", BCON_UTF8("hmhggfox@gmail.com"), "password", BCON_UTF8("test"));
    
    // Will check for instances that match the query 
    mongoc_cursor_t *results = mongoc_collection_find_with_opts(collection, filter, NULL, NULL);

    const bson_t *doc;
    
    // Flag to track if any result is found
    bool found = false;  

    // Will go through the result 
    while (mongoc_cursor_next(results, &doc)) 
    {
        // Entering this loop means there is a document which matches the query 
        found = true;  
        printf("true");
        break;
    }

    if (mongoc_cursor_error(results, &error))
    {
        fprintf(stderr, "Error getting results: %s\n", error.message);
    } 
    else if (!found) 
    {
        printf("No matching documents found.\n");
    }

    // Cleanup
    mongoc_cursor_destroy(results);
    bson_destroy(filter);
    mongoc_collection_destroy(collection);
    mongoc_client_destroy(client);
    mongoc_cleanup();

    return 0;
}
