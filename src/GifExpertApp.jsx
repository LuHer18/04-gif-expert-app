import { useState } from "react"
import { AddCategory, GifGrid } from "./components"


function GifExpertApp () {

    const [categories, setCategories ] = useState([ 'One Punch',])

    const onAddCategory = (value) => {
        if (categories.includes(value) ) return;
        setCategories([value,...categories ])
    }

    return(
        <>
            <h1>Gif Expert App</h1>
            <AddCategory 
                onAddCategory={onAddCategory}
            />                
            {categories.map((category) => (
                <GifGrid key={category} category={category}/>
            ))}
        </>
    )
}

export {GifExpertApp}