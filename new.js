var pizzas = [
  {
      photos : "img/1.jpg",
      name : "Кватро - Карне",
      composition: ["томатный соус", "сыр", "бужинина", "пастурма", "балык", "карбонат"],
      calories : 1580,
      price : 159
  },
  {
      photos : "img/2.jpg",
      name : "Свит чили с курицей",
      composition: ["соус свит чили", "куриное филе", "ананасы", "перец болгарский", "сыр моцарелла", "сыр пармезан", "орегано", "базилик"],
      calories : 1340,
      price : 189
  },
  {
      photos : "img/3.jpg",
      name : "4 cыра с копченостями",
      composition: ["томатный соус", "сыр моцарелла", "сыр чеддер", "сыр дор-блю", "сыр пармезан", "балык", "курица копченая", "салями", "ветчина",  "петрушка", "орегано"],
      calories : 1860,
      price : 199
  },
  {
      photos : "img/4.jpg",
      name : "4 мяcа",
      composition: ["томатный соус", "сыр моцарелла", "говядина", "куриное филе", "салями",  "бекон", "помидор", "лук крымский", "орегано"],
      calories : 1730,
      price : 179
  },
  {
      photos : "img/5.jpg",
      name : "Cвит чили со свининой",
      composition: ["соус свит чили", "свинина", "ананасы", "перец болгарский", "сыр моцарелла", "сыр пармезан", "орегано","базилик"],
      calories : 1430,
      price : 169
  },
  {
      photos : "img/6.jpg",
      name : "Карбонара",
      composition: ["соус сливочный", "бекон", "лук крымский", "помидоры черри", "сыр моцарелла", "сыр пармезан", "орегано","базилик"],
      calories : 1330,
      price : 209
  },
  {
      photos : "img/7.jpg",
      name : "Болоньезе",
      composition: ["соус томатный", "говядина", "лук", "морковь", "сельдерей", "помидоры черри", "сыр моцарелла", "сыр пармезан", "орегано","базилик"],
      calories : 1290,
      price : 219
  },
  {
      photos : "img/8.jpg",
      name : "C пармской ветчиной",
      composition: ["соус томатный", "ветчина пармская", "помидоры черри", "сыр моцарелла", "сыр пармезан", "орегано","руккола"],
      calories : 1270,
      price : 200
  },
  {
      photos : "img/9.jpg",
      name : "Mясная",
      composition: ["соус сливочный", " шампиньоны","куриный окорок", "свинина", "лук крымский", "помидоры черри", "сыр моцарелла", "сыр пармезан", "орегано","базилик"],
      calories : 1387,
      price : 239
  },
  {
      photos : "img/10.jpg",
      name : "Баварская",
      composition: ["соус томатный", "колбаски охотничьи", "лук крымский", "оливки", "сыр моцарелла", "орегано", "петрушка", "опята маринованные"],
      calories : 1187,
      price : 149
  },
  {
      photos : "img/11.jpg",
      name : "C салями и беконом",
      composition: ["соус томатный", "бекон", "салями", "моцарелла", "корнишоны", "шампиньоны", "орегано", "петрушка"],
      calories : 1787,
      price : 249
  },
  {
      photos : "img/12.jpg",
      name : "Hеапольская",
      composition: ["соус томатный", "бекон",  "моцарелла", "охотничьи колбаски", "помидор", "орегано", "петрушка"],
      calories : 1564,
      price : 279
  },
  {
      photos : "img/13.jpg",
      name : "Итальяни",
      composition: ["соус томатный", "бекон",  "моцарелла", "ветчина", "салями", "куриное филе", "помидор", "перец болгарский", " шампиньоны", "орегано", "петрушка"],
      calories : 1364,
      price : 259
  },
  {
      photos : "img/14.jpg",
      name : "C морепродуктами",
      composition: ["соус тартар", "мидии", "кальмар", "креветка атлантическая", "сыр моцарелла", "орегано", "лимон", "маслины", "руккола"],
      calories : 1104,
      price : 289
  },
  {
      photos : "img/15.jpg",
      name : "C куриным филе",
      composition: ["соус сливочный", "моцарелла", "куриное филе", "лук крымский", "маслины", "шампиньоны", "орегано", "петрушка"],
      calories : 1334,
      price : 239
  }
]

var bodys = document.getElementById("bodyId");

var first = document.createElement('div');
first.className = "first_container";
first.setAttribute('id', 'showdiv');
bodys.appendChild(first);

var conteiner_div = document.createElement('div');
conteiner_div.className = "grid";
first.appendChild(conteiner_div);

var grids = document.getElementById("showdiv");

