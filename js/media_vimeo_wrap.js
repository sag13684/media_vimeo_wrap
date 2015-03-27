/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
(function ($) {
    Drupal.behaviors.media_slideshow = {
        attach: function (context) {
            // Iterate through all slideshows.
            $('div.player').each(function () {
                $slideshow = $(this);
                $slideshow_id = $slideshow.attr('id');
                $settings = Drupal.settings.media_vimeo_wrap[$slideshow_id];
                if ($settings.once == 0) {
                    vimeowrap($slideshow_id).setup(Drupal.settings.media_vimeo_wrap[$slideshow_id]);
                    // set flag preventing this from loading twice (caused by colorbox afaik)
                    Drupal.settings.media_vimeo_wrap[$slideshow_id].once = 1;
                }
            });
        },
    }
})(jQuery);
