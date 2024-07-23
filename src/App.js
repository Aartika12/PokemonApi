// import React, { useEffect, useState } from 'react';
// import PokemonThumb from './PokemonThumb';
// import InfiniteScroll from 'react-infinite-scroll-component';
// import './index.css';

// const App = () => {
//   const [allPokemons, setAllPokemons] = useState([]);
//   const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=10');
//   const [loadedPokemons, setLoadedPokemons] = useState(new Set());
//   const [hasMore, setHasMore] = useState(true);

//   const getAllPokemons = async () => {
//     const res = await fetch(loadMore);
//     const data = await res.json();

//     // Check if there's more data to load
//     if (data.next) {
//       setLoadMore(data.next);
//     } else {
//       setHasMore(false);
//     }

//     const newPokemons = await Promise.all(data.results.map(async pokemon => {
//       const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
//       return res.json();
//     }));

//     setAllPokemons(currentList => {
//       const updatedList = [...currentList];
//       newPokemons.forEach(pokemon => {
//         if (!loadedPokemons.has(pokemon.id)) {
//           updatedList.push(pokemon);
//           loadedPokemons.add(pokemon.id);
//         }
//       });
//       return updatedList;
//     });

//     setLoadedPokemons(new Set(loadedPokemons));
//   };

//   useEffect(() => {
//     getAllPokemons();
//   }, []);

//   return (
//     <div className="app-container h1">
//       <div>
//         <h1>Pokedex</h1>
//         <img src='https://wallpapercave.com/wp/zHsOYE4.jpg' alt='wallpaper' width="1520" height="800" />
//       </div>
//       <div className="pokemon-container">
//         <InfiniteScroll
//           dataLength={allPokemons.length}
//           next={getAllPokemons}
//           hasMore={hasMore}
//           loader={<div className="loading-container"><p>Loading Pokémon...</p></div>}
//           endMessage={<p style={{ textAlign: 'center' }}><b>You have seen it all!</b></p>}
//         >
//           <div className="all-container">
//             {allPokemons.map((pokemonStats, index) => (
//               <PokemonThumb
//                 key={index}
//                 id={pokemonStats.id}
//                 image={pokemonStats.sprites.other.dream_world.front_default}
//                 name={pokemonStats.name}
//                 type={pokemonStats.types[0].type.name}
//                 sound={`https://pokemoncries.com/cries-old/${pokemonStats.id}.mp3`}
//               />
//             ))}
//           </div>
//         </InfiniteScroll>
//       </div>
//     </div>
//   );
// };

// export default App;


// import React, { useEffect, useState } from 'react';
// import PokemonThumb from './PokemonThumb';
// import InfiniteScroll from 'react-infinite-scroll-component';
// import './index.css';

// const App = () => {
//   const [allPokemons, setAllPokemons] = useState([]);
//   const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=10');
//   const [loadedPokemons, setLoadedPokemons] = useState(new Set());
//   const [hasMore, setHasMore] = useState(true);

//   const getAllPokemons = async () => {
//     try {
//       const res = await fetch(loadMore);
//       const data = await res.json();

//       // Check if there's more data to load
//       if (data.next) {
//         setLoadMore(data.next);
//       } else {
//         setHasMore(false);
//       }

//       const newPokemons = await Promise.all(data.results.map(async pokemon => {
//         const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
//         return res.json();
//       }));

//       setAllPokemons(currentList => {
//         const updatedList = [...currentList];
//         newPokemons.forEach(pokemon => {
//           if (!loadedPokemons.has(pokemon.id)) {
//             updatedList.push(pokemon);
//             loadedPokemons.add(pokemon.id);
//           }
//         });
//         return updatedList;
//       });

//       setLoadedPokemons(new Set(loadedPokemons));
//     } catch (error) {
//       console.error("Error fetching Pokémon data:", error);
//       setHasMore(false); // Stop loading more on error
//     }
//   };

//   useEffect(() => {
//     getAllPokemons();
//   }, []);

