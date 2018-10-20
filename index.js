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
    $('#js-output').removeAttr('hidden').prepend(
        `<p class="js-market-name">${data.ticker.markets[selectedMarket].market}</p>
        <ul>
        <li class="js-coin-info">Price: $${data.ticker.markets[selectedMarket].price}</li>
        <li class="js-coin-info">Volume: ${data.ticker.markets[selectedMarket].volume}</li>
        </ul>`
    )   
    newSearch();
}

function dataRequest() {
    $('#select-market-form').submit(function(event){
        event.preventDefault();
        selectedMarket = $('select').find('option:selected').attr('value');
        $('#select-market-form, #subhead').toggleClass('hidden');
        ajaxCall();
    })
}

function newSearch() {
    $('#js-output').find('#new-search').click(function() {
        $('#js-output').empty().attr('hidden', true)
        $('#select-market-form, #subhead').toggleClass('hidden');
    })
}

dataRequest();