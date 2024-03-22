import React from 'react';
import { useAppSelector } from '../../redux/hooks';
import CatList from '../ui/CatList';


export default function ShopPage(): JSX.Element {
  const categories = useAppSelector((state) => state.categories.categories)
  return (
  <div>
    {categories.map((category) => 
    <CatList key={category.id} category={category}/>)}
  </div> 
  )
}
