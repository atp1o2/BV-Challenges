Memorial Day Webpage Challenge for BoardVitals

Hello and thank you for reviewing my challenge!

To start, just open index.html in a browser.

-----

Whenever I start on a web page, my pre-work always involves getting the styling work flow to work with me
instead of against. For a developing project, these are the steps I take:
- Organize style sheets according to major components and static web pages
- Establish brand colors in the form of variables ie. $brandNavy: #1b3950;
- Ensure SASS is ordering style sheets the correct order
  * Importing a variables scss before bootstrap. This allows the developer to override bootstraps default
  variables in order to better utilize bootstraps already made classes instead of creating more utility classes
  * For ex, by overriding bootstrap's $font-size-h5 variable, I could have used the h5 class (not tag) to
  achieve a font-size of 18px instead of creating a utility class for it (see ./style/utilities.css)
- Create utility classes from brand colors and lock down site wide typography

These above steps are crucial for developer friendly front end work flow. By utilizing as many Bootstrap
classes as possible, we are keeping our code DRY which besides the standard benefits of optimization and
better readability, helps us avoid tech debt caused by destructive css practices. Plus it just makes
styling more enjoyable overall.

Post Pre-work (There's gotta be a better way to say that)

1. After getting a design, I build the responsive skeleton with all the elements in place.
My main focus is to use as much Bootstrap as possible to get rough spacing, columns, and responsiveness down.

2. Next step is go through the style guide each section at a time to get the exact parameters right. This is where I typically
used (pre-made) site wide utilities / typography css classes to style elements correctly. I find the atomic styling method
(same methodologies used by bootstrap) to be more efficient than building custom elements. It allows for quick changes and
reduces time spent combing through the stylesheets to find a particular class just to change a text color. Using utility
classes, all developers can quickly change background / font colors by switching out classes instead. While there's more
markup on the html, less css is computed overall because we're mostly reusing our utility classes!

3. Then I fine tune all the components to be web responsive up to spec. I use all the media devices I have available
during this process: large high res desktop monitor, laptop, retina screens, tablets, and phones. Resizing a browser
window does get most of this work done, but testing through the suite of devices is how you catch exactly how
users will view it.

4. Next is to work on any special features. In this case, getting the discount button to roll up on click and the timer.
I look for libraries that can do the job and tweak from there.

5. Last step is special considerations. On a base level, it means improving SEO where I can. On a more involved level,
it means improving the site's accessibility. A good example of this is an HTML table - most screen readers have a hard
time walking through table elements if formatted poorly. Field inputs/labels is another area that should be air tight,
especially when it involves sensitive data. HTML tags now has much more robust accessibility features built in, but
not all areas are covered and meeting WCAG 2.0 is still a developing field. If desired, I walk through the app with a
screen reader and add ARIA attributes where needed.

Misses
I got as much work done as I could after my day job, but I did miss some features:
- Didn't calculate srcset for the banner top banner image. It was getting late and my brain started fritzing
- Overlay positioning for discount-details over the gray background. Was playing around with media queries to get it right, but I
opted to move as it started to get hacky. I'm feeling the cleaner solution must be within the HTML structuring.
- Button roll isn't exactly the UX specified. Weird using jQuery again. Nostalgically enjoyable but I'm quite
glad it's not a thing anymore.

-----

Thank you again for reviewing my challenge. It was definitely interesting building a web page without the framework
component style of developing and I enjoyed going back to basics. I personally want to work for BoardVitals because
it combines two favorite fields: medical science and tech. On a grander level, BoardVitals is providing more knowledge
to those seeking it and that is how we all progress as a civilization.


