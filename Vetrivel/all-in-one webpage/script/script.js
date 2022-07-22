function Pages(event)
{
    event.preventDefault();
    window.history.pushState({}, '', event.target.href);
    pagePath();
    
}
const store ={
    '/MP' : './ENNEAD/All-in-one/multiplication/index.html',
    '/carName' : './ENNEAD/All-in-one/character API/index.html',
    '/CC' : './ENNEAD/All-in-one/character_counting/index.html',
    '/covid' : './ENNEAD/All-in-one/covid-info/vetri.html'
}

function pagePath(){
    let path = window.location.pathname;
    let webPage = store[path] ? store[path] : store['/covid'];
    fetch(pagePath)
    .then(function(local){
        local.text()
        .then(function(non_local){
            document.querySelector('.page-container').innerHTML = non_local;
        });
    });
}
