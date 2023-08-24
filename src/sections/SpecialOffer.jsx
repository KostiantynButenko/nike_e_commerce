import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/Button"


const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap
    items-center max-xl:flex-col-reverse
    gap-10 max-container">
       <div className="flex-1">
         <img src={offer} width={773} height={687}
         className="object-contain"/>
       </div>

       <div className="flex flex-1 flex-col"> 
         <h2 className="mt-10 font-palanquin text-4xl
         font-bold capitalize lg:max-w-lg">
      
          <br />
          <span className="text-coral-red"> Special </span>
          Offer
         </h2>
          <p className="mt-4 lg:max-w-lg info-text">
          Elevate your style and comfort with our exclusive 
          shoe offer! Explore a curated collection of footwear for all occasions.
           Don't miss out - start shopping now at and step into a world of fashion 
           and quality!
          </p>
          <p className="mt-6 lg:max-w-lg
          info-text">Upgrade your shoe game today with our special offer!
           Browse through a curated collection of stylish and comfortable footwear for every event. 
          </p>
          <div className="mt-11 flex flex-wrap gap-4">
          <Button label='Shop Now' iconURL={arrowRight}/>
          <Button 
            label='Learn More'
            backgroundColor='bg-white'
            borderColor='border-slate-gray'
            textColor='text-slate-gray'
          />
          </div>
      </div>
    </section>
  )
}

export default SpecialOffer