import ProductCard from "./ProductCard"
import { products } from "../data"
import Title from "./Title"

const Products = () => {
  return (
    <section className="py-10 align-element " id='services'>
      <Title text='Services Offered'/>
      <div className="py-10 grid lg:grid-cols-3 xl:grid-cols-3 gap-8">
        {products.map((product)=> {
            return <ProductCard key={product.id} {...product}/>
        })}
      </div>
    </section>
  )
}

export default Products
