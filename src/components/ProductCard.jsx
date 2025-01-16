
import {TbWorldWww} from 'react-icons/tb'

const ProductCard = ({ url, img, title, text }) => {
  return (
    <article className="bg-white, rounded-lg shadow-md hover:shadow-xl duration-300">
      <img
        src={img}
        alt={title}
        className="w-full object-cover rounded-t-lg h-64"
      />
      <div className="capitalize p-8">
        <h2 className="text-4xl text-cyan-600 tracking-wide font-medium">
          {title}
        </h2>
        <p className="mt-4 text-slate-700 leading-loose">{text}</p>

        <div className="mt-4 flex gap-x-4">
          <a href={url} target="_blank">
            <TbWorldWww className="h-14 w-14 text-cyan-600 hover:text-cyan-400 duration-300" />
          </a>{' '}
          <a href={url} target="_blank">
          <span>
            {' '}
            <h3 className="pt-5 text-cyan-500 font-bold">
              Click here to Review products and lucrative business
              opportunity
            </h3>
          </span>  </a>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
