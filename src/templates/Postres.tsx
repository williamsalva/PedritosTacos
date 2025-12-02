import { Section } from '../layout/Section';

const Postres = () => {
  return (
    <Section yPadding="py-1">
      <div className="flex flex-col items-center justify-center">
        <div className="w-full max-w-md px-4">
          <h1 className="text-center text-4xl font-bold tracking-tight text-title-pedritos sm:text-6xl sm:tracking-tight lg:text-3xl xl:text-5xl xl:tracking-tight 2xl:text-[3.5rem]">
            Postres
          </h1>

          <div className="mx-auto mt-4 flex flex-col items-center">
            {/* Línea decorativa */}
            <div className="mb-4 w-full max-w-sm">
              <div className="h-0.5 w-full bg-main-pedritos" />
            </div>

            {/* Emoji de croissant como placeholder */}
            <div className="mb-6 text-[10rem] leading-none md:text-[8rem]">
              🥐
            </div>

            {/* Texto del menú */}
            <div className="flex items-baseline justify-center text-xl text-custom-text md:text-2xl">
              <span className="font-semibold italic">
                Cuernitos de chocolate
              </span>
              <span className="tracking-tight">........</span>
              <span className="text-2xl font-bold md:text-3xl">$37</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export { Postres };
