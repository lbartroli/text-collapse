function TextCollapse(options) {
  this.lines = options.lines || 3;
  this.$container = $('.help-text-content');
  this.lineHeight = +this.$container.css('line-height').replace('px', '');
  this.collapsedHeight = this.lines * this.lineHeight;
  this.originalHeight = this.$container.height();

  this.$container.on('click', '.show-more', this.expand.bind(this));
  this.$container.on('click', '.show-less', this.collapse.bind(this));
  if (this.collapsedHeight < this.$container.height()) {
    this.collapse($.Event('click'));
  } else {
    this.$container.find('.show-less').hide();
  }
};

TextCollapse.prototype.collapse = function (e) {
  e.preventDefault();
  this.$container.css({ height: this.collapsedHeight + 'px' });
  this.$container.find('.show-less').hide();
  this.$container.find('.show-more').css({ display: 'flex' }).show();
};

TextCollapse.prototype.expand = function (e) {
  e.preventDefault();
  this.$container.css({ height: this.originalHeight + 'px' });
  this.$container.find('.show-more').hide();
  this.$container.find('.show-less').show();
};