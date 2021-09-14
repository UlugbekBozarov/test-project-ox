export const UPDATE_AFTARIZATED = 'UPDATE_AFTARIZATED';

export function updateAftarizated(newToken) {
    return {
        type: UPDATE_AFTARIZATED,
        payload: {
            aftarizated: newToken
        }
    }
}