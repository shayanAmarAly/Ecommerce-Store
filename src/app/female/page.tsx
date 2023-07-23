"use client"
import Link from "next/link";
import { v4 as uuidv4 } from 'uuid';
import Image from "next/image";
import { use } from "react";
import {client} from "../../../sanity/lib/client";

async function sanityProducts() {
    const response = await client.fetch(`*[_type == "product" && product_category == "female"]{
        _id, title, Price, sub_category, "image": product_image.asset->url
    }`);
    return response;
}

const femaleProducts = sanityProducts();

const Page = () => {
    const products = use(femaleProducts);
    return (
        <div className="grid grid-cols-[auto,auto,auto,auto] justify-center gap-10 mt-10">
            <div>
                <div>
                    <h1 className='text-blue-700 font-bold text-sm text-center mt-32'>PRODUCTS</h1>
                    <h1 className='text-4xl font-bold text-center'>Check What We Have</h1>
                </div>
                <div className='grid mobile:grid-cols-1  tablet:grid-cols-3 max-w-[900px] mx-auto mt-10 '>
                    {
                        products.map((product: any, id: any) => {
                            return <div className='mt-5 mobile:ml-3 tablet:ml-0' key={id}>
                                <Link href={`https://ecommerce-flame-delta.vercel.app/productDetail/${product._id}`}>
                                <Image src={product.image} alt='logo' className='h-auto w-auto bg-cover' width={200} height={100} />
                                <h1 className="card-title">{product.title}</h1>
                                <h2 className='font-semibold text-lg py-3'>{product.sub_category}</h2>
                                <h2 className='text-xl font-bold'>${product.Price}</h2>
                                </Link>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Page





