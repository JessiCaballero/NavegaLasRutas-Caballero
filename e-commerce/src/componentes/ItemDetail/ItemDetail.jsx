import React from 'react'

export const ItemDetail = ({ producto }) => {

   

 

 
    return (
        <div>
            <h3>{nombre}</h3>
            <img src={image} alt={`foto del producto ${nombre}`} />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium nostrum labore aliquid a placeat blanditiis earum quibusdam vel quasi quos provident eos, obcaecati temporibus et? Laudantium libero praesentium nesciunt mollitia nisi consequuntur cumque nulla, doloremque quia nobis nostrum itaque. Optio qui repudiandae inventore, fugit itaque eligendi praesentium explicabo id voluptas aspernatur facilis at perferendis quam. Placeat similique possimus distinctio labore?
            </p>
            <p>{precio}</p>
        </div>
    )
}

