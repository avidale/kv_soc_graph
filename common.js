function show_big_card_for_member(member) {
    var big_card = document.createElement('div');
    big_card.className = "card-big";
    big_card.id = "card-big";
    big_card.innerHTML = [
        '<div style="text-align:right;"><a href="javascript:remove_big_card();"> Закрыть </a></div>'
        ,'<h2>' + member['name'] + '</h2>'
        ,'<img src="' + member['img'] + '" class="avatar-big">'
        ,'<div class="fact-list"><ul>'
        ,'<li>Образование: ' + member['bachelor'] +'</li>'
        ,'<li>Работа: ' + member['job'] +'</li>'
        ,'<li>Интересы: ' + member['interests'] +'</li>'
        ,'<li>Хобби: ' + member['hobby'] +'</li>'
        ,'</ul>', 
        ,'</br><a href="' + member['url'] + '"> ВКонтакте </a>'
        ,'</div>'
    ].join('\n')
    document.body.appendChild(big_card);
}

function remove_big_card() {
    var element = document.getElementById('card-big');
    element.parentNode.removeChild(element);
}