TORUS.init();
window.addEventListener("load", () => {
  if (window.TorusKit && window.TorusKit.reinit) window.TorusKit.reinit();

  setTimeout(() => {
    document.getElementById("loader").classList.add("hide");
  }, 1200);
});
  window.addEventListener('DOMContentLoaded', () => {
    if (window.tor) {
      tor.init();
    }
  });

var elements = document.getElementsByClassName("piece");
var SumEatingPieces = 0;

function onEatingDone() {
	Swal.fire({
		imageHeight: 200,
		imageUrl: "./download - 2025-11-11T080111.580.jpg",
		title: "You ate the whole cake. You're fat now. Happy birthday, Fatty.",
		width: 600,
		padding: "3em",
		color: "#dd1919ff",
		background: "#fff url(/images/trees.png)",
		backdrop: `
			rgba(0,0,123,0.4)
			url("PYh.gif")
			left top
			no-repeat
		`
	});
	SumEatingPieces = 0;
}

function onEating(PieceNumber) {
	SumEatingPieces += Number(PieceNumber);
	console.log(PieceNumber, SumEatingPieces);
	if (SumEatingPieces == 78) {
		onEatingDone();
	}
}

for (var i = 0; i < elements.length; i++) {
	const PieceNumber = elements[i].getAttribute("number");
	elements[i].addEventListener('click', () => {
		onEating(PieceNumber);
	});
}
