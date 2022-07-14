import moment from 'moment'

const expenses = [{
    id: '1',
    description: 'Gum',
    note: 'Lol',
    amount: 900,
    createdAt: 0
}, {
    id: '2',
    description: 'Rent',
    note: 'hmmm',
    amount: 10095,
    createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
    id: '3',
    description: 'Credit card',
    note: 'haha',
    amount: 4500,
    createdAt: moment(0).add(4, 'days').valueOf()
}]

export default expenses