//   return (
//     <div className="app-container h1">
//       <div>
//         <h1>Pokedex</h1>
//         <img src='https://wallpapercave.com/wp/zHsOYE4.jpg' alt='wallpaper' width="1520" height="800" />
//       </div>
//       <div className="pokemon-container">
//         <InfiniteScroll
//           dataLength={allPokemons.length}
//           next={getAllPokemons}
//           hasMore={hasMore}
//           loader={<div className="loading-container"><p>Loading Pokémon...</p></div>}
//           endMessage={<p style={{ textAlign: 'center' }}><b>You have seen it all!</b></p>}
//         >
//           <div className="all-container">
//             {allPokemons.map((pokemonStats, index) => (
//               <PokemonThumb
//                 key={index}
//                 id={pokemonStats.id}
//                 image={pokemonStats.sprites.other.dream_world.front_default}
//                 name={pokemonStats.name}
//                 type={pokemonStats.types[0].type.name}
//                 sound={`https://pokemoncries.com/cries-old/${pokemonStats.id}.mp3`}
//               />
//             ))}
//           </div>
//         </InfiniteScroll>
//       </div>
//     </div>
//   );
// };

// export default App;


// import React, { useEffect, useState, useCallback } from 'react';
// import PokemonThumb from './PokemonThumb';
// import InfiniteScroll from 'react-infinite-scroll-component';
// import './index.css';

// const App = () => {
//   const [allPokemons, setAllPokemons] = useState([]);
//   const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=10');
//   const [loadedPokemons, setLoadedPokemons] = useState(new Set());
//   const [hasMore, setHasMore] = useState(true);
//   const [loading, setLoading] = useState(false);

//   const fetchPokemons = useCallback(async () => {
//     setLoading(true);
//     try {
//       const res = await fetch(loadMore);
//       const data = await res.json();

//       // Check if there's more data to load
//       if (data.next) {
//         setLoadMore(data.next);
//       } else {
//         setHasMore(false);
//       }

//       // Fetch details for new Pokémon
//       const newPokemons = await Promise.all(data.results.map(async pokemon => {
//         const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
//         return res.json();
//       }));

//       setAllPokemons(currentList => {
//         const updatedList = [...currentList];
//         newPokemons.forEach(pokemon => {
//           if (!loadedPokemons.has(pokemon.id)) {
//             updatedList.push(pokemon);
//             loadedPokemons.add(pokemon.id);
//           }
//         });
//         return updatedList;
//       });

//       setLoadedPokemons(new Set(loadedPokemons));
//     } catch (error) {
//       console.error("Error fetching Pokémon data:", error);
//       setHasMore(false); // Stop loading more on error
//     } finally {
//       setLoading(false);
//     }
//   }, [loadMore, loadedPokemons]);

//   useEffect(() => {
//     fetchPokemons();
//   }, [fetchPokemons]);

//   return (
//     <div className="app-container h1">
//       <div>
//         <h1>Pokedex</h1>
//         <img src='https://wallpapercave.com/wp/zHsOYE4.jpg' alt='wallpaper' width="1520" height="800" />
//       </div>
//       <div className="pokemon-container">
//         <InfiniteScroll
//           dataLength={allPokemons.length}
//           next={fetchPokemons}
//           hasMore={hasMore}
//           loader={loading ? <div className="loading-container"><p>Loading Pokémon...</p></div> : null}
//           endMessage={<p style={{ textAlign: 'center' }}><b>You have seen it all!</b></p>}
//         >
//           <div className="all-container">
//             {allPokemons.map((pokemonStats, index) => (
//               <PokemonThumb
//                 key={index}
//                 id={pokemonStats.id}
//                 image={pokemonStats.sprites.other.dream_world.front_default}
//                 name={pokemonStats.name}
//                 type={pokemonStats.types[0].type.name}
//                 sound={`https://pokemoncries.com/cries-old/${pokemonStats.id}.mp3`}
//               />
//             ))}
//           </div>
//         </InfiniteScroll>
//       </div>
//     </div>
//   );
// };

// export default App;

