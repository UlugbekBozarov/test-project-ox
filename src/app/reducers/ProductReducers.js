import { UPDATE_PPRODUCT } from "../actions/ProductAction";

export default function productReducer(state = [], {type, payload}) {
    switch (type) {
        case UPDATE_PPRODUCT:
            return payload.products;
        default:
            return state;
    }
}