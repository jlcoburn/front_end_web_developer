$(function() {
    var $button = $('.button');
    var $body = $('body');

    // MODEL
    var model = {
        data: [{
            'name': 'kitty1',
            'imgUrl': 'img/kitty1.jpg',
            // img-atribution can be a key too.
            'count': 0
        },{
            'name': 'kitty2',
            'imgUrl': 'img/kitty2.jpg',
            'count': 0
        },{
            'name': 'kitty3',
            'imgUrl': 'img/kitty3.jpg',
            'count': 0
        }],
    };

    // OCTOPUS
    var octopus = {
        // try to find the cat data matches the button id
        getData: function(id) {
            for (var i = 0; i < model.data.length; i++) {
                if (model.data[i].name == id) {
                    return model.data[i]
                }
            };
        },

        addCount: function() {
            $button.click(function() {
                for (var i = 0; i < model.data.length; i++) {
                    if (model.data[i].name == id) {
                        model.data[i].count += 1;
                    };
                };
            })
        },
    };


    var view = {
        init: function () {
          for (var i = 1; i <= 5; i++) {
              view.createButton("kitty" + i);
          };
          view.renderImg();
        },
        createButton: function(buttonname) {
            var $input = $('<input type="button" class="button" value="' + buttonname + '" id="' + buttonname + '" />');
            $input.appendTo($("body"));
        },
        renderImg: function() {
          octopus.addCount();
          // Once find the right cat data then insert into DOM
            $button.click(function() {
                var $id = $input.id;
                var $kitty = octopus.getDate($id);
                var $imgInput = $('<div><p>' + $kitty.name + '</p><br><img src=' + $kitty.imgUrl + '></div>');
                $imgInput.appendTo($("body"));
            })
        }

    };

    view.init(); // start the process 
}());
