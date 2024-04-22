import './Home.css';
import homeLogo from '../../assets/home.png'
function Home() {
    return (
        <>
            <div className="w-full h-screen flex flex-col justify-start items-center mb-auto" style={{ paddingTop: '70px' }}>

                <div className="flex flex-col gap-4 items-center justify-center py-4">
                    <h2 className='text-9xl font-bold'>Seja bem vinde!</h2>
                    <p className='text-4xl'>Não passa sufoco não, vem para a farmácia Mergulhão!</p>
                    <div className="flex justify-around gap-4">
                        <button className='rounded bg-black text-white py-6 px-6 text-lg font-bold'>Ver Produtos</button>
                    </div>
                </div>
                <div className="flex justify-center">

                <div className="flex justify-center items-center">
              <img src={homeLogo} alt="" className='left-align' />


                </div>
            </div>
        </div >

        </>
    );
}

export default Home;