// import React, { useEffect, useState } from 'react';
// import PokemonThumb from './PokemonThumb';
// import InfiniteScroll from 'react-infinite-scroll-component';
// import './index.css'; 

// const App = () => {
//   const [allPokemons, setAllPokemons] = useState([]);
//   const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=10');
//   const [loadedPokemons, setLoadedPokemons] = useState(new Set());
  
//   const [hasMore, setHasMore] = useState(true);

//   const getAllPokemons = async () => {
//     const res = await fetch(loadMore);
//     const data = await res.json();
// //   



//     setLoadMore(data.next);

//     const newPokemons = await Promise.all(data.results.map(async pokemon => {
//       const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
//       const data = await res.json();
//       return data;
//     }));

//     setAllPokemons(currentList => {
//       const updatedList = [...currentList];
//       newPokemons.forEach(pokemon => {
//         if (!loadedPokemons.has(pokemon.id)) {
//           updatedList.push(pokemon);
//           loadedPokemons.add(pokemon.id);
//         }
//       });
//       return updatedList;
//     });

//     setLoadedPokemons(new Set(loadedPokemons));
//   };

//   useEffect(() => {
//     getAllPokemons();
//   }, []);

//   return (
//     <div className="app-container h1">
//       <div>
//         <h1>Pokedex</h1>
//         <img src='https://wallpapercave.com/wp/zHsOYE4.jpg' alt='wallpaper' width="1520" height="800" />
//       </div>
//       <div className="pokemon-container">
//       <InfiniteScroll
//           dataLength={allPokemons.length}
//           next={getAllPokemons}
//           hasMore={hasMore}
//           loader={<div className="loading-container"><p>Loading Pokémon...</p></div>}
//           endMessage={<p style={{ textAlign: 'center' }}><b>You have seen it all!</b></p>}
//         >
//           <div className="all-container">
//             {allPokemons.map((pokemonStats, index) => (
//               <PokemonThumb
//                 key={index}
//                 id={pokemonStats.id}
//                 image={pokemonStats.sprites.other.dream_world.front_default}
//                 name={pokemonStats.name}
//                 type={pokemonStats.types[0].type.name}
//                 sound={`https://pokemoncries.com/cries-old/${pokemonStats.id}.mp3`}
//               />
//             ))}
//           </div>
//         </InfiniteScroll>
//       </div>
//     </div>
//   );
// };

// export default App;



// import React, { useEffect, useState } from 'react';
// import PokemonThumb from './PokemonThumb';
// import InfiniteScroll from 'react-infinite-scroll-component';
// import './index.css';

// const App = () => {
//   const [allPokemons, setAllPokemons] = useState([]);
//   const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=10');
//   const [loadedPokemons, setLoadedPokemons] = useState(new Set());
//   const [hasMore, setHasMore] = useState(true);

//   const getAllPokemons = async () => {
//     const res = await fetch(loadMore);
//     const data = await res.json();

//     // Check if there's more data to load
//     if (data.next) {
//       setLoadMore(data.next);
//     } else {
//       setHasMore(false);
//     }

//     const newPokemons = await Promise.all(data.results.map(async pokemon => {
//       const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
//       return res.json();
//     }));

//     setAllPokemons(currentList => {
//       const updatedList = [...currentList];
//       newPokemons.forEach(pokemon => {
//         if (!loadedPokemons.has(pokemon.id)) {
//           updatedList.push(pokemon);
//           loadedPokemons.add(pokemon.id);
//         }
//       });
//       return updatedList;
//     });

//     setLoadedPokemons(new Set(loadedPokemons));
//   };

//   useEffect(() => {
//     getAllPokemons();
//   }, []);

