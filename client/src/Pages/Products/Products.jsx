import { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('/product.json')
      .then(response => response.json())
      .then(data => {
        setProducts(data)
      })
  }, [])

  console.log(products)
  return (
    <div>
      <h1></h1>
      <h6></h6>
    </div>
  )
}
