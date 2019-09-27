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
        text-decoration: none;              /* remove deafult style (i.e. underline)*/
    }

```

### STEP 3: Add a media query for smaller viewports
Since this isnt mobile first, we are going to add a media query for smaller screens after our stylizations for large screens.  In the case of this media query, we want to trigger our burger menu at 768px or smaller, which would be ```@media screen and (max-width: 768px)```.

