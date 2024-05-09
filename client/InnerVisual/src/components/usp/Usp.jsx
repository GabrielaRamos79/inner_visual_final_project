import innerphoto from '../../assets/innerphoto.jpg';
import innerphoto2 from '../../assets/innerphoto2.jpg';
import './usp.css'

const Usp = () => {
  return (
    <>
      <div className="photoUsp1">
        <img className='photo1' src={innerphoto} alt="atleta mujer inner flow" />
        <div className='textPhoto1'>
          <h2>¿Qué es Inner Visuals? </h2>
          <button className='buttonUsp'>Click aquí</button>
        </div>
      </div>

      <div className="photoUsp2">
        <div className='textPhoto2'>
          <h2>¿Qué beneficios aporta a mi práctica deportiva (profesional)?</h2>
          <button className='buttonUsp'>Click aquí</button>
        </div>
        <img className='photo2' src={innerphoto2} alt="deportista sentada junto a pesas y botella agua" />
      </div>

    </>
  )
}

export default Usp
