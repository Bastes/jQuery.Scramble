/**
 *
 * jQuery Scramble plugin
 *
 * @author   Michel Belleville <michel.belleville@gmail.com>
 * @version  0.0.1
 * @requires jQuery v1.3.2 or later
 * @license  GPLv3 [http://www.gnu.org/licenses/gpl.html]
 * 
 * @description Scrambles the elements of a jQuery collection so they end up
 * in random order ; completely useless therefore totally awesome.
 * @param integer num (optional) number of elements to pick
 * 
 * Use :
 * $([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).scramble();
 * $('#whatever .you select').scramble();
 * 
 */
(function($) {
  jQuery.fn.scramble = function() {
    if (this.length < 2) return this.pushStack(this);
    var free = new Array(),
        scrambled = new Array(),
        len = this.length - 1;
    for (var i = len; i >= 0; i--) free.push(this[i]);
    for (var i = len; i >= 0; i--)
      scrambled.push(free.splice(parseInt(Math.random() * i), 1)[0]);
    return this.pushStack(scrambled);
  };
}) (jQuery);
