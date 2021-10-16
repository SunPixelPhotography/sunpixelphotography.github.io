// https://ecodev.github.io/natural-gallery-js/

var gallery;
var gallery_category_id = '';
var gallery_tag = '';
var gallery_photos;

$(function() {
	gallery_category_id = $('#gdp-category-id').attr('category-id');

	$('.gdp-tag-filter').on('click', function() {
		gallery_tag    = $(this).attr('gdp-tag');
		gallery_photos = searchPhotos(gallery_category_id, gallery_tag);
		gallery.clear();
		gallery.setItems(gallery_photos);
	});

	$('#lfo-lightbox-image-buy-button').on('click', function() {
		const image_idx = parseInt($('.pswp__counter').html().split('/')[0].trim()) - 1;
		const photo = gallery_photos[image_idx];
		window.location.href = photo.data.slug;
	});

	// Create gallery
	var ng_options = {
		rowHeight            : 400,
		columnWidth          : 366,
		ratioLimit           : { min: .5, max: 3 },
		gap                  : 5,
		rowsPerPage          : 0,
		showLabels           : "hover",
		lightbox             : true,
		minRowsAtStart       : 0,
		selectable           : true,
		activable            : false,
		infiniteScrollOffset : 0,
		backgroundSize       : "cover",
		backgroundPosition   : "center",
		photoSwipeOptions    : { }
	};

	var galleryElement    = document.getElementById('gallery');
	var photoswipeElement = document.getElementsByClassName('pswp')[0];
	var scrollableElement = document.getElementById('body');

	gallery_photos = searchPhotos(gallery_category_id, gallery_tag);

	gallery = new NaturalGallery.Masonry(galleryElement, ng_options, photoswipeElement, scrollableElement);
	gallery.init();
	gallery.setItems(gallery_photos);

	gallery.addEventListener('pagination', function(ev) {
		$('.natural-gallery-js .figure .selectBtn').html('<span class="lfo-font-size-85">Buy Prints & Cards</span>');
		// $('.natural-gallery-next').html('<span class="align-middle">Load More...</span>');
		// console.warn('pagination', ev.detail);
		// var currentPagination = ev.detail;
		// var page = Math.ceil(currentPagination.offset / currentPagination.limit) + 1;
		// gallery.addItems(photosPage(currentPagination));
	});

	gallery.addEventListener('select', function(ev) {
		// console.log('select', JSON.stringify(ev.detail));
		const photo = ev.detail[0];
		window.location.href = photo.data.slug;
	});

});

function searchPhotos(category_id, tag) {
	var found_photos = [];
	all_photos.forEach(photo => {
		if ((photo.data.categories.includes(category_id) || category_id == '') && (photo.data.tags.includes(tag) || tag == '')) {
			found_photos.push(photo);
		}
	});
	return found_photos;
}

function photosPage(paginationEvent) {
	const photos = searchPhotos(gallery_category_id, gallery_tag);
	return photos.slice(paginationEvent.offset, paginationEvent.offset + paginationEvent.limit);
}
