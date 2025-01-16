import ProductCard from "./ProductCard"
import { products } from "../data"
import Title from "./Title"

const Products = () => {
  return (
    <section className="pt-40 align-element " id='services'>
      <Title text='Products Offered'/>
      <div className="py-10 grid lg:grid-cols-1 xl:grid-cols-1 gap-4">
        {products.map((product)=> {
            return <ProductCard key={product.id} {...product}/>
        })}
      </div>
    </section>
  )
}

export default Products
