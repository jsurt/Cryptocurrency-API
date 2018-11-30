function ajaxCall() {
    $.ajax({
        type: 'GET',
        dataType: 'json',
        url: 'https://api.cryptonator.com/api/full/btc-usd',
        success: displayCoinData
    })
}

function displayCoinData(data) {
    console.log(data);
    console.log(selectedMarket); 
    $('#js-data-output').removeAttr('hidden').prepend(
        `<p class="js-market-name">${data.ticker.markets[selectedMarket].market}</p>
        <ul>
        <li class="js-coin-info">Price: $${data.ticker.markets[selectedMarket].price}</li>
        <li class="js-coin-info">Volume: ${data.ticker.markets[selectedMarket].volume}</li>
        </ul>
        <button id="new-search">Test</button>`
    )   
    newSearch();    
}

function dataRequest() {
    $('#select-market-form').submit(function(event){
        event.preventDefault();
        selectedMarket = $('select').find('option:selected').attr('value');
        $('#select-market-form, header').toggleClass('hidden');
        ajaxCall();
    });

}

function newSearch() {
    $('#js-data-output').find('#new-search').click(function() {
        $('#js-data-output').empty().attr('hidden', true)
        $('#select-market-form, header').toggleClass('hidden');
    });
    
}

function getTweets() {
    $.ajax({
        type: 'GET',
        dataType: 'json',
        url: 'https://api.twitter.com/1.1/search/tweets.json',
        data: {
            oauth_consumer_key: 'P1kS3WKlnHpDRLyJnbI0skmUB',
            q: 'cats'
        },
        success: function() {
            console.log(data);
        }
    });
}

getTweets();

dataRequest();