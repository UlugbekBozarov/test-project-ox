export const UPDATE_PPRODUCT = 'UPDATE_PRODUCT';

export function updateProduct(newProduct) {
    return {
        type: UPDATE_PPRODUCT,
        payload: {
            products: newProduct
        }
    }
}