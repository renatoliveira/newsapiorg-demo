const NewsAPI = require('newsapi')
const apiInstance = new NewsAPI('99266935612e440aa8d15feb9cd171b1');

apiInstance.v2.everything({
    sources: 'bloomberg,abc-news',
    q: 'fb'
}).then(response => {
    console.log(response['articles'][0])
})