//   return (
//     <div className="app-container h1">
//       <div>
//         <h1>Pokedex</h1>
//         <img src='https://wallpapercave.com/wp/zHsOYE4.jpg' alt='wallpaper' width="1520" height="800" />
//       </div>
//       <div className="pokemon-container">
//         <InfiniteScroll
//           dataLength={allPokemons.length}
//           next={getAllPokemons}
//           hasMore={hasMore}
//           loader={<div className="loading-container"><p>Loading Pokémon...</p></div>}
//           endMessage={<p style={{ textAlign: 'center' }}><b>You have seen it all!</b></p>}
//         >
//           <div className="all-container">
//             {allPokemons.map((pokemonStats, index) => (
//               <PokemonThumb
//                 key={index}
//                 id={pokemonStats.id}
//                 image={pokemonStats.sprites.other.dream_world.front_default}
//                 name={pokemonStats.name}
//                 type={pokemonStats.types[0].type.name}
//                 sound={`https://pokemoncries.com/cries-old/${pokemonStats.id}.mp3`}
//               />
//             ))}
//           </div>
//         </InfiniteScroll>
//       </div>
//     </div>
//   );
// };

// export default App;

// import React, { useEffect, useState } from 'react';
// import PokemonThumb from './PokemonThumb';
// import InfiniteScroll from 'react-infinite-scroll-component';
// import './index.css';

// const App = () => {
//   const [allPokemons, setAllPokemons] = useState([]);
//   const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=10');
//   const [hasMore, setHasMore] = useState(true);

//   const getAllPokemons = async () => {
//     try {
//       const res = await fetch(loadMore);
//       const data = await res.json();

//       console.log('Fetched data:', data); // Debugging line

//       // Check if there's more data to load
//       if (data.next) {
//         setLoadMore(data.next);
//       } else {
//         setHasMore(false);
//       }

//       const newPokemons = await Promise.all(data.results.map(async pokemon => {
//         const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
//         return res.json();
//       }));

//       setAllPokemons(currentList => [...currentList, ...newPokemons]);
//     } catch (error) {
//       console.error('Error fetching Pokémon:', error); // Debugging line
//     }
//   };

//   useEffect(() => {
//     getAllPokemons();
//   }, []);

//   return (
//     <div className="app-container">
//       <div>
//         <h1>Pokedex</h1>
//         <img src='https://wallpapercave.com/wp/zHsOYE4.jpg' alt='wallpaper' width="1520" height="800" />
//       </div>
//       <div className="pokemon-container">
//         <InfiniteScroll
//           dataLength={allPokemons.length}
//           next={getAllPokemons}
//           hasMore={hasMore}
//           loader={<div className="loading-container"><p>Loading Pokémon...</p></div>}
//           endMessage={<p style={{ textAlign: 'center' }}><b>You have seen it all!</b></p>}
//         >
//           <div className="all-container">
//             {allPokemons.map((pokemonStats, index) => (
//               <PokemonThumb
//                 key={index}
//                 id={pokemonStats.id}
//                 image={pokemonStats.sprites.other.dream_world.front_default}
//                 name={pokemonStats.name}
//                 type={pokemonStats.types[0].type.name}
//                 sound={`https://pokemoncries.com/cries-old/${pokemonStats.id}.mp3`}
//               />
//             ))}
//           </div>
//         </InfiniteScroll>
//       </div>
//     </div>
//   );
// };

// export default App;


// import React, { useEffect, useState } from 'react';
// import PokemonThumb from './PokemonThumb';
// import InfiniteScroll from 'react-infinite-scroll-component';
// import './index.css';

// const App = () => {
//   const [allPokemons, setAllPokemons] = useState([]);
//   const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=10');
//   const [hasMore, setHasMore] = useState(true);
//   const [loadedPokemonIds, setLoadedPokemonIds] = useState(new Set());

//   const getAllPokemons = async () => {
//     try {
//       const res = await fetch(loadMore);
//       const data = await res.json();

//       console.log('Fetched data:', data); // Debugging line

//       // Check if there's more data to load
//       if (data.next) {
//         setLoadMore(data.next);
//       } else {
//         setHasMore(false);
//       }

//       const newPokemons = await Promise.all(data.results.map(async pokemon => {
//         const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
//         return res.json();
//       }));

