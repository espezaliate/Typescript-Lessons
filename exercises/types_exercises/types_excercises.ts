/*
  Ćwiczenie 1

  Utwórz typ płatności zawierający kwotę, walutę (tylko 'PLN') oraz datę
*/

type Payment = {
  value: number,
  currency: 'PLN',
  date: Date,
}

/*
  Ćwiczenie 2

  Utwórz typ produktu zawierający nazwę, cenę, ilość dostępnych sztuk, rodzaj produktu (tylko 'telefon' i 'komputer')
*/

enum Device{
  phone = 1,
  computer = 2
  } 

type Product = {
  name: string,
  price: number,
  available: number,
  type: Device
}

/*
  Ćwiczenie 3

  Utwórz typ zamówienia zawierający informację o płatności (ćwiczenie 1),
  produkcie (ćwiczenie 2) oraz datę zamówienia oraz statusem (tylko 'rozpoczęta', 'w trakcie', 'zakończona')
*/

enum Status{
  INITIALIZED = 'initialized',
  PROCESSING = 'processing',
  FINISHED = 'finished'
} 


type Order ={
  payment: Payment,
  product: Product,
  orderDate: Date,
  status: Status
}


/*
  Ćwiczenie 4

  Utwórz funkcję która zwróci informację o produkcie (ćwiczenie 2) z przekazanego do niej zamówienia (ćwiczenie 3)
*/

function productOrderInformation(order: Order){
  return order.product
}


/*
  Ćwiczenie 5

  Utwórz funkcję która zwróci informację o płatnośći (ćwiczenie 1) z przekazanego do niej zamówienia (ćwiczenie 3)
*/


function productPaymentInformation(order: Order){
  return order.payment
}

/*
  Ćwiczenie 6

  Dodaj odpowieni tym do funkci handleOnChange (to zadanie wykomnujemy w https://www.typescriptlang.org/play)
*/


import React from 'react';

const Component = () => {
    const handleOnChange = (event: unknown) => {
        console.log(event.target);
    };
    return (
        <input onChange={handleOnChange} />
    )
};