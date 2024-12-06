import InfoCard from '../UI/InfoCard';
import Cards from '../UI/Cards';
import Tasks from '../UI/Tasks';

export default function Home() {
	return (
		<>
			<section className="w-full max-w-[980px] shadow-md mt-8 flex flex-col items-center justify-center mx-auto bg-white">
				<div className="w-full flex items-center justify-between gap-4 px-2 py-6 sm:px-8 sm:py-12">
					<InfoCard />
				</div>

				<div className="w-full flex items-center justify-between gap-4 px-2 py-6 sm:px-8 sm:py-12">
					<Cards />
				</div>
			</section>

			<section className="w-full max-w-[980px] mt-8 flex flex-col items-center justify-center mx-auto bg-slate-200">
				<Tasks />
			</section>
		</>
	);
}
