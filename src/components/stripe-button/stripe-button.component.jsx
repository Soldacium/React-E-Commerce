import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
    //stripe wants price in cents(USD)
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_51Hop6HFynbvUfMqYZr5Ql1zxsXr29TysrPh4Vwb8KBUMIE2Bae2Fj0y3SK9xWQTtuarwrd8nopd5MEzsFF0CDFtc003ISeu1la'

    const onToken = token => {
        console.log(token)

    }
    return(
        <StripeCheckout 
            label='Pay now'
            name='Crown Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            panelLabel='Pay now'
            token= {onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton