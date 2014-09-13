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
