"use client"
import { newsData } from "@/newsData/News";
import Image from "next/image";
import { useParams } from "next/navigation";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
// import './styles.css';
import { Pagination } from 'swiper/modules';

const NewsDetails = () => {
    const { id } = useParams();
    const allData = newsData.map((item) => item)
    const data = allData.find((items) => items.id !== id)
    return (
        <div className="w-[1440px] mx-auto">
            <h1 className="text-center text-[66px] font-semibold ml-[193px] mr-[263px]">{data?.title}</h1>
            <p className="text-center">{data?.date}</p>
            <div className="flex justify-center">
                <Image className="w-[1320px] h-[521px] my-[70px]" src={data?.image} alt="Loding...." width={1320} height={521} />
            </div>
            <div className="px-[60px]">
                <h3 className="mb-5 text-2xl">{data?.disc1}</h3>
                <h3 className=" mb-5 text-2xl">{data?.disc2}</h3>
                <h3 className="mb-5 text-2xl">{data?.disc3}</h3>
                <h3 className="mb-5 text-2xl">{data?.disc4}</h3>
                <h3 className="mb-5 text-2xl">{data?.disc5}</h3>
                <h3 className="mb-5 text-2xl">{data?.disc6}</h3>
                <h3 className="mb-[134px] text-2xl">{data?.disc7}</h3>
            </div>
            <div className="bg-[#FCF7EF] h-[950px] p-[60px]">
                <div className="border-b-[1.5px] border-[#B8B8B8]">
                    <h1 className="text-[70px] font-semibold mb-10">Other News</h1>
                </div>
                <Swiper
                    slidesPerView={2}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper mt-10"
                >
                    <SwiperSlide>
                        <div>
                            <Image src="/image/img1.png" alt="Loding...." width={648} height={415} />
                            <h1 className="text-[22px] font-medium mt-5">Collaboration to Develop Coffee and Beverage Industry Expertise in Indonesia</h1>
                            <div className="flex gap-[10px] mt-[18px]">
                                <p className="text-xl">4 Min</p>
                                <li className="text-xl">August 19,2024</li>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <Image src="/image/img2.png" alt="Loding...." width={648} height={415} />
                            <h1 className="text-[22px] font-medium mt-5">Collaboration to Develop Coffee and Beverage Industry Expertise in Indonesia</h1>
                            <div className="flex gap-[10px] mt-[18px]">
                                <p className="text-xl">4 Min</p>
                                <li className="text-xl">August 19,2024</li>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="pb-[50px]">
                        <div>
                            <Image src="/image/img3.png" alt="Loding...." width={648} height={415} />
                            <h1 className="text-[22px] font-medium mt-5">Collaboration to Develop Coffee and Beverage Industry Expertise in Indonesia</h1>
                            <div className="flex gap-[10px] mt-[18px]">
                                <p className="text-xl">4 Min</p>
                                <li className="text-xl">August 19,2024</li>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default NewsDetails;