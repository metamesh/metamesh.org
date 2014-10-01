metamesh.org
============

Note: You might want to look at https://github.com/markpundsack/jekyll-example-with-heroku-buildpack for a much simpler version!

Get get get
-----------

Clone from wherever you are reading this.

    git clone <whatever>

Then install the gems necessary to do stuff.

    bundle install

If you don't have an appropriate Ruby installed, it'll yell at you. It's
probably easiest to do something like this if you haven't previously done it:

    curl -sSL https://get.rvm.io | bash -s stable
    rvm install `cat .ruby-version`

Or, if you already have RVM installed and it yells at you, literally execute:

    $rvm_recommended_ruby

Tab completion is your friend on that one.

Hack hack hack
--------------

    jekyll serve --watch

Open your browser and go to http://localhost:4000.

To start a new post, use `poole`:

    poole draft "Your post name"

This will create the file `_drafts/your_post_name.md`. Edit that file to your
heart's content, then commit and submit the PR. When we're ready to publish the
post, you can do `poole publish your_post_name` or 
`poole publish _drafts/your_post_name.md` to move it to the `_posts` directory.
Submit another PR and it'll go live as soon as someone with commit bit and
Heroku access puts it up.

If your post has images, put the images in a directory within `images/posts` that
bears the same name as the post's slug. That is, the filename that `poole`
generates without the extension.

Ship ship ship
--------------

Ensure that your upstream git repo is `git@heroku.com:metamesh-org-staging.git`.
Ask [Colin Dean](mailto:colin.dean@metamesh.org) for access to this if you think
you are deserving of such.

Push to enliven on http://staging.metamesh.org:

    git push staging master

Promote to enliven on http://www.metamesh.org:

    heroku pipeline:promote

This pushes within Heroku from `metamesh-org-staging` to `metamesh-org`.
