;(function() {
  'use strict';
  var schema = {
    'dirs': [
      'bits',
      'cracks',
      'equilibriums',
      'figure study',
      'installations',
      'invisible worlds',
      'microcosms',
      'misc',
      'pencil',
      'busts',
      'scenography',
      'thesis - small'
    ],
    'titles': {
      'bits': {
        '1': 'Untitled',
        '2': 'Untitled',
        '3': 'Untitled',
        '4': 'Untitled',
        '5': 'Untitled',
        '6': 'Untitled',
        '7': 'Untitled',
        '8': 'Untitled',
        '9': 'Untitled',
        '10': 'Untitled',
        '11': 'Untitled',
        '12': 'Untitled',
        '13': 'Untitled',
        '14': 'Untitled',
        '15': 'Untitled',
        '16': 'Untitled',
        '17': 'Untitled',
        '18': 'Untitled',
        '19': 'Untitled',
        '20': 'Untitled',
        '21': 'Untitled',
        '22': 'Untitled',
        '23': 'Untitled',
        '24': 'Untitled',
        '25': 'Untitled',
        '26': 'Untitled',
        '27': 'Untitled',
        '28': 'Untitled',
        '29': 'Untitled',
        '30': 'Untitled',
        '31': 'Untitled'
      },
      'cracks': {
        '1': 'Crack I',
        '2': 'Crack II - Detail',
        '3': 'Crack II - Detail',
        '4': 'Crack I - Detail',
        '5': 'Crack I - Detail',
        '6': 'Crack I - Detail',
        '7': 'Crack I - Detail',
        '8': 'Crack II - Detail',
        '9': 'Crack I - Detail',
        '10': 'Crack I - Detail',
        '11': 'Crack I - Detail',
        '12': 'Crack II - Making of',
        '13': 'Crack I - Detail',
        '14': 'Crack I - Detail',
        '15': 'Crack I - Detail',
        '16': 'Crack I - Detail',
        '17': 'Crack II',
        '18': 'Crack II - Detail'
      },
      'equilibriums': {
        '1': 'Balance',
        '2': 'Equal and Opposite',
        '3': 'Without Gravity',
        '4': 'Peddle Dwelling',
        '5': 'Untitled I',
        '6': 'Untitled II',
        '7': 'Untitled III',
        '8': 'Mushroom Tower',
        '9': 'On the Edge Of a Cliff'
      },
      'figure study': {
        '1': 'Untitled',
        '2': 'Untitled',
        '3': 'Untitled',
        '4': 'Untitled',
        '5': 'Untitled',
        '6': 'Untitled',
        '7': 'Untitled',
        '8': 'Untitled'
      },
      'installations': {
        '1': 'Growing Unique II - Detail',
        '2': 'Growing Unique II - Detail',
        '3': 'Growing Unique II',
        '4': 'Growing Unique II',
        '5': 'Growing Unique II',
        '6': 'Growing Unique II - Detail',
        '7': 'Growing Unique II - Making of',
        '8': 'Growing Unique II - Detail',
        '9': 'Growing Unique II - Detail',
        '10': 'Spiral - Detail',
        '11': 'Spiral - Detail',
        '12': 'Spiral',
        '13': 'Spiral - Detail',
        '14': 'Spiral - Detail'
      },
      'invisible worlds': {
        '1': 'Fusion',
        '2': 'Sailing Island',
        '3': 'Perpetual Interweaving',
        '4': 'Floating Island',
        '5': 'Over the Hill',
        '6': 'Cave in Limbo',
        '7': 'The Treehouse and the Spring',
        '8': 'Aquatic Symphony'
      },
      'microcosms': {
        '1': 'Better Days',
        '2': 'Coral Reef',
        '3': 'Oasis - Detail',
        '4': 'Oasis - Detail',
        '5': 'Oasis - Detail',
        '6': 'Oasis',
        '7': 'Parallel World III',
        '8': 'Play Together',
        '9': 'Portraits',
        '10': 'Snow Queen\'s Dream',
        '11': 'Portraits - Detail'
      },
      'misc': {
        '1': 'Untitled',
        '2': 'Untitled',
        '3': 'Untitled',
        '4': 'Untitled',
        '5': 'Untitled',
        '7': 'The Sailor and the Mermaid',
        '8': 'The Sailor and the Mermaid',
        '9': 'Untitled',
        '10': 'Untitled',
        '11': 'Untitled',
        '12': 'Untitled',
        '13': 'Untitled',
        '14': 'Untitled',
        '15': 'Untitled',
        '16': 'Untitled',
        '18': 'Myrto',
        '19': 'Elio',
        '20': 'Statue',
        '22': 'Hourglass',
        '23': 'Landscape',
        '27': 'The Weight of Thoughts'
      },
      'pencil': {
        '1': 'Untitled',
        '2': 'Untitled',
        '3': 'Untitled',
        '4': 'Untitled',
        '5': 'Untitled',
        '6': 'Untitled',
        '7': 'Untitled',
        '8': 'Untitled'
      },
      'busts': {
        '1': 'Hermes',
        '2': 'Homer',
        '3': 'Socrates',
        '4': 'Helios',
        '5': 'Hermes',
        '6': 'Hippocrates',
        '7': 'Aesculapius'
      },
      'scenography': {
        '1': 'Scenery Painting, \'Doukinio\'s marriage\'',
        '2': 'Scenery Painting, \'Doukinio\'s marriage\'',
        '3': 'Scenery Painting, \'Doukinio\'s marriage\'',
        '4': 'Scenery Painting, \'Doukinio\'s marriage\'',
        '5': 'Scenery Painting, \'Doukinio\'s marriage\'',
        '6': 'Scenery Painting, \'Doukinio\'s marriage\'',
        '7': 'Scenery Painting, \'Doukinio\'s marriage\'',
        '8': 'Scenery Painting, \'Doukinio\'s marriage\'',
        '9': 'Scenery Painting, \'Doukinio\'s marriage\'',
        '10': 'Lighting Demo, \'El Vent i la marea\'',
        '11': 'Lighting Demo, \'El Vent i la marea\'',
        '12': 'Lighting Demo, \'El Vent i la marea\'',
        '13': 'Lighting Demo, \'El Vent i la marea\'',
        '14': 'Lighting Demo, \'El Vent i la marea\'',
        '15': 'Lighting Demo, \'El Vent i la marea\'',
        '16': 'Lighting Demo, \'El Vent i la marea\'',
        '17': 'Lighting Demo, \'El Vent i la marea\'',
        '18': 'Lighting Demo, \'El Vent i la marea\'',
        '19': 'Lighting Demo, \'El Vent i la marea\'',
        '20': 'Lighting Demo, \'El Vent i la marea\'',
        '21': 'Lighting Demo, \'El Vent i la marea\'',
        '22': 'Lighting Demo, \'El Vent i la marea\'',
        '23': 'Lighting Demo, \'El Vent i la marea\'',
        '24': 'Lighting Demo, \'El Vent i la marea\''
      },
      'thesis - small': {
        '4': 'A World of Mine - Spectrum',
        '5': 'Acorns',
        '6': 'Atlantis',
        '7': 'Bioluminescence',
        '8': 'Breaking Unique I',
        '9': 'Torn',
        '10': 'Castle-Ship',
        '11': 'A World of Mine - Green',
        '12': 'Sinusoidal',
        '14': 'Three Items',
        '15': 'Staring Ahead',
        '16': 'Asynchronous Composition',
        '17': 'Like Blue Beans',
        '18': 'A World of Mine - Night Bubble',
        '20': 'A World of Mine - Black',
        "21": "Primal Shard",
        "23": "Reflection",
        '1': 'Configuration I',
        '24': 'Mirage of an Air-city',
        '25': 'Blue Moors',
        '26': 'A Happy Caravan',
        '29': 'Τree Ηollow',
        '31': 'A Story in the Sky',
        '32': 'Materializing',
        '33': 'Blood Path',
        '34': 'Mystic Scribble',
        '2': 'Configuration II',
        '35': 'Beach Unseen',
        '36': 'Not Quite There',
        '37': 'Fence',
        '3': 'Configuration III',
        '39': 'Dark Mist',
        '44': 'Crack in reverse',
        '45': 'Paradoxical Rotation',
        '48': 'Heart of a Poet',
        '49': 'Mind Spindle',
        '50': 'Music',
        '51': 'The Other Side'

      }
    },
    'counts': {
      'bits': 31,
      'cracks': 18,
      'equilibriums': 9,
      'figure study': 8,
      'installations': 14,
      'invisible worlds': 8,
      'microcosms': 11,
      'misc': 28,
      'pencil': 8,
      'busts': 7,
      'scenography': 24,
      'thesis - small': 51
    }
  };

  var isMobile = {
    Android: function() {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
      return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
  };

  var parallax = function() {

    if (!isMobile.any()) {

      $(window).stellar({
        horizontalScrolling: false,
        hideDistantElements: false,
        responsive: true
      });

    }
  };

  var contentWayPoint = function() {
    var i = 0;
    $('.animate-box').waypoint(function(direction) {

      if (direction === 'down' && !$(this.element).hasClass('animated-fast')) {

        i++;

        $(this.element).addClass('item-animate');
        setTimeout(function() {

          $('body .animate-box.item-animate').each(function(k) {
            var el = $(this);
            setTimeout(function() {
              var effect = el.data('animate-effect');
              if (effect === 'fadeIn') {
                el.addClass('fadeIn animated-fast');
              } else if (effect === 'fadeInLeft') {
                el.addClass('fadeInLeft animated-fast');
              } else if (effect === 'fadeInRight') {
                el.addClass('fadeInRight animated-fast');
              } else {
                el.addClass('fadeInUp animated-fast');
              }

              el.removeClass('item-animate');
            }, k * 100, 'easeInOutExpo');
          });

        }, 100);

      }

    }, { offset: '85%' });
  };

  $( document ).ready(function() {
    var imageComponent = function(props) {
      var div = document.createElement('div');
      div.className = 'col-md-6 col-md-6 col-sm-6 col-xs-6 work animate-box';
      div.innerHTML = `<a href="images/${props.dir}/img_${props.index}.jpg" class="image-popup" title="${props.title}">
  <img src="images/${props.dir}/img_${props.index}-pre.jpg" alt="Chrysa Kioroglou Art" class="img-responsive">
</a>`;
      return div;
    };

    var populateGallery = function(galleryContainer, dir) {
      var gallery = document.createElement('div');
      gallery.className = 'row';
      var images = new Array(schema.counts[dir]).fill(null).map((image, i) => imageComponent({
        dir: dir,
        index: i + 1,
        title: schema.titles[dir][i + 1] || 'Untitled'
      }));
      images.forEach((image) => {
        gallery.appendChild(image);
      });
      galleryContainer.innerHTML = '';
      galleryContainer.appendChild(gallery);
    };

    var handleHashChange = function(e) {
      var hash = window.location.hash.replace('#', '');
      var galleryContainer = document.getElementById('ch-gal-container');
      var dir = schema.titles[hash] && hash;
      if (dir) {
        var gallery = populateGallery(galleryContainer, dir);
        $(function() {
          magnifPopup();
          contentWayPoint();
        });
      }
    };
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange, false);
  });


    $(function() {
      parallax();
      contentWayPoint();
    });

}());
