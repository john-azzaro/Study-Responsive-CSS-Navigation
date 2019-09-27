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

### STEP 2: Create the CSS for your menu
For this menu in this study, we want to have the logo on the left, the links on the right.
```CSS
    nav {                                   /* For the ENITRE nav bar */
        height: 10vh;                       /* Nav bar relative to the rest of the viewport (90vh) */
        background: rgb(36, 35, 35);        /* Color of the nav bar (e.g. black) */
        display: flex;                      /* Display flex for logo position relative to links */
    }

    .brand-logo {                           /* For logo and brand name elements. */
        display: flex;                      /* Display flex so elements are side by side */
        align-items: center;                /* Logo centered */
        font-size: 1.25em;                  /* Font size of brand name will be larger */
        text-decoration: none;              /* Remove default stylizations (i.e. underline, etc.) */
        margin-left: 5%;                    /* Leave 5% margin left of the brand and logo */
        color: white;                       /* Font color white */
    }

    .nav-links {                            /* For the nav links (i.e. discover, etc.) */
        display: flex;                      /* Display elements side by side */
        list-style: none;                   /* Remove default list stylization (i.e. bullet points) */
        width: 40%;                         /* Set width of nav-links 50% of nav bar (i.e. XXXXXXXX--------*/
        height: 100%;                       /* Make it 100% of the nav-links box*/
        align-items: center;                /* Position the links vertically in the center */
        justify-content: space-around;      /* Space all the links evenly in the nav-links box */
        margin-left: auto;                  /* Position the links to the far RIGHT of the nav-links section */
    } 

    .nav-links .link {                      /* For each link in the nav link... */
        color: white;                       /* text is white...*/
        text-decoration: none;              /* remove default style (i.e. underline)*/
    }

```

### STEP 3: Add a media query for smaller viewports
Since this isnt mobile first, we are going to add a media query for smaller screens after our stylizations for large screens.  In the case of this media query, we want to trigger our burger menu at 768px or smaller, which would be ```@media screen and (max-width: 768px)```.  Inside this media query, we will add the desired responsiveness.

First, create revised stylization for your nav links.  The objective here is have the menu (once toggled to "open"), show a black background with the links we already haved stacked in a column in the middle of the screen.

```CSS
    .nav-links {                            /* For nav-links inside our media query */
        position: fixed;                    /* Set position fixed (stays in the same place even on scroll) */
        background: rgb(36, 35, 35);        /* Color of menu background (same as the nav bar) */
        height: 100vh;                      /* Height of menu is 100% of the viewport */
        width: 100%;                        /* Width of menu is 100% of the viewport */
        flex-direction: column;             /* Set column to dlex-direction to stack links on top of each other*/
        ...
        ...
        ...
    }
```

### STEP 4: Add "clip-path" property for animation
First, what is clip-path? Clip-path is css property that lets you specify a specific region of an element to display rather than the complete area.  In the case of this study, we are going to use a circle to block-in the menu background.  So in the .nav-links selector, add the relevant properties.  However, remember that clip-path is not fully supported on all browsers, so to be safe, also add a -webkit property with the same settings.
```CSS
        ...
        ...
        ...
        clip-path: circle(100px at 90% -40%);              /* Clip-path circle (starts at the top right) */
        -webkit-clip-path: circle(100px at 90% -10%);      /* To ensure compatibility, add a webkit */
        transition: all 1s ease-out;                       /* Add transition effect for reveal */
```

### STEP 5: Add "open" class for JavaScript
On click of the burger icon, we want to expand the menu with our links.  In order to do this, we need to add some JavaScript.  But first, we know that in order to toggle the class to see the menu, we need to first add the class to our CSS.  
```CSS
    .nav-links.open {
        clip-path: circle(1400px at 90% -10%);              /* Clip-path circle expanded (starts at the top right) */
        -webkit-clip-path: circle(1400px at 90% -10%);      /* And to ensure compatibility, add a webkit */   
        pointer-events: all;                                /* Add for clickability */
    }
```

### STEP 6: Add your JavaScript


