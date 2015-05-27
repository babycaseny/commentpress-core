function commentpress_setup_comment_headers(){jQuery.setup_comment_headers()}var cp_book_header_height,cp_header_animating,cp_toc_on_top,page_highlight,cp_header_minimised,cp_sidebar_minimised,cp_container_top_max,cp_container_top_min;cp_header_animating=false;cp_toc_on_top="n";page_highlight=false;cp_header_minimised=jQuery.cookie("cp_header_minimised");if(cp_header_minimised===undefined||cp_header_minimised===null){cp_header_minimised="n"}cp_sidebar_minimised=jQuery.cookie("cp_sidebar_minimised");if(cp_sidebar_minimised===undefined||cp_sidebar_minimised===null){cp_sidebar_minimised="n"}cp_container_top_max=jQuery.cookie("cp_container_top_max");if(cp_container_top_max===undefined||cp_container_top_max===null){cp_container_top_max=108}cp_container_top_min=jQuery.cookie("cp_container_top_min");if(cp_container_top_min===undefined||cp_container_top_min===null){cp_container_top_min=108}if(cp_bp_adminbar=="y"){cp_wp_adminbar_height=25;cp_wp_adminbar="y"}if(cp_wp_adminbar=="y"){cp_container_top_max=parseInt(cp_container_top_max)+cp_wp_adminbar_height;cp_container_top_min=parseInt(cp_container_top_min)+cp_wp_adminbar_height}function cp_page_setup(){var b,c,d,a;b="";if(document.getElementById){b+='<style type="text/css" media="screen">';if(cp_is_mobile=="0"){if(cp_textblock_meta=="0"){b+="#content .textblock span.para_marker, #content .textblock span.commenticonbox { display: none; } ";b+=".content .textblock span.para_marker, .content .textblock span.commenticonbox { display: none; } "}}b+="ul.all_comments_listing div.item_body { display: none; } ";if(cp_wp_adminbar=="y"){b+="#header { top: "+cp_wp_adminbar_height+"px; } ";b+="#book_header { top: "+(cp_wp_adminbar_height+32)+"px; } ";if(cp_wp_adminbar_height=="32"){b+="@media screen and ( max-width: 782px ) { #header { top: "+cp_wp_adminbar_expanded+"px; }#book_header { top: "+(cp_wp_adminbar_expanded+32)+"px; } } "}}if(cp_show_subpages=="0"){b+="#toc_sidebar .sidebar_contents_wrapper ul li ul { display: none; } "}if(cp_header_minimised===undefined||cp_header_minimised===null||cp_header_minimised=="n"){c=cp_container_top_max;if(cp_wp_adminbar=="y"){c=cp_container_top_max-cp_wp_adminbar_height}b+="#container { top: "+c+"px; } ";b+="#sidebar { top: "+cp_container_top_max+"px; } ";if(cp_wp_adminbar=="y"){if(cp_wp_adminbar_height=="32"){b+="@media screen and ( max-width: 782px ) { #sidebar { top: "+(c+cp_wp_adminbar_expanded)+"px; } } "}}}else{b+="#book_header { display: none; } ";c=cp_container_top_min;if(cp_wp_adminbar=="y"){c=cp_container_top_min-cp_wp_adminbar_height}b+="#container { top: "+c+"px; } ";b+="#sidebar { top: "+cp_container_top_min+"px; } ";if(cp_wp_adminbar=="y"){if(cp_wp_adminbar_height=="32"){b+="@media screen and ( max-width: 782px ) { #sidebar { top: "+(c+cp_wp_adminbar_expanded)+"px; } } "}}}if(cp_special_page=="0"){b+=".paragraph_wrapper { display: none; } ";b+="#respond { display: none; } ";if(cp_sidebar_minimised=="y"){b+="#comments_sidebar .sidebar_contents_wrapper { display: none; } "}}b+="#activity_sidebar .paragraph_wrapper { display: none; } ";if(jQuery.cookie("cp_container_width")){d=jQuery.cookie("cp_container_width");if(cp_is_signup_page=="1"){b+="#content { width: "+d+"%; } "}else{b+="#page_wrapper { width: "+d+"%; } "}b+="#footer { width: "+d+"%; } "}if(jQuery.cookie("cp_book_nav_width")){a=jQuery.cookie("cp_book_nav_width");b+="#book_nav div#cp_book_nav { width: "+a+"%; } "}if(jQuery.cookie("cp_sidebar_width")){b+="#sidebar { width: "+jQuery.cookie("cp_sidebar_width")+"%; } "}if(jQuery.cookie("cp_sidebar_left")){b+="#sidebar { left: "+jQuery.cookie("cp_sidebar_left")+"%; } "}b+="ul#sidebar_tabs, #toc_header.sidebar_header, body.blog_post #activity_header.sidebar_header { display: block; } ";if(cp_is_mobile=="1"&&cp_is_tablet=="0"){b+=".sidebar_contents_wrapper { height: auto; } "}b+="</style>"}document.write(b)}cp_page_setup();function commentpress_setup_page_layout(){var a;if(cp_is_signup_page=="1"){a=jQuery("#content")}else{a=jQuery("#page_wrapper")}a.each(function(f){var l,j,b,o,k,c,h,e,n,p,d,g,m;l=jQuery(this);j=jQuery("#content");b=jQuery("#sidebar");o=jQuery("#footer");k=jQuery("#book_header");c=jQuery("#book_nav_wrapper");h=jQuery("#cp_book_nav");e=jQuery("#cp_book_info");n=l.width();p=b.width();m=b.offset().left-n;l.resizable({handles:"e",minWidth:cp_min_page_width,alsoResize:"#footer",start:function(i,q){n=l.width();p=b.width();d=h.width();g=b.css("left");m=b.offset().left-n},resize:function(i,q){var r;l.css("height","auto");o.css("height","auto");b.css("left",(l.width()+m)+"px");r=n-l.width();b.css("width",(p+r)+"px");h.css("width",(d-r)+"px")},stop:function(i,w){var v,q,t,r,x,s,u;v=parseFloat(jQuery(window).width());q=l.width();if(jQuery.browser.webkit){q=q+1}t=parseFloat(Math.ceil((1000000*parseFloat(q)/v))/10000);l.css("width",t+"%");if(cp_is_signup_page=="0"){j.css("width","auto")}q=h.width();if(jQuery.browser.webkit){q=q+1}r=parseFloat(Math.ceil((1000000*parseFloat(q)/v))/10000);h.css("width",r+"%");q=b.width();if(jQuery.browser.webkit){q=q+1}x=parseFloat(Math.ceil((1000000*parseFloat(q)/v))/10000);b.css("width",x+"%");s=b.position().left;if(jQuery.browser.webkit){s=s+1}u=parseFloat(Math.ceil((1000000*parseFloat(s)/v))/10000);b.css("left",u+"%");jQuery.cookie("cp_container_width",t.toString(),{expires:28,path:cp_cookie_path});jQuery.cookie("cp_book_nav_width",r.toString(),{expires:28,path:cp_cookie_path});jQuery.cookie("cp_sidebar_left",u.toString(),{expires:28,path:cp_cookie_path});jQuery.cookie("cp_sidebar_width",x.toString(),{expires:28,path:cp_cookie_path})}})})}function commentpress_get_header_offset(){var a;a=0-(jQuery.px_to_num(jQuery("#container").css("top")));if(cp_wp_adminbar=="y"){a-=cp_wp_adminbar_height}return a}function commentpress_scroll_to_top(b,a){if(typeof b==="undefined"){return}if(msie6_detected){jQuery("#main_wrapper").scrollTo(b,{duration:a})}else{if(cp_is_mobile=="0"||cp_is_tablet=="1"){jQuery.scrollTo(b,a)}}}function cp_scroll_to_anchor_on_load(){var j,d,e,i,k,a,h,f,c,b,g;j="";d=document.location.toString();if(d.match("#comment-")){cp_activate_sidebar("comments");e=d.split("#comment-")[1];i=jQuery("#comment-"+e).parents("div.paragraph_wrapper").map(function(){return this});if(i.length>0){k=jQuery(i[0]);if(cp_comments_open=="y"){j=k.prop("id").split("-")[1];a=jQuery("#para_wrapper-"+j+" .reply_to_para").prop("id");h=a.split("-")[1];f=jQuery("#comment_post_ID").prop("value");if(cp_tinymce=="1"){if(jQuery("#comment-"+e+" > .reply").text()!==""){cp_tinymce="0";addComment.moveForm("comment-"+e,e,"respond",f,j);cp_tinymce="1"}}else{addComment.moveForm("comment-"+e,e,"respond",f,j)}}k.show();cp_scroll_comments(jQuery("#comment-"+e),1,"flash");if(j!==""){c=jQuery("#textblock-"+j);jQuery.highlight_para(c);commentpress_scroll_page(c)}else{if(page_highlight===false){commentpress_scroll_to_top(0,cp_scroll_speed)}page_highlight=!page_highlight}return}}else{jQuery("span.para_marker > a").each(function(o){var p,m,l,n,q;p=jQuery(this).prop("id");if(d.match("#"+p)||d.match("#para_heading-"+p)){if(cp_comments_open=="y"){m=jQuery("#para_wrapper-"+p+" .reply_to_para").prop("id");l=m.split("-")[1];n=jQuery("#comment_post_ID").prop("value");addComment.moveFormToPara(l,p,n)}jQuery("#para_heading-"+p).next("div.paragraph_wrapper").show();cp_scroll_comments(jQuery("#para_heading-"+p),1);q=jQuery("#textblock-"+p);jQuery.highlight_para(q);commentpress_scroll_page(q);return}})}if(d.match("#respond")){jQuery("h3#para_heading- a.comment_block_permalink").click();return}if(d.match("#")){b=d.split("#")[1];if(b=="edit=true"){return}if(b=="fee-edit-link"){return}g=jQuery("#"+b);if(g.length){g.addClass("selected_para");commentpress_scroll_page(g)}return}}function cp_do_comment_icon_action(l,i){cp_activate_sidebar("comments");var j,b,d,h,e,g,c,f,a,k;j=jQuery("#para_heading-"+l).next("div.paragraph_wrapper");if(j.length==0){return}b=jQuery("#para_wrapper-"+l+" .commentlist");d=j.find("#respond");h=addComment.getLevel();e=false;g=j.css("display");if(g=="none"){e=true}jQuery.unhighlight_para();if(l!==""){c=jQuery("#textblock-"+l);if(cp_promote_reading=="1"&&!e){}else{jQuery.highlight_para(c);commentpress_scroll_page(c)}}if(cp_promote_reading=="0"){if(cp_comments_open=="y"){f=jQuery("#comment_post_ID").prop("value");a=jQuery("#para_wrapper-"+l+" .reply_to_para").prop("id");k=a.split("-")[1]}if(!d[0]){if(cp_comments_open=="y"){addComment.moveFormToPara(k,l,f)}}if(d[0]&&!h){if(cp_comments_open=="y"){addComment.moveFormToPara(k,l,f);if(i=="marker"){cp_scroll_comments(jQuery("#para_heading-"+l),cp_scroll_speed)}else{cp_scroll_comments(jQuery("#respond"),cp_scroll_speed)}}else{cp_scroll_comments(jQuery("#para_heading-"+l),cp_scroll_speed)}return}if(!d[0]&&b[0]&&!e){if(cp_comments_open=="y"){if(i=="marker"){cp_scroll_comments(jQuery("#para_heading-"+l),cp_scroll_speed)}else{cp_scroll_comments(jQuery("#respond"),cp_scroll_speed)}}else{cp_scroll_comments(jQuery("#para_heading-"+l),cp_scroll_speed)}return}if(!e&&b[0]){if(cp_comments_open=="y"){if(i=="marker"){cp_scroll_comments(jQuery("#para_heading-"+l),cp_scroll_speed)}else{cp_scroll_comments(jQuery("#respond"),cp_scroll_speed)}}else{cp_scroll_comments(jQuery("#para_heading-"+l),cp_scroll_speed)}return}if(d[0]&&!b[0]&&!e){if(cp_comments_open=="y"){if(i=="marker"){cp_scroll_comments(jQuery("#para_heading-"+l),cp_scroll_speed)}else{cp_scroll_comments(jQuery("#respond"),cp_scroll_speed)}}else{cp_scroll_comments(jQuery("#para_heading-"+l),cp_scroll_speed)}return}if(!e&&!b[0]){j.css("display","none");e=true}}j.slideToggle("slow",function(){if(cp_promote_reading=="1"&&e){cp_scroll_comments(jQuery("#para_heading-"+l),cp_scroll_speed)}else{if(e){if(cp_comments_open=="y"){if(i=="marker"){cp_scroll_comments(jQuery("#para_heading-"+l),cp_scroll_speed)}else{cp_scroll_comments(jQuery("#respond"),cp_scroll_speed)}}else{cp_scroll_comments(jQuery("#para_heading-"+l),cp_scroll_speed)}}}})}function cp_activate_sidebar(d){var b,c,a;b=jQuery("#"+d+"_sidebar").css("z-index");if(b=="2001"){jQuery(".sidebar_container").css("z-index","2001");jQuery("#"+d+"_sidebar").css("z-index","2010");c=cp_get_sidebar_top();a=cp_get_sidebar_top_border();jQuery(".sidebar_header").css("height",(c-a)+"px");jQuery("#"+d+"_header.sidebar_header").css("height",c+"px");cp_toc_on_top="y"}if(cp_is_mobile=="0"||cp_is_tablet=="1"){jQuery.set_sidebar_height()}else{jQuery(".sidebar_container").css("visibility","hidden");jQuery("#"+d+"_sidebar").css("visibility","visible")}}function cp_get_sidebar_top(){return jQuery.px_to_num(jQuery("#toc_sidebar").css("top"))}function cp_get_sidebar_top_border(){return jQuery.px_to_num(jQuery(".sidebar_minimiser").css("borderTopWidth"))}function cp_open_header(){var b,a,d,f,c,g,e;b=jQuery("#book_nav").height();a=jQuery("#sidebar");d=jQuery.get_sidebar_pane();f=jQuery("#book_header");c=jQuery("#container");g=cp_container_top_max;if(cp_wp_adminbar=="y"){g=cp_container_top_max-cp_wp_adminbar_height}c.animate({top:g+"px",duration:"fast"},function(){f.fadeIn("fast",function(){cp_header_animating=false})});if(cp_sidebar_minimised=="n"){e=a.height()-cp_book_header_height;a.animate({top:cp_container_top_max+"px",height:e+"px",duration:"fast"},function(){a.css("height","auto")});d.animate({height:(d.height()-cp_book_header_height)+"px",duration:"fast"},function(){if(cp_is_mobile=="0"||cp_is_tablet=="1"){jQuery.set_sidebar_height()}cp_header_animating=false})}else{a.animate({top:cp_container_top_max+"px",duration:"fast"},function(){cp_header_animating=false;if(cp_is_mobile=="0"||cp_is_tablet=="1"){jQuery.set_sidebar_height()}})}}function cp_close_header(){var b,a,d,f,c;var g,e;b=jQuery("#book_nav").height();a=jQuery("#sidebar");d=jQuery.get_sidebar_pane();f=jQuery("#book_header");c=jQuery("#container");f.hide();g=cp_container_top_min;if(cp_wp_adminbar=="y"){g=cp_container_top_min-cp_wp_adminbar_height}c.animate({top:g+"px",duration:"fast"});if(cp_sidebar_minimised=="n"){e=a.height()+cp_book_header_height;a.animate({top:cp_container_top_min+"px",height:e+"px",duration:"fast"},function(){a.css("height","auto")});d.animate({height:(d.height()+cp_book_header_height)+"px",duration:"fast"},function(){if(cp_is_mobile=="0"||cp_is_tablet=="1"){jQuery.set_sidebar_height()}cp_header_animating=false})}else{a.animate({top:cp_container_top_min+"px",duration:"fast"},function(){cp_header_animating=false;if(cp_is_mobile=="0"||cp_is_tablet=="1"){jQuery.set_sidebar_height()}})}}function commentpress_setup_header_minimiser(){if(cp_header_animating===true){return false}cp_header_animating=true;if(cp_header_minimised===undefined||cp_header_minimised===null||cp_header_minimised=="n"){cp_close_header()}else{cp_open_header()}cp_header_minimised=(cp_header_minimised=="y")?"n":"y";jQuery.cookie("cp_header_minimised",cp_header_minimised,{expires:28,path:cp_cookie_path})}jQuery(document).ready(function(b){cp_book_header_height=b("#book_header").height();if(cp_is_mobile=="0"||cp_is_tablet=="1"){b.set_sidebar_height()}if(jQuery.cookie("cp_container_top_min")){}else{cp_container_top_max=b.px_to_num(b("#container").css("top"));cp_container_top_min=cp_container_top_max-cp_book_header_height;b.cookie("cp_container_top_min",cp_container_top_min.toString(),{expires:28,path:cp_cookie_path});b.cookie("cp_container_top_max",cp_container_top_max.toString(),{expires:28,path:cp_cookie_path})}commentpress_setup_page_layout();commentpress_setup_comment_headers();commentpress_enable_comment_permalink_clicks();commentpress_setup_para_permalink_icons();commentpress_setup_page_click_actions();commentpress_setup_para_links();cp_enable_context_clicks();commentpress_setup_context_headers();commentpress_setup_footnotes_compatibility();b("#toc_header h2 a").click(function(d){d.preventDefault();cp_activate_sidebar("toc");return false});b("#activity_header h2 a").click(function(d){d.preventDefault();cp_activate_sidebar("activity");return false});b("#comments_header h2 a").click(function(d){d.preventDefault();cp_activate_sidebar("comments");return false});b("a.para_permalink").click(function(d){d.preventDefault();return false});b("a.comment_block_permalink").click(function(d){d.preventDefault();return false});b("#btn_header_min").click(function(d){d.preventDefault();commentpress_setup_header_minimiser();return false});if(msie6_detected){b("#btn_header_min").hide()}b("#cp_minimise_all_comments").click(function(d){d.preventDefault();b("#comments_sidebar div.paragraph_wrapper").slideUp();b.unhighlight_para()});b("#cp_minimise_all_activity").click(function(d){d.preventDefault();b("#activity_sidebar div.paragraph_wrapper").slideUp()});b("#toc_sidebar .sidebar_contents_wrapper ul#toc_list li a").click(function(e){if(cp_toc_chapter_is_page=="0"){var d;d=b(this).parent().find("ul");if(d.length>0){if(cp_show_subpages=="0"){b(this).next("ul").slideToggle()}e.preventDefault();return false}}});var c,a;c=b("#content").css("min-height");a=b("#content").css("padding-bottom");b("#literal .post").css("display","none");b("#original .post").css("display","none");b("#content-tabs li h2 a").click(function(e){var d;e.preventDefault();d=this.href.split("#")[1];b(".post").css("display","none");b(".workflow-wrapper").css("min-height","0");b(".workflow-wrapper").css("padding-bottom","0");b("#"+d+".workflow-wrapper").css("min-height",c);b("#"+d+".workflow-wrapper").css("padding-bottom",a);b("#"+d+" .post").css("display","block");b("#content-tabs li").removeClass("default-content-tab");b(this).parent().parent().addClass("default-content-tab");return false});if(cp_special_page=="1"){cp_scroll_to_comment_on_load()}else{cp_scroll_to_anchor_on_load()}jQuery(document).trigger("commentpress-document-ready")});