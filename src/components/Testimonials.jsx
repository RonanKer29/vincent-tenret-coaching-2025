import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import MaxWidthWrapper from "./MaxWidthWrapper";
import pic1 from "../assets/trail3.jpg";
import pic2 from "../assets/trail.png";
import pic3 from "../assets/trail2.jpg";

const Testimonials = () => {
  return (
    <div className=" bg-blue-1">
      <MaxWidthWrapper>
        <h1 className="text-3xl font-extrabold text-center uppercase text-blue-12">
          Témoignages
        </h1>
        <Carousel className="mx-auto mt-10 mb-20">
          <CarouselContent>
            <CarouselItem className="flex justify-center">
              <div className="w-[400px] h-[250px] md:w-[600px] md:h-[350px] lg:w-[800px] lg:h-[450px] overflow-hidden rounded-xl  shadow-lg">
                <img
                  src={pic1}
                  alt="Trail"
                  className="object-cover w-full h-full"
                />
              </div>
            </CarouselItem>
            <CarouselItem className="flex justify-center">
              <div className="w-[400px] h-[250px] md:w-[600px] md:h-[350px] lg:w-[800px] lg:h-[450px] overflow-hidden rounded-xl  shadow-lg ">
                <img
                  src={pic2}
                  alt="Trail"
                  className="object-cover w-full h-full "
                />
              </div>
            </CarouselItem>
            <CarouselItem className="flex justify-center">
              <div className="w-[400px] h-[250px] md:w-[600px] md:h-[350px] lg:w-[800px] lg:h-[450px] overflow-hidden rounded-xl  shadow-lg">
                <img
                  src={pic3}
                  alt="Trail"
                  className="object-cover w-full h-full"
                />
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </MaxWidthWrapper>
    </div>
  );
};

export default Testimonials;
