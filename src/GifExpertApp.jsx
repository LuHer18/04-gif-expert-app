import { useState } from "react"
function GifExpertApp () {

    const [categories, setCategories ] = useState([ 'One Punch', 'Drangoball'])
    return(
        <>
            {/* title */}
            <h1>Gif Expert App</h1>

            {/* input */}

            {/* listado de gift */}

            <ol>
                {categories.map((category) => (
                    <li key={category}>
                        {category}
                    </li>
                ))}
            </ol>
                {/* gift items */}
        </>
    )
}

export {GifExpertApp}