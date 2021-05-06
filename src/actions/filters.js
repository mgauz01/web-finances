//SET TEXT FILTER
export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text: text
})

// SORT BY DATE
export const sortByDate = () => ({
    type: 'SORT_BY_DATE'
})


//SORT BY AMOUNT
export const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
})

//Set start date
export const setStartDate = (startDate = undefined) => ({
    type: 'SET_START_DATE',
    startDate: startDate
})
//Set end date
export const setEndDate = (endDate = undefined) => ({
    type: 'SET_END_DATE',
    endDate: endDate

})

