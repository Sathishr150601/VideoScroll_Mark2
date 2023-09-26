import { useEffect, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function VideoScroll() {
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

	useLayoutEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
	});

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
			<div className="heroContent w-screen text-white absolute">
				<div className="w-screen h-screen flex flex-col justify-start items-center xl:pt-[10%]">
					<h2 className="text-[8vw] leading-[11vw] txtshadow">
						Profound Sound.
					</h2>
					<h4 className="text-[2vw] leading-[3vw] txtshadow">
						Available in Midnight and White. $299
					</h4>
					<p className="py-[.5vw] px-[1vw] text-black bg-white rounded-3xl mt-[30px]">
						Learn About us
					</p>
				</div>
				<div className="w-screen h-screen flex justify-between p-[8%]">
					<div className="w-1/2 flex justify-start items-start">
						<div className="w-[60%]">
							<h4 className="text-[1.2vw] leading-[2vw] txtshadow">
								High-fidelity audio
							</h4>
							<h2 className="text-[4vw] leading-[5vw] txtshadow">
								Amp up everything you hear.
							</h2>
						</div>
					</div>
					<div className="w-1/2 flex justify-end items-end">
						<div className="w-[50%]">
							<p className="">
								HomePod is a powerhouse of a speaker. Apple‑engineered audio
								technology and advanced software deliver high‑fidelity sound
								throughout the room. It intelligently adapts to whatever it’s
								playing — or wherever it’s playing — and surrounds you in
								immersive audio that makes everything you listen to sound
								incredible.
							</p>
						</div>
					</div>
				</div>
				<div className="w-screen flex justify-between p-[8%]">
					<div className="w-1/2 flex justify-start items-end">
						<div className="w-1/2">
							<h4 className="text-[1.5vw] leading-[2vw] txtshadow">
								Sound all around.
							</h4>
							<p className="">
								Enjoy a whole new level of spaciousness and layering with
								HomePod. Its beamforming tweeters precisely beam direct sound,
								like primary vocals, into the middle of the room, and reflect
								ambient sound, like the backup band, off the walls — for fully
								immersive listening. And with Spatial Audio tracks, you’ll
								experience the sense of being surrounded in music like never
								before.
							</p>
						</div>
					</div>
					<div className="w-1/2"></div>
				</div>
			</div>
		</section>
	);
}
