quizproject
===========

This project is for building a framework geared towards simple lightweight HTML5/JavaScript quizzes that display results on a grid as a single-page app.

Usage
===========

The framework accepts questions in two separate arbitrary categories with one being tracked to display on the X-axis of the grid and the other being tracked to display on the Y-axis of the grid. Each question accepts an 'agree,' 'disagree,' or 'no answer' value. The final results are displayed on a grid as well as numerical percentage results in each category.

Markup
===========

The markup block for each question is as follows:

``` html
<li>
  <div class="quiztext">
    <p>Do you agree with this X-axis statement?</p>
  </div>
  <div data-category="x-axis" class="slides-navigation questionSlide">
    <a href="#" class="answerClick next" data-answer="agree">
      Agree
    </a>
    <a href="#" class="answerClick next" data-answer="disagree">
      Disagree
    </a>
    <a href="#" class="answerClick next" data-answer="noAnswer">
      No answer
    </a>
    <a href="#" class="goBack prev">
      Go back
    </a>
  </div>
</li>
```

The data-category attribute of the second DIV element determines which axis (and therefore which category) the answer value should be assigned to. Each block of markup represents a single question on a single slide, and the markup should fit within the Unordered List element with the class "slides-container." You can have as many questions in each category as you like.

Copyright
===========

This project utilizes Superslides (c) Nic Aitch, jQuery Easing (c) George McGinley Smith, and jQuery Animate Enhanced plugin (c) Ben Barnett.
