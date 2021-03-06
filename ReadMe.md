Hidden Elements Viewer - UserScript
===================================
A Greasemonkey User Script that let you find hidden tags quickly

![Official Hidden Elements Viewer Logo](https://github.com/GabLeRoux/Hidden-Elements-Viewer-UserScript/raw/master/images/Hidden_Elements_Viewer_Logo.png)
Description
-----------

Hidden Elements Viewer is a small project that has a simple goal; help us find some hidden stuff. You got it, it's a simple plugin that reveal some html elements with popular css technics. The goal behind this is to find some issues on some ajax applications, letting us click on some hidden buttons. Pretty simple eh?

<i>Note: This script has been tested on Firefox, but may work on other userscript browsers such as Chrome or Opera with some tweaking.</i>

Usage
-----

An example is worth more than a thousand words. Use Firefox, install greasemonkey and visit the [Hidden Elements Viewer Example Page](http://gableroux.github.com/Hidden-Elements-Viewer-UserScript/example/)! Once installed, enjoy clicking on some switches. (You don't need anything else, pictures are inline in the user.js file)

![Hidden Elements Viewer usage example screenshot](https://github.com/GabLeRoux/Hidden-Elements-Viewer-UserScript/raw/master/images/Usage_Screenshot.png)

Requirements
------------

* A web browser compatible with Greasemonkey or userscripts
  * Only tested with [Firefox](http://www.mozilla.org/firefox/)
* [Greasemonkey plugin](http://www.greasespot.net/)

Disclaimer
----------

Hidden Elements Viewer does not encourage hacking, this plugin is delivered as-is to help people finding bugs and that's all :)

Credits
-------

Written by [Gabriel Le Breton](http://www.gableroux.com), in collaboration with [Sylvain Hallé](http://www.leduotang.com/sylvain/), Professor at Université du Québec à Chicoutimi.

Developpement
=============

Changelog
---------

## 0.2

* Fixed some bugs, typos, added comments
* Better preferences
* HideOnInit now working :)
* Per element toggle now working (thanks Sylvain) :)

## 0.1

* Userscript with a couple of bugs
* Only show all and hide all button working atm (I need more cofee!)

Todo
----

* Add hiding type to description
* Sort elements by hiding types
* Enable per elements hide/show (about to fix it)
* Fix button position bug in list
* Better list style (fix too long name)
* Fix the autoRefresh (it doesn't seem to work atm*)
* Add branch for web page,
    * will probably change content of the page with description of the script