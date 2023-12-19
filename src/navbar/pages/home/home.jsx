import React, {useState} from 'react';
import styles from './home.module.css';
import product1Image from '../../../image/lemon.jpg';
import product2Image from '../../../image/grep.jpg';
import product3Image from '../../../image/orange.jpg';
const ProductItem = ({ id, name, image, description }) => {
   const [isHovered, setIsHovered] = useState(false);
 
   return (
     <div
       className={`${styles['product-item']} ${isHovered ? styles['hovered'] : ''}`}
       onMouseEnter={() => setIsHovered(true)}
       onMouseLeave={() => setIsHovered(false)}
     >
       <img className={styles['image-container']} src={image} alt={name} />
       <h3>{name}</h3>
       <p>{description}</p>
     </div>
   );
 };

const Home = () => {
   const products = [
      { id: 1, name: 'lemon', image: product1Image, description: 'price:' },
      { id: 2, name: 'grep', image: product2Image, description: 'price:' },
      { id: 3, name: 'orange', image: product3Image , description: 'price:' },
   ];
  return  (
   <div className={styles['home-container']}>
      <h1>Welcome to Our Shop!</h1>
      <div className={styles['product-list']}>
        {products.map((product) => (
          <ProductItem key={product.id} {...product} />
        ))}
      </div>
    </div>
 );
 
};

export default Home;