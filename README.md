# VanillaJs .scrollThrough()

## Description
An alternative to the native scrollTo() Javascript function. The plugin comes with a polyfill that will automatically enable smooth scroll on all links to anchors.
```
scrollThrough(String elementSelector [, 'fast|medium|slow']);
```

## Demo
- https://codebyksalting.com/ (Click on the back-to-top button or the Contact link)

## Instruction
To scroll to specific elements (must not be hidden), do the following:
```
document.querySelector('.triggerElement').addEventListener('click', function(e){
    e.preventDefault();
    scrollThrough('.targetElement', 'fast|medium|slow');
});
```

## Purpose
- To practice Vanilla JS

## To-do
- Include URL check for outside links
- Add an offset option

## Buy Me Coffee
[![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/U7U51FKQT)
