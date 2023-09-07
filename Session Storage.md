# LocalStorage:

                  LocalStorage is a web storage object to store the data on the user’s computer locally, which means the stored data is saved across browser sessions and the data stored has no expiration time.

## Storage’s methods: 

          1.setItem(): This method is used to add a key and a value to localStorage.

          2.getItem(): This method is used to get an item from localStorage using the key.

          3.removeItem(): This technique is used to delete an item from localStorage based on its key.

          4.clear(): This technique is used to delete all instances of localStorage.

          5.key(): When you supply a number, it aids in the retrieval of a localStorage key.

# Syntax :
 // To store data
localStorage.setItem('Key', 'Value');
 
// To retrieve data
localStorage.getItem('Key ');
 
// To clear a specific item
localStorage.removeItem('Key ');
 
// To clear the whole data stored in localStorage
localStorage.clear()


# SessionStorage:

                       The sessionStorage object stores data only for a session. It means that the data stored in the sessionStorage will be deleted when the browser is closed.A page session lasts as long as the web browser is open and survives over the page refresh.When you open a page in a new tab or window, the web browser creates a new session.

                      If you open multiple tabs or windows with the same URL, the web browser creates a separate sessionStorage for each tab or window. So data stored in one web browser tab cannot be accessible in another tab.When you close a tab or window, the web browser ends the session and clears data in the sessionStorage.

## Storage’s methods:

        1.setItem(name, value) – set the value for a name

        2.removeItem(name) – remove the name-value pair identified by name.

        3.getItem(name) – get the value for a given name.

        4.key(index) – get the name of the value in the given numeric position.

        5.clear() – remove all values in the sessionStorage .

 

 Syntax

// Save data to sessionStorage
sessionStorage.setItem('key', 'value');
 
// Get saved data from sessionStorage
let data = sessionStorage.getItem('key');
 
// Remove saved data from sessionStorage
sessionStorage.removeItem('key');
 
// Remove all saved data from sessionStorage
sessionStorage.clear()
