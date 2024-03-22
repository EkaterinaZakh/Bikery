import React from 'react'
import type { CategoryType } from '../../types/cats';

type OneCategoryProps = {
    category: CategoryType;
  };

export default function CatList({category}: OneCategoryProps): JSX.Element {
    
  return (
    <div>
        {category.name}
    </div>
  )
}
