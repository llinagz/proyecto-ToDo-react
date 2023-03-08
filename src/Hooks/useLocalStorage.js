import React from 'react';

// Recibimos como parámetros el nombre y el estado inicial de nuestro item.
function useLocalStorage(itemName, initialValue) {
    // Guardamos nuestro item en una constante
    const localStorageItem = localStorage.getItem(itemName);
    let parsedItem;
    
    // Utilizamos la lógica que teníamos, pero ahora con las variables y parámentros nuevos
    if (!localStorageItem) {
      localStorage.setItem(itemName, JSON.stringify(initialValue));
      parsedItem = initialValue;
    } else {
      parsedItem = JSON.parse(localStorageItem);
    }
    
    //¡Podemos utilizar otros hooks dentro de nuestros propios Custoom Hooks!
    //Creamos una variable de estado para guardar el item parseado y una función para actualizarla usando useState
    const [item, setItem] = React.useState(parsedItem);
  
    // Actualizamos la función para guardar nuestro item con las nuevas variables y parámetros como en nuestro estado con react
    const saveItem = (newItem) => {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    };
  
    // Regresamos los datos que necesitamos. Recibimos, y actualizamos. El item, que sería el item parseado y la información nueva.
    return [
      item,
      saveItem,
    ];
}

export {useLocalStorage};