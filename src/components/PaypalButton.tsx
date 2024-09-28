import { useEffect, useRef, MutableRefObject } from 'react';

interface PayPalButtonProps {
    amount: number;
}

const PayPalButton: React.FC<PayPalButtonProps> = ({ amount }) => {
    const paypalRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://www.paypal.com/sdk/js?client-id=YOUR_PAYPAL_CLIENT_ID";
        script.addEventListener('load', () => {
            if (window.paypal && paypalRef.current) {
                window.paypal.Buttons({
                    createOrder: (data, actions) => {
                        return actions.order.create({
                            purchase_units: [{
                                amount: {
                                    value: amount // Pass the donation amount as a prop
                                }
                            }]
                        });
                    },
                    onApprove: (data, actions) => {
                        return actions.order.capture().then(details => {
                            alert('Transaction completed by ' + details.payer.name.given_name);
                        });
                    },
                    onError: (err) => {
                        console.error("PayPal Checkout onError", err);
                    }
                }).render(paypalRef.current);
            }
        });
        document.body.appendChild(script);
    }, [amount]); // Re-run if the amount changes

    return <div ref={paypalRef} id="paypal-button-container"></div>;
};

export default PayPalButton;
