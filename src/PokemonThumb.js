// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faVolumeUp } from '@fortawesome/free-solid-svg-icons';
// import './index.css';

// const PokemonThumb = ({  name, image, type, sound}) => {
//   const style = `thumb-container ${type}`;
  
//   const playSound = () => {
//     const audio = new Audio(sound);
//     audio.play();
//   };

//   return (
//     <div className={style} onClick={playSound}>
      
//       <img src={image} alt={name} />
//       <div className="detail-wrapper">
//         <h3>{name}</h3>
//         <small>Type: {type}</small>

//         <button onClick={playSound} className="play-sound-button">
//         <FontAwesomeIcon icon={faVolumeUp} />
//       </button>
//       </div>
//     </div>
//   );
// }

// export default PokemonThumb;
// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faVolumeUp } from '@fortawesome/free-solid-svg-icons';
// import './index.css';

// const PokemonThumb = ({ name, image, type, sound }) => {
//   const style = `thumb-container ${type}`;

//   const playSound = () => {
//     const audio = new Audio(sound);
//     audio.play();
//   };

//   return (
//     <div className={style} onClick={playSound}>
//       <img src={image} alt={name} />
//       <div className="detail-wrapper">
//         <h3>{name}</h3>
//         <small>Type: {type}</small>
//         <button onClick={playSound} className="play-sound-button">
//           <FontAwesomeIcon icon={faVolumeUp} />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default PokemonThumb;



import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons';
import './index.css';

const PokemonThumb = ({ name, image, type, sound }) => {
  const style = `thumb-container ${type}`;

  const playSound = () => {
    const audio = new Audio(sound);
    audio.play();
  };

  return (
    <div className={style} onClick={playSound}>
      <img src={image} alt={`${name} sprite`} />
      <div className="detail-wrapper">
        <h3>{name}</h3>
        <small>Type: {type}</small>
        <button onClick={playSound} className="play-sound-button">
          <FontAwesomeIcon icon={faVolumeUp} />
        </button>
      </div>
    </div>
  );
};

export default PokemonThumb;
