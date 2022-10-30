const headerHTML = `<header>
<div class="row">
	<div class="row__inner">

		<div class="col-left">
			<h1 class="logo">smile <br> <span>food</span></h1>
			<div class="num-phone">
				<p class="desc">
					Заказывайте по номеру:
				</p>
				<br>
				<span class="num">333-666-999</span>
			</div>
		</div>

		<div class="col-right">
			<ul class="list-socials">
				<li class="list-socials__item">
					<i class="icon-instagram"></i>
				</li>
				<li class="list-socials__item">
					<i class="icon-facebook"></i>
				</li>
				<li class="list-socials__item">
					<i class="icon-twitter"></i>
				</li>
			</ul>
			<ul class="list-buttons">
				<li class="list-buttons__item list-buttons__basket">
					<i class="icon-basket"></i>
					<span>3</span>
				</li>
				<li class="list-buttons__item list-buttons__topic">
					<i class="icon-sun"></i>
					<i class="icon-moon none"></i>
				</li>
			</ul>
		</div>

	</div>
</div>
</header>
`

/* <div class="pizza-img__block">
	<img src="./img/pizza-header.webp" alt="">
</div> */


const body = document.body
body.insertAdjacentHTML("afterbegin", headerHTML)