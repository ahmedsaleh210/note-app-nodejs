import MemoryStorage from "memorystorage";

var store = new MemoryStorage("note-app");

function getKeys(store) {
  var keys = [];
  for (var i = 0; i < store.length; i++) {
    var key = store.key(i);
    keys.push(key);
  }
  return keys;
}

function getValues(store) {
  var values = [];
  for (var i = 0; i < store.length; i++) {
    var key = store.key(i);
    var value = store.getItem(key);
    values.push(value);
  }
  return values;
}

export { store, getKeys, getValues };
