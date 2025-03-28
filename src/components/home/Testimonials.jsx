import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Testimonials = () => {
    const testimonials = [
        {
            name: "Lyod Gomez",
            subtitle: "Founder, TechCorp",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque aliquid natus officia labore dolorum facere? Harum consequuntur amet temporibus autem.",
            image: "https://picsum.photos/150/150",
        },
        {
            name: "Anna Smith",
            subtitle: "CEO, Innovate Solutions",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque aliquid natus officia labore dolorum facere? Harum consequuntur amet temporibus autem.",
            image: "https://picsum.photos/150/150?grayscale",
        },
        {
            name: "John Doe",
            subtitle: "Designer, CreativeWorks",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque aliquid natus officia labore dolorum facere? Harum consequuntur amet temporibus autem.",
            image: "https://picsum.photos/150/150?blur",
        },
        {
            name: "Samantha Brown",
            subtitle: "Software Engineer, ABC Corp.",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque aliquid natus officia labore dolorum facere? Harum consequuntur amet temporibus autem.",
            image: "https://picsum.photos/150/150?random=2",
        },
        {
            name: "Alexandra Williams",
            subtitle: "Graphic Designer",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque aliquid natus officia labore dolorum facere? Harum consequuntur amet temporibus autem.",
            image: "https://picsum.photos/150/150?random=3",
        },
    ];

    return (
        <section className="py-16">
            <div className="container mx-auto px-5">
                <h2 className="text-center text-4xl font-bold font-lora mb-6">
                    What Our Customers Say
                </h2>
                <p className="text-center text-gray-700 mb-12 max-w-xl mx-auto">
                    Hear from our valued customers who have experienced the
                    excellence of our service and support.
                </p>
                <Swiper
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    spaceBetween={30}
                    slidesPerView={1}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 3 },
                    }}
                    modules={[Autoplay, Navigation]}
                    className="testimonials-swiper"
                    navigation={true}
                >
                    {testimonials.map((testimonial, index) => (
                        <SwiperSlide
                            key={index}
                            className="bg-white p-8 rounded-xl hover:shadow-lg btn-transition border border-gray-300"
                        >
                            <div className="flex flex-col items-center">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-20 h-20 rounded-full mb-4"
                                />
                                <h3 className="text-xl font-semibold mb-1 font-lora">
                                    {testimonial.name}
                                </h3>
                                <h4 className="text-sm font-medium mb-4">
                                    {testimonial.subtitle}
                                </h4>
                                <p className="text-gray-600 text-center">
                                    "{testimonial.text}"
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonials;
