
const getGuidePrice = (itemId) => {
    fetch(
        `https://api.rsbuddy.com/grandExchange?a=guidePrice&i=${itemId}`
    ).then(function(response){
        return response.json();
    });
}

const RSExchange = {
    getGuidePrice
};
