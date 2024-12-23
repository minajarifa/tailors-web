import { useEffect, useState } from "react";

export default function useAllProducts() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('/product.json')
            .then(response => response.json())
            .then(data => {
                setProducts(data)
            })
    }, [])

return products
}
