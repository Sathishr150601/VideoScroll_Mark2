import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import React, { useLayoutEffect } from "react";

const test = () => {
	useLayoutEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		gsap.to("#text", {
			scrollTrigger: {
				trigger: "#trigger",
				start: "top 90%",
				end: "bottom 10%",
				scrub: true,
				// markers: true,
			},
			opacity: 1,
			duration: 3,
		});

		gsap.to("#text", {
			scrollTrigger: {
				trigger: "#trigger",
				start: "bottom 10%",
				end: "bottom top",
				scrub: true,
				// markers: true,
			},
			opacity: 0,
			delay: 0.5,
			duration: 3,
		});
	}, []);
	return (
		<div className="bg-black text-white w-screen relative">
			<div className="w-screen h-screen flex"></div>
			<div className="w-screen p-[8%]" id="trigger">
				<div className="fixed bottom-[10%] opacity-0" id="text">
					This is a Example Text
				</div>
			</div>
			<div className="w-screen h-screen"></div>
		</div>
	);
};

export default test;
