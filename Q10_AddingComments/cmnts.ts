// Function to greet someone by name
function greet(name: string): string {  // Defines function with name parameter (string) and string return type
    return `Hello, ${name}!`;              // Uses template literals for dynamic greeting
  }
  
  const user = "M HammadurRehman";               // Declares variable user with type string
  console.log(greet(user));           // Calls greet function with user and logs the result