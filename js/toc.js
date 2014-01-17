toc = $("ul#toc");
$("#content").find("h2").each(function() {
  h = $(this);
  toc.append("<li><a href='#" + h.attr("id") + "'>" + h.text() + "</a></li>");
});


$('#nav').affix({
    offset: $('#nav').position()
});


/* ------------------------------ */

// Previous and Next Button and bottom of page
//
function update_chapter_anchors() {
  
    // get list of all pages as in chapter-nav.html in _includes 
    var allPageNames = new Array();
    $('ul#chaptermenu a').each(function(i) {
      allPageNames[i] = $(this).attr('href'); 
    });
    
    // get name of current page
    var sPath=window.location.pathname;
    var currentPage = sPath.substring(sPath.lastIndexOf('/') + 1);
    if (currentPage == "")
      currentPage = -1;
    
    // get prev and next page names
    var pageIndex = $.inArray(currentPage, allPageNames);
    var nextPage = allPageNames[pageIndex + 1];
    var prevPage = allPageNames[pageIndex - 1];

    // change href attribute of prev and next anchors
    if (typeof prevPage != 'undefined') {
       $(".btn-previous").attr("href",  prevPage); 
    } else {
        $(".btn-previous")
        .attr("href", "#")
        .attr("disabled", true);
    }
    
    if (typeof nextPage != 'undefined') {
       $(".btn-next").attr("href",  nextPage); 
    } else {
        $(".btn-next")
        .attr("href", "#")
        .attr("disabled", true);
    }
}


    
$(document).ready(function() {
    
    // activate all popups
  	$('.popup-vimeo').magnificPopup({ 
			  type: 'iframe'
				// other options
		});
    $('.popup-image').magnificPopup({ 
			  type: 'image'
					// other options
		});
    
    // update href attr for prev and next anchors at page bottom
    update_chapter_anchors();    
}); 