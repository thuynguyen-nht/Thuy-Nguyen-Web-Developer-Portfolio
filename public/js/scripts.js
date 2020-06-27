// JavaScript Document
function toggleDropdown(e) {
	const _d = $(e.target).closest('.dropdown'),
		_m = $('.dropdown-menu', _d);
	setTimeout(function () {
		const shouldOpen = e.type !== 'click' && _d.is(':hover');
		_m.toggleClass('show', shouldOpen);
		_d.toggleClass('show', shouldOpen);
		$('[data-toggle="dropdown"]', _d).attr('aria-expanded', shouldOpen);
	}, e.type === 'mouseleave' ? 300 : 0);
}

$('body')
	.on('mouseenter mouseleave', '.dropdown', toggleDropdown)
	.on('click', '.dropdown-menu a', toggleDropdown);

$(document).ready(function () {
	$(".moreBox").slice(0, 3).show();
	if ($(".blogBox:hidden").length != 0) {
		$("#loadMore").show();
	}
	$("#loadMore").on('click', function (e) {
		e.preventDefault();
		$(".moreBox:hidden").slice(0, 6).slideDown();
		if ($(".moreBox:hidden").length == 0) {
			$("#loadMore").fadeOut('slow');
		}
	});
});


// $("#contactForm").submit(function (event) {
// 	event.preventDefault();
// 	var name = $("#name-input").val();
// 	var email = $("#email-input").val();
// 	var message = $("#text-input").val();
// 	if (!name.value || !email.value || !message.value) {
// 		alertify.error("Please fill all the Please check your entries")
// 	} else {
// 		$.ajax({
// 			url: "https://formspree.io/xaypdbqw",
// 			method: "POST",
// 			data: $(this).serialize(),
// 			dataType: "json"
// 		});
// 		$(this).get(0).reset();
// 		alertify.success("Message sent")
// 	}
// })

window.addEventListener("DOMContentLoaded", function () {

	// get the form elements defined in your form HTML above

	var form = document.getElementById("contactForm");
	var button = document.getElementById("my-form-button");
	var status = document.getElementById("my-form-status");

	// Success and Error functions for after the form is submitted

	function success() {
		form.reset();
		button.style = "display: none ";
		status.innerHTML = "Thanks!";
	}

	function error() {
		status.innerHTML = "Oops! There was a problem.";
	}

	// handle the form submission event

	form.addEventListener("submit", function (ev) {
		ev.preventDefault();
		var data = new FormData(form);
		console.log(data)
		ajax(form.method, form.action, data, success, error);
	});
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
	var xhr = new XMLHttpRequest();
	xhr.open(method, url);
	xhr.setRequestHeader("Accept", "application/json");
	xhr.onreadystatechange = function () {
		if (xhr.readyState !== XMLHttpRequest.DONE) return;
		if (xhr.status === 200) {
			success(xhr.response, xhr.responseType);
		} else {
			error(xhr.status, xhr.response, xhr.responseType);
		}
	};
	xhr.send(data);
}