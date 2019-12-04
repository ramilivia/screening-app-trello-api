# screening-app

- Goal
  - The file ('discography.txt') inside the code solution contains Bob Dylan's discography. The goal is to create a board in trello.com using Trello API, each album should be classified in lists sorted by decade. Every record should display its year and title and also show up in the list sorted by year, in the case of same year, alphabetically. Additionally, each card should contain the cover art, the cover art can be obtained from Spotify, using the Spotify API.

- Instructions
  - To run the application you must configure .env file first
    - Configure DISCOGRAPHY_PATH with the path to the discography.txt file
    - Configure TRELLO_KEY and also TRELLO_TOKEN following the instructions here: https://trello.com/app-key/
    - Configure SPOTIFY_CLIENT and SPOTIFY_SECRET setting an application in the following URL: https://developer.spotify.com/dashboard
    
   - Install dependencies using 'npm install' 
   - Run the application using 'npm start' 
   
# Visual Proof
![alt text](https://raw.githubusercontent.com/ramilivia/screening-app/master/proof.jpg)


- Objetivo
  - El fichero ('discography.txt') dentro de la solución contiene la discografía de Bob Dylan. La meta es crear un tablero en trello.com interactuando con la Trello API, los álbums deben estar clasificados en listas ordenadas por década. Cada álbum debe mostrar su año y título así como también deben estar ordenados por el año, en caso que este último se repita se deben ordenar alfabéticamente. Adicionalmente, cada álbum incluir la tapa del disco, la cual se debe obtener desde Spotify interactuando con la Spotify API.

- Instrucciones

  - Para ejecutar la aplicación primero configurar el archivo .env
    - Configurar DISCOGRAPHY_PATH con la ruta al archivo discography.txt
    - Configurar TRELLO_KEY y TRELLO_TOKEN siguiendo las intrucciones del siguiente enlace:   https://trello.com/app-key/
    - Configurar SPOTIFY_CLIENT y SPOTIFY_SECRET configurando una aplicación en el siguiente enlace: https://developer.spotify.com/dashboard
  
  - Instalar dependencias utilizando 'npm install'
  - Ejecutar la aplicación corriendo 'npm start'

# Prueba Visual
![alt text](https://raw.githubusercontent.com/ramilivia/screening-app/master/proof.jpg)
