type LoginCredentials =
{ username: string;  
password: string; }

const validUser : LoginCredentials = 
{ username: "standard_user",  
password: "secret_sauce",
 }

 function formatUsername (username:  string) : string 
{ return "User: " + username }

type SearchFilter = {
 query: string; 
maxResults: number | undefined; 
}

const myFilter: SearchFilter = {
 query: "laptop", 
maxResults: 10,
}