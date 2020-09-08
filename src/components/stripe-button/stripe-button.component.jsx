import React from 'react';
import StripeCheckout from 'react-stripe-checkout';



const StripeCheckoutButton=({price})=>{
    const priceForStripe=price*100;
    const publishableKey='pk_test_51HPCVdHYp5OtjYGnl3Wiyrlk1XiOKh9smnnusqxEGazizl6deIwfWH3aKcor5IRRIW9E45o981lqSy3ij0qyjTIi00AdWBunCS'
    const onToken=token=>{
        console.log(token);
        alert('Payment Successful');
    }
    return(
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
};

export default StripeCheckoutButton;
