const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],

      characters: [],
      character: [],
      planets: [],
      starships: [],
      favorites: [],
    },
    actions: {
      // getCharacters: () => {
      //   // fetch("https://swapi.py4e.com/api/people")
      //   fetch("https://www.swapi.tech/api/people")
      //     .then((resp) => resp.json())
      //     .then((data) => {
      //       setStore({ characters: data.results });
      //       localStorage.setItem(
      //         "charactersLocal",
      //         JSON.stringify(data.results)
      //       );
      //     })
      //     .catch((error) => console.log(error));
      // },

      getCharacters: () => {
        fetch("https://www.swapi.tech/api/people")
          .then((resp) => resp.json())
          .then((data) => {
            setStore({ characters: data.results });
            localStorage.setItem(
              "charactersLocal",
              JSON.stringify(data.results)
            );
          })
          .catch((error) => console.log(error));
      },

      getCharacter: (id) => {
        fetch(`https://www.swapi.tech/api/people/${id}`)
          .then((response) => response.json())
          .then((data) => {
            setStore({ character: data.result.properties });
            localStorage.setItem(
              "characterLocal",
              JSON.stringify(data.result.properties)
            );
          })
          .catch((error) => console.log(error));
      },

      getPlanets: () => {
        fetch("https://swapi.py4e.com/api/planets")
          .then((resp) => resp.json())
          .then((data) => {
            setStore({ planets: data.results });
            localStorage.setItem("planetsLocal", JSON.stringify(data.results));
          })
          .catch((error) => console.log(error));
      },

      getStarships: () => {
        fetch("https://swapi.py4e.com/api/starships")
          .then((resp) => resp.json())
          .then((data) => {
            setStore({ starships: data.results });
            localStorage.setItem(
              "starshipsLocal",
              JSON.stringify(data.results)
            );
          })
          .catch((error) => console.log(error));
      },

      getCharactersLocal: () => {
        const charactersLocal =
          JSON.parse(localStorage.getItem("characters")) ?? [];
        setStore({ characters: charactersLocal });
      },

      getPlanetsLocal: () => {
        const planetsLocal = JSON.parse(localStorage.getItem("planets")) ?? [];
        setStore({ planets: planetsLocal });
      },

      getStarshipsLocal: () => {
        const starshipsLocal =
          JSON.parse(localStorage.getItem("starships")) ?? [];
        setStore({ startships: starshipsLocal });
      },

      addFavorite: (newfav) => {
        const store = getStore();
        if (store.favorites.includes(newfav)) continued;
        else {
          setStore({
            favorites: [newfav, ...store.favorites],
          });
        }
      },

      deleteFavorite: (personaje) => {
        const store = getStore();
        let newfav = store.favorites.filter((fav) => fav.name !== personaje);
        setStore({ favorites: newfav });
      },

      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      loadSomeData: () => {
        /**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;
