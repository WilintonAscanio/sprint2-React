import close from "../assets/icons/x.svg"
import search from "../assets/icons/search.svg"

const Destiny = ({ countries }) => {



    return (
        <article className='modal'>
            <div className='modal__destiny'>
                <section className='modal__destiny__title'>
                    <strong>¿Cuando regresas?</strong>
                    <img src={close} alt="cerrar" />
                </section>
                <article className='modal__destiny__search'>
                    <img src={search} alt="buscar" />
                    <input type="text" placeholder='Ingrese el país de origen' />
                </article>
                <select>
                    {countries.map((countrie, index) => (
                        <option value={countrie.id} key={index}>{`${countrie.name}--(${countrie.ISO3})`} </option>


                    ))}
                </select>
                <p>Confirmar</p>

            </div>



        </article>
    )
}

export default Destiny