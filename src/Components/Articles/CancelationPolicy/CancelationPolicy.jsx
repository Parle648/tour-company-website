import React from 'react';
import './CancelationPolicy.scss';

const CancelationPolicy = props => {
    return (
        <div className='CancelationPolicy'>
            <h2 className='CancelationPolicy__ttl'>Cancellation policy</h2>
            <h2 className="CancelationPolicy__topic-ttl">You can cancel your purchase of a subscription service and request a refund within 14 days from the initial transaction date.</h2>
            <p className='CancelationPolicy__topic-subttl'>
                The refund may be reduced pro-rata to reflect the use you have had of the service. This may show as two transactions in your account transaction history:
                 a refund to your wallet of the full amount originally paid and then a debit of a charge for the period of the service you received.
            </p>
            <p className='CancelationPolicy__topic-subttl'>
                If you take advantage of a free trial when you sign up to a service, the 14-day cancellation period will commence on the day we accept your order of
                the free trial and the duration of the free trial will be included in the 14-day period. For example, you sign up for a free trial which lasts 7 days
                and your wallet is debited for the subscription at the end of the trial, you will have 7 days after your wallet was debited to cancel.
            </p>
            <p className='CancelationPolicy__topic-subttl'>
                Note: When you purchase a subscription service such as PlayStation®Plus, you agree to a rolling subscription with periodic billing (e.g. annual billing). 
                You can stop making payments at any time by turning off [Auto-renewal] (click here for more information) but, beyond the initial 14-day cancellation period,
                you will not receive a refund for payments already made. When you turn off [Auto-renewal], your subscription will continue until the next payment is due, at
                which point it will end.
            </p>
            <h2 className="CancelationPolicy__topic-ttl">Further Information</h2>
            <p className='CancelationPolicy__topic-subttl'>
                We recommend that you take care when you top up your wallet or make a purchase on PlayStation™Store. A number of account features are available so you can keep track of your account activity.
            </p>
            <p className='CancelationPolicy__topic-subttl'>
                To control the purchases made from the PlayStation™Store, via your account and console ensure you (i) use our password and passcode tools to control unauthorised log-in to and purchases via your account and (ii) if you have children, set up a separate account for each child and use our parental controls to limit their expenditure or prevent them shopping at all.
            </p>
        </div>
    );
};

export default CancelationPolicy;