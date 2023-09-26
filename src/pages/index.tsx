import VideoScroll from "@/components/VideoScroll";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useLayoutEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function index() {
	useEffect(() => {});

	return (
		<main className="">
			<Test />
			<div className="absolute h-screen w-screen bg-white" id="trigger"></div>
		</main>
	);
}

function Test() {
	useEffect(() => {
		const registerVideo = (bound: string, video: string) => {
			const boundElement = document.querySelector(bound);
			const videoElement = document.querySelector(video);

			if (!boundElement || !videoElement) {
				console.error("Element not found");
				return;
			}

			const scrollVideo = () => {
				if (videoElement instanceof HTMLVideoElement) {
					if (videoElement.duration) {
						const distanceFromTop =
							window.scrollY + boundElement.getBoundingClientRect().top;
						const rawPercentScrolled =
							(window.scrollY - distanceFromTop) /
							(boundElement.scrollHeight - window.innerHeight);
						const percentScrolled = Math.min(
							Math.max(rawPercentScrolled, 0),
							1
						);

						videoElement.currentTime = videoElement.duration * percentScrolled;
					}
				}
				requestAnimationFrame(scrollVideo);
			};

			requestAnimationFrame(scrollVideo);
		};

		registerVideo("#scrollSection1", "#scrollSection1 #HeroBgVideo");
	}, []);

	useEffect(() => {
		gsap.to("#HeroBgVideo", {
			scrollTrigger: {
				trigger: "#scrollSection1",
				start: "bottom bottom",
				end: "bottom bottom",
				scrub: true,
				// markers: true,
			},
			position: "absolute",
		});

		gsap.to("#text1", {
			scrollTrigger: {
				trigger: "#text1",
				start: "top top",
				end: "center top",
				scrub: true,
				// markers: true,
			},
			position: "relative",
			display: "none",
			opacity: 0,
			y: -50,
		});

		gsap.to("#text2", {
			scrollTrigger: {
				trigger: "#text2",
				start: "top center",
				end: "center top",
				scrub: true,
				// markers: true,
			},
			display: "flex",
			opacity: 1,
			y: -50,
		});
		gsap.to("#text2", {
			scrollTrigger: {
				trigger: "#text2",
				start: "bottom top",
				end: "bottom top",
				scrub: true,
				// markers: true,
			},
			display: "none",
			opacity: 0,
		});

		gsap.to("#text3", {
			scrollTrigger: {
				trigger: "#text3",
				start: "top center",
				end: "center top",
				scrub: true,
				// markers: true,
			},
			display: "flex",
			opacity: 1,
			y: -50,
		});
		gsap.to("#text3", {
			scrollTrigger: {
				trigger: "#text3",
				start: "bottom top",
				end: "bottom top",
				scrub: true,
				// markers: true,
			},
			display: "none",
			opacity: 0,
		});
	}, []);
	return (
		<section
			className="heroWrapper w-screen relative h-[2350vh]"
			id="scrollSection1"
		>
			<div className="bgVideo">
				<video
					className="fixed object-cover w-full max-lg:h-screen"
					id="HeroBgVideo"
					controls={false}
				>
					<source src="./apple.mp4" />
				</video>
			</div>
			<div className="heroContent w-full text-white fixed">
				<div
					className="w-full h-screen flex flex-col justify-evenly items-center p-[10%] pt-[40%]"
					id="text1"
				>
					<div className="flex flex-col items-center">
						<h2 className="text-[10vw] leading-[12vw]">Profound sound.</h2>
						<h3 className="text-[4vw] leading-[6vw]">
							Available in Midnight and White. $299
						</h3>
					</div>
					<div className="">
						<p className="text-[5vw] leading-[7vw] text-center">
							HomePod is a powerhouse of a speaker. Apple‑engineered audio
							technology and advanced software deliver high‑fidelity sound
							throughout the room.
						</p>
					</div>
				</div>

				<div
					className="w-full h-screen flex justify-start items-start p-[10%] pt-[33%]"
					id="text2"
				>
					<div className="flex flex-col">
						<h2 className="text-[8vw] leading-[9vw]">Profound sound.</h2>
						<h3 className="text-[4vw] leading-[6vw]">
							Available in Midnight and White. $299
						</h3>
					</div>
				</div>
				<div
					className="w-full h-screen flex justify-start items-start p-[10%] pt-[33%]"
					id="text3"
				>
					<div className="flex flex-col">
						<h2 className="text-[11vw] leading-[13vw]">
							How do we make eggs from plants?
						</h2>
					</div>
				</div>
			</div>
		</section>
	);
}
