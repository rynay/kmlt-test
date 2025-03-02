export const getCountString = (count: number, value: string = 'test') => (
    `${count} ${value + (count === 1 ? '' : 's')}`
)