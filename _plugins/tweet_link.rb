module Jekyll

  class TweetLinkTag < Liquid::Tag
    def initialize(tag_name, input, tokens)
      super
      @text, @hashtags, @via = input.split '%%'
    end

    def render(context)
      url = URI.parse "https://twitter.com/intent/tweet"
      query = { text: @text }
      query[:via] = @via if @via
      query[:hashtags] = @hashtags if @hashtags
      url.query = URI.encode_www_form(query)

      url
    end
  end

end

Liquid::Template.register_tag('tweet_link', Jekyll::TweetLinkTag)
