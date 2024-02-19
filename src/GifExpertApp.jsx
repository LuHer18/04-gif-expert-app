import { useState } from "react"
import { AddCategory } from "./components/AddCategory"
function GifExpertApp () {

    const [categories, setCategories ] = useState([ 'One Punch', 'Drangoball'])

    const onAddCategory = (value) => {
        if (categories.includes(value) ) return;
        setCategories([value,...categories ])
    }

    return(
        <>
            {/* title */}
            <h1>Gif Expert App</h1>

            {/* input */}
            <AddCategory 
                //setCategories={setCategories} categories= {categories}
                onAddCategory={onAddCategory}
            />    

            {/* listado de gift */}
            
            <ol>
                {categories.map((category) => (
                    <li key= {category}>
                        {category}
                    </li>
                ))}
            </ol>
                {/* gift items */}
        </>
    )
}

export {GifExpertApp}