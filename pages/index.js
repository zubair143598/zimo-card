import Buy from "@/components/Buy";
import Carousel from "@/pages/Carousel";





export default function Home() {
  return (
    <main
      className={` flex  flex-col items-center  py-3 justify-between `}
    >
      <div>
        <Carousel />
       <Buy/>
       
      </div>
      
    </main>
  )
}