//       setAllPokemons(currentList => {
//         const newList = [...currentList];
//         const newPokemonIds = new Set(loadedPokemonIds);

//         newPokemons.forEach(pokemon => {
//           if (!newPokemonIds.has(pokemon.id)) {
//             newList.push(pokemon);
//             newPokemonIds.add(pokemon.id);
//           }
//         });

//         // Update state
//         setLoadedPokemonIds(newPokemonIds);
//         return newList;
//       });
//     } catch (error) {
//       console.error('Error fetching Pokémon:', error); // Debugging line
//     }
//   };

//   useEffect(() => {
//     getAllPokemons();
//   }, []);

//   return (
//     <div className="app-container">
//       <div>
//         <h1>Pokedex</h1>
//         <img src='https://wallpapercave.com/wp/zHsOYE4.jpg' alt='wallpaper' width="1520" height="800" />
//       </div>
//       <div className="pokemon-container">
//         <InfiniteScroll
//           dataLength={allPokemons.length}
//           next={getAllPokemons}
//           hasMore={hasMore}
//           loader={<div className="loading-container"><p>Loading Pokémon...</p></div>}
//           endMessage={<p style={{ textAlign: 'center' }}><b>You have seen it all!</b></p>}
//         >
//           <div className="all-container">
//             {allPokemons.map((pokemonStats, index) => (
//               <PokemonThumb
//                 key={index}
//                 id={pokemonStats.id}
//                 image={pokemonStats.sprites.other.dream_world.front_default}
//                 name={pokemonStats.name}
//                 type={pokemonStats.types[0].type.name}
//                 sound={`https://pokemoncries.com/cries-old/${pokemonStats.id}.mp3`}
//               />
//             ))}
//           </div>
//         </InfiniteScroll>
//       </div>
//     </div>
//   );
// };

