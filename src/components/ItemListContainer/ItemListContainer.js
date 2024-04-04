import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList"
import { db } from "../../config/firebase"
import Item from "../Item/Item";

const ItemListContainer = ({ greeting }) => {

    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()

    useEffect(() => {
        const collectionRef = collection(db, "products");

        const q = categoryId ? query(collectionRef, where("category", "==", categoryId)) : collectionRef;

        getDocs(q)
        .then((response)=>{

            setItem(
                response.docs.map((doc)=>{
                    return {...doc.data(), id: doc.id}
                })
            )
        })
    }, [categoryId])

    return (
        <div>
            <h1>{greeting}</h1>
            <section>
                <ItemList item={item} />
            </section>
        </div>
    )
    
}

export default ItemListContainer;