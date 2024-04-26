import { useUserContext } from '@/context/AuthContext'
import React from 'react'
import { Description, QuantityButton, Title } from '.';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';

export default function ProductsCard({ product }) {
  const { user } = useUserContext();
  
  return (
    <div className=' w-96 bg-card border p-4 border-border flex flex-col justify-start items-start rounded-md'>
      
      <div className=' w-full h-96'>
        <Link to={`/product/${product.$id}`}>
          <img
            src={product.imageUrl}
            alt='product image'
            className=' rounded-md w-full h-full object-cover'
          />
        </Link>
      </div>
      <div className=' w-full flex flex-col gap-2 justify-start items-start pt-4'>
        <Description description={product.title} classname={` text-primary w-full text-center text-xl`} />
        <Description description={`₹ `+product.price} classname={` text-primary w-full text-center text-lg`} />
      </div>

    </div>
  )
}
