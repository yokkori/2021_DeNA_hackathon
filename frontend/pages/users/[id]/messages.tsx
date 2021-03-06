import { GetServerSideProps, NextPage } from "next";
import Image from "next/image";
import useUser from "../../../hooks/useUser";
import getUser from "../../../utils/getUser";
import { User } from "../../../models";
import confetti from "canvas-confetti";
import { useEffect, useState } from "react";
import clsx from "clsx";
import MessageBox from "../../../components/MessageBox";

type MessagesProps = {
	status: number;
	data?: User;
};

const Messages: NextPage<MessagesProps> = (props) => {
	useEffect(() => {
		var end = Date.now() + 1 * 1000;

		// go Buckeyes!
		var colors = ["#ff7dda", "#42c9ff", "#c4ff4e", "#afff96"];

		(function frame() {
			confetti({
				particleCount: 4,
				angle: 60,
				spread: 55,
				origin: { x: 0 },
				colors: colors,
			});
			confetti({
				particleCount: 4,
				angle: 120,
				spread: 55,
				origin: { x: 1 },
				colors: colors,
			});

			if (Date.now() < end) {
				requestAnimationFrame(frame);
			}
		})();
	}, []);
	const { user, setUser } = useUser();
	const _user = user ? user : props.data;
	const [currentObjectId, setCurrentObjectId] = useState<number | null>(null);
	const currentMessage = _user.messages.find(
		(m) => m.objectId === currentObjectId
	);

	const imageOnClick = (objectId: number) => {
		setCurrentObjectId(objectId);
	};

	return (
		<div>
			{/* <a href="https://storyset.com/event">Event illustrations by Storyset</a> */}
			<div className="relative w-full h-screen bg-gray-50">
				{/* happy birthday */}
				<div className="absolute transform -translate-x-1/2 left-1/2">
					<Image alt="画像" src="/present/happy.svg" height={400} width={400} />
				</div>

				{_user.messages.map((message) => (
					<div key={message.id}>
						{/* rocket */}
						{message.objectId === 1 && (
							<div
								onClick={() => imageOnClick(1)}
								className="absolute top-[2%] left-[2%]"
							>
								<Image
									alt="画像"
									src="/present/1.svg"
									height={100}
									width={100}
								/>
							</div>
						)}

						{/* piggy bank */}
						{message.objectId === 2 && (
							<div
								onClick={() => imageOnClick(2)}
								className="absolute top-[10%] left-[30%]"
							>
								<Image
									alt="画像"
									src="/present/2.svg"
									height={100}
									width={100}
								/>
							</div>
						)}

						{/* green balloons */}
						{message.objectId === 3 && (
							<div
								onClick={() => imageOnClick(3)}
								className="absolute top-[20%] left-[20%]"
							>
								<Image
									alt="画像"
									src="/present/3.svg"
									height={150}
									width={150}
								/>
							</div>
						)}

						{/* human */}
						{message.objectId === 4 && (
							<div
								onClick={() => imageOnClick(4)}
								className="absolute top-[25%] right-[10%]"
							>
								<Image
									alt="画像"
									src="/present/4.svg"
									height={150}
									width={150}
								/>
							</div>
						)}

						{/* present box */}
						{message.objectId === 5 && (
							<div
								onClick={() => imageOnClick(5)}
								className="absolute top-[30%] left-[10%]"
							>
								<Image
									alt="画像"
									src="/present/5.svg"
									height={100}
									width={100}
								/>
							</div>
						)}

						{/* audio */}
						{message.objectId === 6 && (
							<div
								onClick={() => imageOnClick(6)}
								className="absolute top-[20%] left-[5%]"
							>
								<Image
									alt="画像"
									src="/present/6.svg"
									height={100}
									width={100}
								/>
							</div>
						)}

						{/* food */}
						{message.objectId === 7 && (
							<div
								onClick={() => imageOnClick(7)}
								className="absolute top-[10%] right-[5%]"
							>
								<Image
									alt="画像"
									src="/present/7.svg"
									height={100}
									width={100}
								/>
							</div>
						)}

						{/* blue balloon */}
						{message.objectId === 8 && (
							<div
								onClick={() => imageOnClick(8)}
								className="absolute top-[40%] right-[30%]"
							>
								<Image
									alt="画像"
									src="/present/8.svg"
									height={200}
									width={200}
								/>
							</div>
						)}

						{/* house */}
						{message.objectId === 9 && (
							<div
								onClick={() => imageOnClick(9)}
								className="absolute top-[40%] right-[5%]"
							>
								<Image
									alt="画像"
									src="/present/9.svg"
									height={100}
									width={100}
								/>
							</div>
						)}

						{/* letter */}
						{message.objectId === 10 && (
							<div
								onClick={() => imageOnClick(10)}
								className="absolute bottom-[35%] left-[5%]"
							>
								<Image
									alt="画像"
									src="/present/10.svg"
									height={100}
									width={100}
								/>
							</div>
						)}

						{/* coin */}
						{message.objectId === 11 && (
							<div
								onClick={() => imageOnClick(11)}
								className="absolute bottom-[20%] right-[5%]"
							>
								<Image
									alt="画像"
									src="/present/11.svg"
									height={200}
									width={200}
								/>
							</div>
						)}

						{/* plant */}
						{message.objectId === 12 && (
							<div
								onClick={() => imageOnClick(12)}
								className="absolute bottom-[10%] left-[5%]"
							>
								<Image
									alt="画像"
									src="/present/12.svg"
									height={200}
									width={200}
								/>
							</div>
						)}

						{/* purple balloon */}
						{message.objectId === 13 && (
							<div
								onClick={() => imageOnClick(13)}
								className="absolute bottom-[0%]"
							>
								<Image
									alt="画像"
									src="/present/13.svg"
									height={300}
									width={300}
								/>
							</div>
						)}

						{/* choco */}
						{message.objectId === 14 && (
							<div
								onClick={() => imageOnClick(14)}
								className="absolute top-[20%] right-[10%]"
							>
								<Image
									alt="画像"
									src="/present/14.svg"
									height={150}
									width={150}
								/>
							</div>
						)}

						{/* water */}
						{message.objectId === 15 && (
							<div
								onClick={() => imageOnClick(15)}
								className="absolute top-[10%] left-[5%]"
							>
								<Image
									alt="画像"
									src="/present/15.svg"
									height={100}
									width={100}
								/>
							</div>
						)}

						{/* car */}
						{message.objectId === 16 && (
							<div
								onClick={() => imageOnClick(16)}
								className="absolute bottom-[45%] left-[5%]"
							>
								<Image
									alt="画像"
									src="/present/16.svg"
									height={100}
									width={100}
								/>
							</div>
						)}

						{/* popcorn */}
						{message.objectId === 17 && (
							<div
								onClick={() => imageOnClick(17)}
								className="absolute bottom-[28%] right-[5%]"
							>
								<Image
									alt="画像"
									src="/present/17.svg"
									height={200}
									width={200}
								/>
							</div>
						)}
					</div>
				))}
				{/* cake */}
				<div className="absolute bottom-[0%] right-[10%] pointer-events-none">
					<Image alt="画像" src="/present/cake.svg" height={400} width={400} />
				</div>
			</div>
			{/* バックドロップ */}
			<div
				className={clsx(
					"absolute inset-0 bg-black transition-opacity duration-300",
					{
						"opacity-0 pointer-events-none": currentObjectId === null,
						"opacity-80 pointer-events-auto": currentObjectId !== null,
					}
				)}
				onClick={() => setCurrentObjectId(null)}
			></div>

			{/* モーダル */}
			<div
				className={clsx(
					"fixed w-11/12 bg-white transition-opacity duration-300 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
					{
						"opacity-100 pointer-events-auto": currentObjectId !== null,
						"opacity-0 pointer-events-none": currentObjectId === null,
					}
				)}
			>
				{currentObjectId !== null && (
					<MessageBox writerName={currentMessage.writerName}>
						{currentMessage.content}
					</MessageBox>
				)}
			</div>
		</div>
	);
};
export default Messages;

export const getServerSideProps: GetServerSideProps<any> = async (
	context: any
) => {
	try {
		const { id } = context.query;
		console.log(id);
		const res = await getUser(id);
		if (res.error) return { props: { status: 404, data: {} } };
		console.log(res.data);
		return { props: { status: 200, data: res.data } };
	} catch (e) {
		return { props: { status: 500, data: {} } };
	}
};
