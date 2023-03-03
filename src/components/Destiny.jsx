import close from "../assets/icons/x.svg"
import search from "../assets/icons/search.svg"
import { HeaderContext } from "./Header"
import { useContext, useState } from "react"

const Destiny = ({ countries }) => {
    const { showDestiny, modalDestiny, changeFormData } = useContext(HeaderContext)

    const [option, setOption] = useState('')

    const [searchInput, setSearchInput] = useState([])

    const [input, setInput] = useState('')


    const handleClick = ({ target }) => {
        setOption(target.value)

    }
    const confirm = () => {
        changeFormData({ name: 'destiny', value: option })

        showDestiny()

    }
    const filter = ({ target }) => {
        setInput(target.value)
        const filter = countries.filter(countrie => countrie.place.toLowerCase().includes(target.value.toLowerCase()))
        setSearchInput(filter)

    }



    return (
        <article className={`modal ${modalDestiny === false ? 'hidden' : ''}`}>
            <div className='modal__destiny'>
                <section className='modal__destiny__title'>
                    <strong>¿Cuando regresas?</strong>
                    <img src={close} alt="cerrar" onClick={showDestiny} />
                </section>
                <article className='modal__destiny__search'>
                    <img src={search} alt="buscar" />
                    <input type="text" placeholder='Ingrese el país de origen' onChange={(e) => { filter(e) }} />
                </article>
                <select onClick={(e) => { handleClick(e) }}>
                    {input ? <>
                        {searchInput.map((countrie, index) => (
                            <option value={countrie.name} key={index}>{`${countrie.place}`} </option>


                        ))}</> : <>
                        {countries.map((countrie, index) => (
                            <option value={countrie.name} key={index}>{`${countrie.place}`} </option>

                        ))}
                    </>}
                </select>
                <button onClick={confirm}>Confirmar</button>

            </div>



        </article>
    )
}

export default Destiny