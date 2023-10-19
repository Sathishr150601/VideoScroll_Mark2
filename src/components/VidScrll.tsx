import { useEffect, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const registerVideo = (bound: string, video: string) => {
	const boundElement = document.querySelector(bound) as HTMLElement | null;
	const videoElement = document.querySelector(video) as HTMLVideoElement | null;

	if (!boundElement || !videoElement) {
		console.error("Element not found");
		return;
	}

	const scrollVideo = () => {
		if (videoElement instanceof HTMLVideoElement) {
			if (videoElement.duration) {
				const distanceFromTop =
					window.scrollY + (boundElement.getBoundingClientRect().top || 0);
				const rawPercentScrolled =
					(window.scrollY - distanceFromTop) /
					(boundElement.scrollHeight - window.innerHeight);
				const percentScrolled = Math.min(Math.max(rawPercentScrolled, 0), 1);

				videoElement.currentTime = videoElement.duration * percentScrolled;
			}
		}
		requestAnimationFrame(scrollVideo);
	};

	requestAnimationFrame(scrollVideo);
};

const VidScroll: React.FC = () => {
	useEffect(() => {
		registerVideo("#scrollSection1", "#scrollSection1 #HeroBgVideo");
	}, []);

	return (
		<section
			className="heroWrapper h-[2350vh] w-screen relative"
			id="scrollSection1"
		>
			<div className="bgVideo">
				<video
					className="fixed object-cover w-screen max-xl:h-screen"
					id="HeroBgVideo"
					controls={false}
				>
					<source src="./apple.mp4" />
				</video>
			</div>
		</section>
	);
};

export default VidScroll;
