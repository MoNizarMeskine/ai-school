#include <bson/bson.h>
#include <mongoc/mongoc.h>
#include <stdio.h>

int main(int argc, char *argv[]) {
    if (argc < 6) {
        printf("Error: Please provide first name, last name, age, email, and password.\n");
        return 1;
    }

    char *firstName = argv[1];
    char *lastName = argv[2];
    char *age = argv[3];
    char *email = argv[4];
    char *password = argv[5];

    mongoc_client_t *client;
    mongoc_collection_t *collection;
    bson_error_t error;
    mongoc_init();

    // Connect to MongoDB
        	client = mongoc_client_new ("mongodb+srv://cybergroundcrypt:N6MhrIZQ8USG4yTO@school.ulgnf.mongodb.net/?retryWrites=true&w=majority&appName=School");

    collection = mongoc_client_get_collection(client, "school", "users");

    // Create a BSON document
    bson_t *document = BCON_NEW(
        "firstName", BCON_UTF8(firstName),
        "lastName", BCON_UTF8(lastName),
        "age", BCON_UTF8(age),
        "email", BCON_UTF8(email),
        "password", BCON_UTF8(password)
    );

    // Insert the document into MongoDB
    if (!mongoc_collection_insert_one(collection, document, NULL, NULL, &error)) {
        printf("Error inserting document: %s\n", error.message);
    } else {
        printf("User %s %s signed up successfully!\n", firstName, lastName);
    }

    bson_destroy(document);
    mongoc_collection_destroy(collection);
    mongoc_client_destroy(client);
    mongoc_cleanup();

    return 0;
}