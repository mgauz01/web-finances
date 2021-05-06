export default (expenses, {text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.cretedAt >= startDate
        const endDateMatch = typeof startDate !== 'number' || expense.cretedAt <= endDate 
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch
    }).sort((a, b) => {
        if (sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1:-1
        }
        if (sortBy === 'amount'){
            return a.amount < b.amount ? 1:-1
        }
    })
}