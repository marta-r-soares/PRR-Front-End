import ProductList from "../../components/ProductList";

const Home = () => {
    return(
        <>
            <section className="home-banner w-full">
                <div className="flex flex-col items-center justify-center h-full">
                    <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-semibold text-green-700">Os melhores pratos você <br/>encontra aqui!</h1>
                </div>
            </section> 
            <ProductList/>
        </>
    )
}

export default Home;