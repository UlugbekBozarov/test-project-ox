import { UPDATE_AFTARIZATED } from "../actions/AftarizatedActions";

export default function aftarizatedReducer(state = [], {type, payload}) {
    switch (type) {
        case UPDATE_AFTARIZATED:
            return payload.aftarizated;
        default:
            return state;
    }
}