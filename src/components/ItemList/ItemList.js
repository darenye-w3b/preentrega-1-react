import Item from "../Item/Item"

const ItemList = ({item}) => {
    return(
        <div>
            {item.map(item => <Item key={item.id} {...item} />)}
        </div>
    )
}

export default ItemList