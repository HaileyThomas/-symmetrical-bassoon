// create variable to hold db connection
let db;
// establish a connection to IndexedDB called 'symmetrical-bassoon' and set it to version 1
const request = indexedDB.open('symmetrical-bassoon', 1);

// this event will emit if the database version changes
request.onupgradeneeded = function (event) {
  // save a reference to the database
  const db = event.target.result;
  // create an object store (table) called new_transaction, set it to have an auto increment primary key
  db.createObjectStore('new_transaction', { autoIncrement: true });
};

// upon a successful
request.onsuccess = function (event) {
  // when db is successfully created with its object store, save reference to db in global storage
  db = event.target.result;

  // check if app is online, if yes run uploadTransaction function to send all local db data to api
  if (navigator.onLine) {
    // uploadTransaction();
  }
};

request.onerror = function (event) {
  console.log(event.target.errorCode);
};

// this will be executed if we attempt to submit a new transaction and there's no internet connection
function saveRecord(record) {
  // open a new transaction with the database with read and write permissions
  const transaction = db.transaction(['new_transaction'], 'readwrite');

  // access the object store for new_transaction
  const transactionObjectStore = transaction.objectStore('new_transaction');

  // add record to your store with add method
  transactionObjectStore.add(record);
}
