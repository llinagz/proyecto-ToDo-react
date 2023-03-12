import React from 'react';

// Recibimos como parámetros el nombre y el estado inicial de nuestro item.
function useLocalStorage(itemName, initialValue) {

    //¡Podemos utilizar otros hooks dentro de nuestros propios Custoom Hooks!
    //Ya no traemos la info de local storage, sino que tendremos un array vacio o un string vacio o lo que sea que definamos en nuestros componentes
    const [item, setItem] = React.useState(initialValue);
    //Cuando ya hayamos consultado a local storage y actualizado el estado podemos llavar a set loading.
    const[loading, setLoading] = React.useState(true);
    //Iniciamos un nuevo estado para controlar errores
    const[error, setError] = React.useState(false);

    //Lanzamos useEffect
    React.useEffect(() =>{
      //Simulamos un segundo de delay de carga y lo manejo con un try/catch
      setTimeout(() => {
        try{
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

          //Actualiza el valor del estado pero ahora con la info de nuestro localStorage
          setItem(parsedItem);
        }
        catch(error)
        {
          //Si atrapamos algún error, actualizamos el estado de error
          setError(error);
        }
        finally
        {
          setLoading(false);
        }
      }, 5000);
    }) ;
  
    // Actualizamos la función para guardar nuestro item con las nuevas variables y parámetros como en nuestro estado con react
    const saveItem = (newItem) => {
      try
      {
        const stringifiedItem = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringifiedItem);
        setItem(newItem);
      }
      catch(error)
      {
        setError(error);
      }
    };
  
    // Regresamos los datos que necesitamos. Recibimos, y actualizamos. El item, que sería el item parseado y la información nueva.
    // Si tenemos dos elementos, un estado y su actualizador podemos enviar un array de dos posiciones, si hay más es mejor enviar un objeto.
    return {
      item,
      saveItem,
      loading,
      error,
    };
}

export {useLocalStorage};