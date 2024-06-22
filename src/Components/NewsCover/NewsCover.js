"use client"
import Image from "next/image";
import { newsData } from './../../newsData/News';
import { useEffect, useState } from "react";
import Link from "next/link";
const NewsCoverPage = () => {
    const [data, setData] = useState([]);
    const [visibleData, setVisibleData] = useState([]);
    const [itemsToShow, setItemsToShow] = useState(5);

    useEffect(() => {
        setVisibleData(newsData.slice(0, itemsToShow));
        setData(newsData);
    },[itemsToShow]);

    const loadMore = () => {
        const newItemsToShow = itemsToShow + 5;
        setItemsToShow(newItemsToShow);
        setVisibleData(data.slice(0, newItemsToShow));
    };


    return (
        <div>
            <div className='w-[1440px] h-[835px] bg-[#FCF7EF]'>
                <div className='text-center'>
                    <h1 className='text-[90px] font-semibold'>Our News</h1>
                    
                    <p className='text-xl font-medium mt-[17px]'>Get the latest updates and deeper coffee experience from IMAJI Coffee</p>
                </div>
                <div className="flex justify-center mt-10 mb-[30px]">
                    <Image src='/image/cover.png' alt="Loding...." width={1194} height={406} />
                </div>
                <div className="ml-[123px]">
                    <p className="text-3xl font-medium">Collaboration to Develop Coffee and Beverage Industry Expertise in Indonesia</p>
                    <div className="flex gap-[10px] mt-[10px]">
                        <p className="text-xl font-normal">4 Min</p>
                        <li className="text-xl font-normal">August 19,2024</li>
                    </div>
                </div>
            </div>
            <div className="mt-20 w-[1224px] mx-auto">
            
                    {visibleData.map((news) => (
                        <Link  key={news.id} href={`/${news.id}`}>
                        <div className="border-t-[1.5px] border-[#B8B8B8]">
                            <div className="flex gap-[60px] items-center  pt-5 pb-[50px]">
                                <Image src={news?.image} width={261} height={205} alt="" />
                                <div>
                                    <h1 className="text-[46px] font-medium">{news?.title}</h1>
                                    <div className="flex gap-[10px]">
                                        <p className="text-xl font-normal">{news?.time}</p>
                                        <li className="text-xl font-normal">{news?.date}</li>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </Link>
                    ))}
               
                <div className="flex justify-center mt-[30px] pb-10">
                    {visibleData.length < data.length && (
                        <button className="border border-[#986B24] text-[#986B24] font-xl py-[14px] px-[24px]" onClick={loadMore}>Load More</button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default NewsCoverPage;