// export default App;



          // import React, { useEffect, useState } from 'react';
          // import PokemonThumb from './PokemonThumb';
          // import InfiniteScroll from 'react-infinite-scroll-component';
          // import './index.css';
          
          // const App = () => {
          //   const [allPokemons, setAllPokemons] = useState([]);
          //   const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=10');
          //   const [hasMore, setHasMore] = useState(true);
          //   const [loadedPokemonIds, setLoadedPokemonIds] = useState(new Set());
          
          //   const getAllPokemons = async () => {
          //     try {
          //       const res = await fetch(loadMore);
          //       const data = await res.json();
          
          //       console.log('Fetched data:', data); // Debugging line
          
          //       // Check if there's more data to load
          //       if (data.next) {
          //         setLoadMore(data.next);
          //       } else {
          //         setHasMore(false);
          //       }
          
          //       const newPokemons = await Promise.all(data.results.map(async pokemon => {
          //         const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
          //         return res.json();
          //       }));
          
          //       setAllPokemons(currentList => {
          //         const newPokemonIds = new Set(loadedPokemonIds);
          
          //         // Filter out already loaded Pokémon
          //         const filteredNewPokemons = newPokemons.filter(pokemon => {
          //           if (!newPokemonIds.has(pokemon.id)) {
          //             newPokemonIds.add(pokemon.id);
          //             return true;
          //           }
          //           return false;
          //         });
          
          //         // Update state
          //         setLoadedPokemonIds(newPokemonIds);
          //         return [...currentList, ...filteredNewPokemons];
          //       });
          //     } catch (error) {
          //       console.error('Error fetching Pokémon:', error); // Debugging line
          //     }
          //   };
          
          //   useEffect(() => {
          //     getAllPokemons();
          //   }, []);
          
          //   return (
          //     <div className="app-container">
          //       <div>
          //         <h1>Pokedex</h1>
          //         <img src='https://wallpapercave.com/wp/zHsOYE4.jpg' alt='wallpaper' width="1520" height="800" />
          //       </div>
          //       <div className="pokemon-container">
          //         <InfiniteScroll
          //           dataLength={allPokemons.length}
          //           next={getAllPokemons}
          //           hasMore={hasMore}
          //           loader={<div className="loading-container"><p>Loading Pokémon...</p></div>}
          //           endMessage={<p style={{ textAlign: 'center' }}><b>You have seen it all!</b></p>}
          //         >
          //           <div className="all-container">
          //             {allPokemons.map((pokemonStats) => (
          //               <PokemonThumb
          //                 key={pokemonStats.id}
          //                 id={pokemonStats.id}
          //                 image={pokemonStats.sprites.other.dream_world.front_default}
          //                 name={pokemonStats.name}
          //                 type={pokemonStats.types[0].type.name}
          //                 sound={`https://pokemoncries.com/cries-old/${pokemonStats.id}.mp3`}
          //               />
          //             ))}
          //           </div>
          //         </InfiniteScroll>
          //       </div>
          //     </div>
          //   );
          // };
          
          // export default App;
             
          


          // import React, { useEffect, useState } from 'react';
          // import PokemonThumb from './PokemonThumb';
          // import InfiniteScroll from 'react-infinite-scroll-component';
          // import './index.css';
          
          // const App = () => {
          //   const [allPokemons, setAllPokemons] = useState([]);
          //   const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=10');
          //   const [hasMore, setHasMore] = useState(true);
          //   const [loadedPokemonIds, setLoadedPokemonIds] = useState(new Set());
          
          //   const getAllPokemons = async () => {
          //     try {
          //       const res = await fetch(loadMore);
          //       const data = await res.json();
          
          //       console.log('Fetched data:', data); // Debugging line
          
          //       // Check if there's more data to load
          //       if (data.next) {
          //         setLoadMore(data.next);
          //       } else {
          //         setHasMore(false);
          //       }
          
          //       const newPokemons = await Promise.all(data.results.map(async pokemon => {
          //         const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
          //         return res.json();
          //       }));
          
          //       setAllPokemons(currentList => {
          //         const newPokemonIds = new Set(loadedPokemonIds);
          //         const filteredNewPokemons = [];
          
          //         newPokemons.forEach(pokemon => {
          //           if (!newPokemonIds.has(pokemon.id)) {
          //             newPokemonIds.add(pokemon.id);
          //             filteredNewPokemons.push(pokemon);
          //           }
          //         });
          
          //         // Update state
          //         setLoadedPokemonIds(newPokemonIds);
          //         return [...currentList, ...filteredNewPokemons];
          //       });
          //     } catch (error) {
          //       console.error('Error fetching Pokémon:', error); // Debugging line
          //     }
          //   };
          
          //   useEffect(() => {
          //     getAllPokemons();
          //   }, []);
          
          //   return (
          //     <div className="app-container">
          //       <div>
          //         <h1>Pokedex</h1>
          //         <img src='https://wallpapercave.com/wp/zHsOYE4.jpg' alt='wallpaper' width="1520" height="800" />
          //       </div>
          //       <div className="pokemon-container">
          //         <InfiniteScroll
          //           dataLength={allPokemons.length}
          //           next={getAllPokemons}
          //           hasMore={hasMore}
          //           loader={<div className="loading-container"><p>Loading Pokémon...</p></div>}
          //           endMessage={<p style={{ textAlign: 'center' }}><b>You have seen it all!</b></p>}
          //         >
          //           <div className="all-container">
          //             {allPokemons.map(pokemonStats => (
          //               <PokemonThumb
          //                 key={pokemonStats.id}
          //                 id={pokemonStats.id}
          //                 image={pokemonStats.sprites.other.dream_world.front_default}
          //                 name={pokemonStats.name}
          //                 type={pokemonStats.types[0].type.name}
          //                 sound={`https://pokemoncries.com/cries-old/${pokemonStats.id}.mp3`}
          //               />
          //             ))}
          //           </div>
          //         </InfiniteScroll>
          //       </div>
          //     </div>
          //   );
          // };
          
          // export default App;


//           import React, { useEffect, useState } from 'react';
// import PokemonThumb from './PokemonThumb';
// import InfiniteScroll from 'react-infinite-scroll-component';
// import './index.css';

