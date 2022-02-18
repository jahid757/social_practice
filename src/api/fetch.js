// fetch data

export const fetchData =  (url) => {
    fetch(`${url}${process.env.REACT_APP_API_KEY}`)
    .then(response => response.json())
    .then(data => {return data})
}