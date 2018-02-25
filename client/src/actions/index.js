export const payloadForwardingAction = type => object => ({type, payload: object});
export const constantAction = type => _ => ({type});