// const App = () => {
//   const [allPokemons, setAllPokemons] = useState([]);
//   const [nextUrl, setNextUrl] = useState('https://pokeapi.co/api/v2/pokemon?limit=10');
//   const [hasMore, setHasMore] = useState(true);
//   const [loadedPokemonIds, setLoadedPokemonIds] = useState(new Set());

//   const fetchPokemons = async () => {
//     try {
//       const res = await fetch(nextUrl);
//       const data = await res.json();

//       // Check if there's more data to load
//       if (data.next) {
//         setNextUrl(data.next);
//       } else {
//         setHasMore(false);
//       }

//       // Fetch detailed data for each Pokémon
//       const newPokemons = await Promise.all(data.results.map(async (pokemon) => {
//         const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
//         return res.json();
//       }));

//       setAllPokemons((prevPokemons) => {
//         const newPokemonIds = new Set(loadedPokemonIds);
//         const filteredNewPokemons = [];

//         newPokemons.forEach(pokemon => {
//           if (!newPokemonIds.has(pokemon.id)) {
//             newPokemonIds.add(pokemon.id);
//             filteredNewPokemons.push(pokemon);
//           }
//         });

//         setLoadedPokemonIds(newPokemonIds);
//         return [...prevPokemons, ...filteredNewPokemons];
//       });
//     } catch (error) {
//       console.error('Error fetching Pokémon:', error);
//     }
//   };

//   useEffect(() => {
//     fetchPokemons(); // Initial fetch
//   }, []);

//   return (
//     <div className="app-container">
//       <div>
//         <h1>Pokedex</h1>
//         <img src='https://wallpapercave.com/wp/zHsOYE4.jpg' alt='wallpaper' width="1520" height="800" />
//       </div>
//       <div className="pokemon-container">
//         <InfiniteScroll
//           dataLength={allPokemons.length}
//           next={fetchPokemons}
//           hasMore={hasMore}
//           loader={<div className="loading-container"><p>Loading Pokémon...</p></div>}
//           endMessage={<p style={{ textAlign: 'center' }}><b>You have seen it all!</b></p>}
//         >
//           <div className="all-container">
//             {allPokemons.map(pokemonStats => (
//               <PokemonThumb
//                 key={pokemonStats.id}
//                 id={pokemonStats.id}
//                 image={pokemonStats.sprites.other.dream_world.front_default}
//                 name={pokemonStats.name}
//                 type={pokemonStats.types[0].type.name}
//                 sound={`https://pokemoncries.com/cries-old/${pokemonStats.id}.mp3`}
//               />
//             ))}
//           </div>
//         </InfiniteScroll>
//       </div>
//     </div>
//   );
// };

// export default App;

                 

 

// import React, { useEffect, useState } from 'react';
// import PokemonThumb from './PokemonThumb';
// import InfiniteScroll from 'react-infinite-scroll-component';
// import './index.css';

// const App = () => {
//   const [allPokemons, setAllPokemons] = useState([]);
//   const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=10');
//   const [hasMore, setHasMore] = useState(true);
//   const [loadedPokemonIds, setLoadedPokemonIds] = useState(new Set());

//   const getAllPokemons = async () => {
//     try {
//       const res = await fetch(loadMore);
//       const data = await res.json();

//       console.log('Fetched data:', data); // Debugging line

//       // Check if there's more data to load
//       if (data.next) {
//         setLoadMore(data.next);
//       } else {
//         setHasMore(false);
//       }

//       // Fetch detailed data for each Pokémon
//       const newPokemons = await Promise.all(data.results.map(async pokemon => {
//         const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
//         return res.json();
//       }));

//       setAllPokemons(currentList => {
//         const newPokemonIds = new Set(loadedPokemonIds);
//         const filteredNewPokemons = [];

//         newPokemons.forEach(pokemon => {
//           if (!newPokemonIds.has(pokemon.id)) {
//             newPokemonIds.add(pokemon.id);
//             filteredNewPokemons.push(pokemon);
//           }
//         });

