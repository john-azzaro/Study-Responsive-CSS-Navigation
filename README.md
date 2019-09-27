# Responsive CSS Navigation Study
See it Live: 
<br>

## What is the Responsive CSS Navigation Study
The Responsive CSS Navigation Study is a demonstration of a basic CSS responsive naviagtion menu with a variety of animations for enhanced user experience.  This study includes a navigation bar with links that, when at a size at or below 768px, will execute a media query and enable a burger menu.  This burger menu will then reveal the links with an animation using the clip-path property.

Here's some questions covered in the study:

* [How do you create a responsive menu?](#How-do-you-create-a-responsive-menu)

<br>

## How do you create a responsive menu?

### STEP 1: Create your nav menu
To create a responsive menu, you first need to create a semantic ```nav``` element.  Inside this nav element, you need can put your desired elements.  In our example, we have brand, links, and burger menu elements.
```HTML
    <nav>
        <a href="/" class="brand-logo">                             <== brand element                         
            <img class="logo-resize" src="" alt="">
            <div class="brand-logo-name">CSS Nav Study</div>
        </a>
        <div class="hamburger">                                     <== hamburger element
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
        </div> 
        <ul class="nav-links">                                      <== links element
            <li><a class="link" href="#">Discover</a></li>
            <li><a class="link" href="#">Services</a></li>
            <li><a class="link" href="#">Contact</a></li>
        </ul>
    </nav>
```

