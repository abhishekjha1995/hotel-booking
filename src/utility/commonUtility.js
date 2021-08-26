export function validFormData(data) {
    return Object.values(data).every(value => value)
}