#include <bson/bson.h>
#include <mongoc/mongoc.h>
#include <stdio.h>

int main (void)
{

	//sets up struct and variables to store birth date 
	struct tm born = {0};  
  	born.tm_year = 6;
	born.tm_mon = 11;
	born.tm_mday = 9;

  
  
  	//setting up variables 
	mongoc_client_t *client;
    	mongoc_collection_t *collection;
    	char *str;
    	bson_error_t error;

    	mongoc_init ();

	//connects to the cloud database 
    	client = mongoc_client_new ("mongodb+srv://cybergroundcrypt:N6MhrIZQ8USG4yTO@school.ulgnf.mongodb.net/?retryWrites=true&w=majority&appName=School");
    	
    	//gets the specified database and collection 
    	collection = mongoc_client_get_collection (client, "school", "users");

    	//creates the document 
    	bson_t *document = document = BCON_NEW("name", "{",

                      "first", BCON_UTF8("Grace"), "last", BCON_UTF8("Hopper"),

                      "}", "Age", BCON_UTF8("14"), "email", BCON_UTF8("hmhggfox@gmail.com"), 
                      
                      "password", BCON_UTF8("test"), "Date of Birth", BCON_DATE_TIME(mktime(&born) * 1000),
                      
                      "Grade year", BCON_UTF8("8"));
                      
    	//will add the document to the collection 
    	if (!mongoc_collection_insert_one (collection, document, NULL, NULL, &error)) 
    	{
    		fprintf (stderr, "Insert one operation failed: %s\n", error.message);
    	}
    
    
    	//cleaning up 
    	bson_destroy (document);
   	mongoc_collection_destroy (collection);
    	mongoc_client_destroy (client);
    	mongoc_cleanup ();

	//end
    	return EXIT_SUCCESS;
}