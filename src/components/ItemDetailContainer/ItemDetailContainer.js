import { getDoc, doc } from "firebase/firestore"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import { db } from "../../config/firebase"



const ItemDetailContainer = () => {
    const [item, setItem] = useState(null)

    const {itemId} = useParams()

    useEffect(() => {
        const docRef = doc(db, "products", itemId)

        getDoc(docRef)
        .then((response) =>{
            setItem(
                {...response.data(), id: response.id}
            );

        })

    }, [itemId])

    return(
        <div>
            <ItemDetail {...item} />
        </div>
    )
}

export default ItemDetailContainer

