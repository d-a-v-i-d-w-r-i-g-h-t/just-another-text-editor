import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

  
// export a function to Update (PUT) the database
export const putDb = async (content) => {
  console.log('PUT to the database');

  // create a connection with the database and specify the version
  const jateDb = await openDB('jate', 1);

  // create a new transaction, specifying the database and data privileges
  const tx = jateDb.transaction('jate', 'readwrite');

  // open the desired object store in the database (it has the same name as the database)
  const store = tx.objectStore('jate');

  // update the data record from the object store (there is only one record)
  const request = store.put({ id: id, jate: content });

  // get confirmation of the request
  const result = await request;
  console.log('Data saved to the database', result);
};
  

// export a function to Read (GET) the record from the database (there is only one)
export const getDb = async (id) => {
  console.log('GET from the database');

  // create a connection with the database and specify the version
  const jateDb = await openDB('jate', 1);

  // create a new transaction, specifying the database and data privileges
  const tx = jateDb.transaction('jate', 'readonly');

  // open the desired object store in the database (it has the same name as the database)
  const store = tx.objectStore('jate');

  // get the data record from the object store (there is only one record)
  const request = store.get(id);

  // get confirmation of the request
  const result = await request;
  console.log('data has been retrieved', result);
  return result;
};

// start the database
initdb();