function printGrid(d){
      conteiner_div.innerHTML = '';
      for (var i = 0; i < d.length; i++) {
          var element = document.createElement('div');
          element.className = 'inside_grid';
     
          var names = document.createElement('p');
          names.className = 'pizza_name';
          names.textContent = pizzas[i].name;
          element.append(names);
  
          var imgs = document.createElement('img');
          imgs.setAttribute('src', pizzas[i].photos);
          imgs.className = "img_class";
          imgs.setAttribute('alt', 'pizza photo');
          element.append(imgs);
  
          var lists = document.createElement('ul');
          lists.className = "pizza_composition";
          element.append(lists);
  
          var title = document.createElement('span');
          title.textContent = 'Состав: ';
          lists.append(title);
  
          var mass = pizzas[i].composition;
          var mass1 = [];
          for (var ind in mass){
              mass1.push(mass[ind]);
          }
          
          for(j =0; j < mass1.length; ++j){
              var com = document.createElement('li');
              if(mass[j] == mass[mass.length-1]){
                  com.textContent = mass1[j];
              } else {
              com.textContent = mass1[j] + ', ';
              }
              lists.append(com);
         }
        
          var calo = document.createElement('p');
          calo.className = "pizza_calories";
          calo.textContent = pizzas[i].calories;
  
          var nac = document.createElement('span');
          nac.textContent = 'Калории: ';
          calo.insertAdjacentElement("afterbegin", nac );
  
          element.append(calo);
  
          var cost = document.createElement('p');
          cost.className = "pizza_price";
          cost.textContent = pizzas[i].price;
          
  
          var nac = document.createElement('span');
          nac.textContent = 'Цена: ';
          cost.insertAdjacentElement('afterbegin', nac);
  
          element.append(cost);

          conteiner_div.append(element);
  }
  return conteiner_div;
} 

var cont = document.createElement('div');
cont.className = "second_con";
cont.setAttribute('id', 'showdivList');
first.parentNode.insertBefore(cont, first.nextSibling);



var list_pizza = document.getElementById("showdivList");
              
var container_div = document.createElement('div');
container_div.className = "container_div";
container_div.setAttribute('id', 'cont_div');
cont.appendChild(container_div);

var pizza_list = document.createElement('ul');
pizza_list.className = "pizza_list";
pizza_list.setAttribute('id', 'pizzaList');
container_div.appendChild(pizza_list);

function printList(){
      for(var l = 0; l < pizzas.length; l++){
          var li = document.createElement('li');
          li.className = "li_desc";
          pizza_list.appendChild(li);

          var im = document.createElement('img');
          im.className = "icon";
          im.setAttribute('src', 'img/icon.png');
          im.setAttribute('alt', 'pizza_icon');
          li.append(im);

          var nameList = document.createElement('p');
          nameList.className = "p_desc";
          nameList.textContent = pizzas[l].name + ' ' + pizzas[l].calories + ' ккал ' + pizzas[l].price + ' грн';
          nameList.insertAdjacentElement("afterbegin", im);

          li.insertAdjacentElement("afterbegin", nameList);
      }
}
printGrid(pizzas);
printList();

var array = ['Выберите сортировку', 'По убыванию цены', 'По возростанию цены', 'По убыванию калорий', 'По возростанию калорий'];
var btn = document.getElementById('btn_list');
var sEle = document.createElement('select');
sEle.className = "selection";
sEle.setAttribute('id', 'selection');
btn.parentNode.insertBefore(sEle, btn.nextSibling);

for (var i = 0; i < array.length; ++i) {
  var oEle = document.createElement('option');
  if (i == 0) {
    oEle.setAttribute('disabled', 'disabled');
    oEle.setAttribute('selected', 'selected');
  } 
  var oTxt = document.createTextNode(array[i]);
  oEle.appendChild(oTxt);
  document.getElementsByTagName('select')[0].appendChild(oEle);
}

var options = document.getElementById('selection');
  if(options.hasChildNodes()){
     var child = options.childNodes;
  }
  console.log(child);

function sortLess(a,b){
  return a.price - b.price;
}
var pizza = pizzas.sort(sortLess);
function prints(){
  printGrid(pizza); 
} 
options.addEventListener('change' , prints, false );
options.removeEventListener('change', print, false);
  
$.fn.toggleClick = function(funcArray) {
  return this.click(function() {
    var elem = $(this);
    var index = elem.data('index') || 0;

    funcArray[index]();
    elem.data('index', (index + 1) % funcArray.length);
  });
};

$('#btn').toggleClick([
  function() {
   $('#showdiv').show();

  }, function() {
    $('#showdiv').hide();
    
  }, function() {
    $('#showdivList').show();
   
  }, function() {
    $('#showdivList').hide();
  }
]);

$('#btn_list').toggleClick([
  function() {
   $('#showdivList').show();
   
  }, function() {
    $('#showdivList').hide();
   
  }, function() {
    $('#showdiv').show();
   
  }, function() {
    $('#showdiv').hide();
  }
]);