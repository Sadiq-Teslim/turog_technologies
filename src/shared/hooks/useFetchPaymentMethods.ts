import { PaymentMethodProps } from "@adiba-banking-cloud/backoffice/build/typings/components/widgets/payment_method/PaymentMethod.types";

export const useFetchPaymentMethods = () => {
    const isLoading = false;
    const hasError = false;
    const paymentMethods = fakePaymentMethods;
    const sectionTitle = "Payment Methods"; //TODO: Translation

    return {isLoading, hasError, sectionTitle, paymentMethods}
}

const fakePaymentMethods : PaymentMethodProps[] = [{
    isActive: true,
    pan: 9238,
    exp: '10/27',
    type: 'mastercard'
},{
    isActive: false,
    pan: 9238,
    exp: '10/27',
    type: 'verve'
},{
    isActive: false,
    pan: 9238,
    exp: '10/27',
    type: 'visa'
},{
    isActive: false,
    pan: 9238,
    exp: '10/27',
    type: 'visa'
}]