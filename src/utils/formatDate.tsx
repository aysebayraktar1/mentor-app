export const formatDate = (dateString: string): string => {
    const dateObject = new Date(dateString)

    const day = dateObject.getUTCDate()
    const month = String(dateObject.getUTCMonth() + 1).padStart(2, '0')
    const year = dateObject.getUTCFullYear()

    return `${day}/${month}/${year}`
}
