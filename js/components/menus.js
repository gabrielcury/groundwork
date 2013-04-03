// Generated by CoffeeScript 1.6.1

$(function() {
  var delay, openMenu,
    _this = this;
  delay = '';
  openMenu = function(target) {
    return $(target).parent('li.menu').toggleClass('on');
  };
  if (!Modernizr.touch) {
    $('body').on('mouseenter', 'nav > ul > li.menu:not(.disabled)', function(e) {
      clearTimeout(delay);
      $('nav > ul > li.menu.on').removeClass('on');
      return $(this).addClass('on');
    });
    $('body').on('mouseleave', 'nav > ul > li.menu:not(.disabled)', function(e) {
      return delay = setTimeout((function() {
        return $('nav > ul > li.menu.on').removeClass('on');
      }), 350);
    });
  }
  $('body').on('click', 'nav > ul > li.menu:not(.disabled) > a', function(e) {
    if (!Modernizr.touch) {
      $('nav > ul > li.menu.on').removeClass('on');
      $(e.target).parents('li.menu').addClass('on');
    }
    openMenu(e.target);
    e.preventDefault();
    return false;
  });
  $('body').on('focus', 'nav > ul > li:not(.on) > a', function() {
    return $('nav > ul > li.menu.on').removeClass('on');
  });
  $('body').on('focus', 'nav > ul > li.menu > a', function(e) {
    openMenu(e.target);
    e.preventDefault();
    return false;
  });
  $('body').on('click', function(e) {
    if ($(e.target).hasClass('dropdown')) {
      $(e.target).toggleClass('on');
    } else {
      if ($('.dropdown').filter('.on').length) {
        $('.dropdown').filter('.on').removeClass('on');
      }
    }
    if ($('nav > ul > li').filter('.menu.on').length) {
      return $('nav > ul > li').filter('.menu.on').removeClass('on');
    }
  });
  $('body').on('focus', '.dropdown', function(e) {
    return $(this).addClass('on');
  });
  $('body').on('blur', '.dropdown li:last-child a', function(e) {
    return $('.dropdown').filter('.on').removeClass('on');
  });
  $('nav.menu').each(function() {
    if (!$(this).attr('data-label')) {
      $(this).attr('data-label', 'Menu');
    }
    if (!($(this).find('.menu-toggle').length > 0)) {
      return $(this).prepend('<a href="#" class="menu-toggle"><i class="icon-reorder"></i></a>');
    }
  });
  $('body').on('click', 'nav.menu .menu-toggle', function(e) {
    $(this).parent('nav.menu').toggleClass('on');
    e.preventDefault();
    return false;
  });
  $('body').on('focus', '.menu-toggle', function(e) {
    return $(e.target).parent('nav.menu').addClass('on');
  });
  $('body').on('blur', 'nav.menu > ul > li:last-child a', function(e) {
    return $('nav.menu').filter('.on').removeClass('on');
  });
});

$(window).on('resize', function() {
  if ($('nav > ul > li.menu.on').length > 1) {
    return $('nav > ul > li.menu.on').removeClass('on').first().addClass('on');
  }
});