//         // Debugging line to check newPokemons
//         console.log('New Pokemons to add:', filteredNewPokemons);

//         // Update the state
//         setLoadedPokemonIds(newPokemonIds);
//         return [...currentList, ...filteredNewPokemons];
//       });
//     } catch (error) {
//       console.error('Error fetching Pokémon:', error); // Debugging line
//     }
//   };

//   useEffect(() => {
//     getAllPokemons();
//   }, []);

//   return (
//     <div className="app-container">
//       <div>
//         <h1>Pokedex</h1>
//         <img src='https://wallpapercave.com/wp/zHsOYE4.jpg' alt='wallpaper' width="1520" height="800" />
//       </div>
//       <div className="pokemon-container">
//         <InfiniteScroll
//           dataLength={allPokemons.length}
//           next={getAllPokemons}
//           hasMore={hasMore}
//           loader={<div className="loading-container"><p>Loading Pokémon...</p></div>}
//           endMessage={<p style={{ textAlign: 'center' }}><b>You have seen it all!</b></p>}
//         >
//           <div className="all-container">
//             {allPokemons.map(pokemonStats => (
//               <PokemonThumb
//                 key={pokemonStats.id}
//                 id={pokemonStats.id}
//                 image={pokemonStats.sprites.other.dream_world.front_default}
//                 name={pokemonStats.name}
//                 type={pokemonStats.types[0].type.name}
//                 sound={`https://pokemoncries.com/cries-old/${pokemonStats.id}.mp3`}
//               />
//             ))}
//           </div>
//         </InfiniteScroll>
//       </div>
//     </div>
//   );
// };

// export default App;





import React, { useEffect, useState } from 'react';
import PokemonThumb from './PokemonThumb';
import InfiniteScroll from 'react-infinite-scroll-component';
import './index.css';

const App = () => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=10');
  const [hasMore, setHasMore] = useState(true);
  const [loadedPokemonIds, setLoadedPokemonIds] = useState(new Set());

  const getAllPokemons = async () => {
    try {
      const res = await fetch(loadMore);
      const data = await res.json();

      console.log('Fetched data:', data); // Debugging line

      // Check if there's more data to load
      if (data.next) {
        setLoadMore(data.next);
      } else {
        setHasMore(false);
      }

      // Fetch detailed data for each Pokémon
      const newPokemons = await Promise.all(data.results.map(async pokemon => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
        return res.json();
      }));

      // Ensure each Pokémon is unique
      setAllPokemons(currentList => ensureUniquePokemons([...currentList, ...newPokemons]));
    } catch (error) {
      console.error('Error fetching Pokémon:', error); // Debugging line
    }
  };

  const ensureUniquePokemons = (pokemons) => {
    const seenIds = new Set();
    return pokemons.filter(pokemon => {
      if (!seenIds.has(pokemon.id)) {
        seenIds.add(pokemon.id);
        return true;
      }
      return false;
    });
  };

  useEffect(() => {
    getAllPokemons();
  }, []);

  return (
    <div className="app-container">
      <div>
        <h1>Pokedex</h1>
        <img src='https://wallpapercave.com/wp/zHsOYE4.jpg' alt='wallpaper' width="1490" height="900" />
      </div>
      <div className="pokemon-container">
        <InfiniteScroll
          dataLength={allPokemons.length}
          next={getAllPokemons}
          hasMore={hasMore}
          loader={<div className="loading-container"><p>Loading Pokémon...</p></div>}
          endMessage={<p style={{ textAlign: 'center' }}><b>You have seen it all!</b></p>}
        >
          <div className="all-container">
            {allPokemons.map(pokemonStats => (
              <PokemonThumb
                key={pokemonStats.id}
                id={pokemonStats.id}
                image={pokemonStats.sprites.other.dream_world.front_default}
                name={pokemonStats.name}
                type={pokemonStats.types[0].type.name}
                sound={`https://pokemoncries.com/cries-old/${pokemonStats.id}.mp3`}
              />
            ))}
          </div>
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default App;
