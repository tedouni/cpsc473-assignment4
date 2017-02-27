CPSC 473 - Web Front-End Engineering for Internet Applications
Assignment 4 - Spring 2017
Section 2 due February 27.  Section 1 due March 1.
In this assignment, you will finish the Ottergram app and write some new JavaScript to add additional features.
Complete the following:
Work through Chapter 7.  Verify that you can toggle between showing and hiding the detail image, and that both visual effects are in place.
In the current version of Ottergram, the detail image is changed when a thumbnail is clicked.  Users who prefer the keyboard can select thumbnails and trigger clicks using the Tab and Enter keys, but the interaction is awkward.

Use JavaScript to add the ability to select a thumbnail and change the detail image by pressing a digit key (e.g., '1' to select Barry, and '5' to select Barbara in the default layout).

Do not hard-code key-to-thumbnail mappings -- if the order or number of images changes, your code should continue to function correctly (at least for the first 9 thumbnails).
Push the contents of your ottergram directory into a new public GitHub repository.
Grading
How to know if the assignment has been successfully completed:
When you visit http://localhost:3000 with browser-sync running, do you see the Ottergram page?
Does pressing the Esc key cause the detail image to be hidden?
Does selecting a thumbnail cause the detail image to reappear?
Do thumbnails enlarge when you hover over them and return to their original size when the mouse is moved away?
Does the detail image zoom into view when you click a thumbnail?
Do the number keys on the keyboard switch between thumbnails?
Do you have a .eslintrc.json file?
Have you fixed any issues detected by the linter-eslint plugin (including the one introduced by the code in the book)?
Have you run the atom-beautify plugin?
Have you fixed any JavaScript issues displayed in the DevTools Console?
Do you have a new repository for this assignment?
Have you checked in the changes from this assignment and pushed them to GitHub?
