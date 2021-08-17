import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51JPGubCSLFmPsEJf2L2DoYODU5eb4IDVTsBXdibmmpzKafHaLaWF278bMEaFpzwK3xanDxRr429rO4MbKDNZTLp500atsJgED3';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful!');
    }

    return (
        <StripeCheckout 
            label='Pay Now'
            name='CRWN CLOTHING LTD.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        
        />
    );
};

export default StripeCheckoutButton;