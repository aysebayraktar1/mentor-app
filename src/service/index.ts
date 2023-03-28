export const fetchMatches = async (): Promise<IResponse> => {
    const response = await fetch('https://641cadccb556e431a8746460.mockapi.io/matching', {
        method: 'GET',
    })

    return response.json()
}
