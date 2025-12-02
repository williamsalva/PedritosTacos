import { Section } from '../layout/Section';

const MenuBebidas = () => {
  return (
    <div className="mx-auto mt-4 flex flex-col items-center px-4">
      {/* Línea decorativa */}
      <div className="mb-4 w-full max-w-sm">
        <div className="h-0.5 w-full bg-main-pedritos" />
      </div>

      {/* Emoji de café */}
      <div className="md:text-7xl mb-2 text-center text-6xl">☕</div>

      {/* Café */}
      <div className="mb-4 text-center text-2xl font-bold text-custom-text md:text-3xl">
        Café <span className="text-custom-text">$23</span>
      </div>

      {/* Líneas decorativas con símbolo */}
      <div className="mb-4 flex w-full max-w-sm items-center justify-center">
        <div className="h-0.5 w-24 bg-main-pedritos md:w-32" />
        <div className="mx-8 flex flex-col items-center justify-center md:mx-10">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="text-custom-text"
          >
            {/* Punto arriba */}
            <circle cx="12" cy="5" r="2.5" fill="currentColor" />
            {/* Semicírculo (medio círculo) */}
            <path
              d="M4 12 A 8 8 0 0 0 20 12"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="h-0.5 w-24 bg-main-pedritos md:w-32" />
      </div>

      {/* Lista del menú */}
      <div className="w-full max-w-sm space-y-1 text-center text-custom-text">
        <div className="flex items-baseline justify-center text-xl md:text-2xl">
          <span className="font-semibold">Refrescos</span>
          <span className="tracking-tight">......................</span>
          <span className="text-2xl font-bold md:text-3xl">$23</span>
        </div>
        <div className="flex items-baseline justify-center text-xl md:text-2xl">
          <span className="font-semibold">Agua fresca 500ml </span>
          <span className="mx-1 text-2xl font-bold md:text-3xl">$23</span>
          <span className="mx-2">/</span>
          <span className="font-semibold">1L</span>
          <span className="mx-1 text-2xl font-bold md:text-3xl ">$32</span>
        </div>
        <div className="flex items-baseline justify-center text-xl md:text-2xl">
          <span className="font-semibold">Agua fresca embotellada</span>
          <span className="tracking-tight">...</span>
          <span className="text-2xl font-bold md:text-3xl">$28</span>
        </div>
        <div className="flex items-baseline justify-center text-xl md:text-2xl">
          <span className="font-semibold">Agua natural embotellada</span>
          <span className="tracking-tight">...</span>
          <span className="text-2xl font-bold md:text-3xl">$32</span>
        </div>
      </div>
    </div>
  );
};

const MenuTacos = () => {
  const menuItems = [
    { name: 'Taco blando', dots: '................', price: '$17' },
    { name: 'Taco dorado', dots: '................', price: '$17' },
    { name: 'Taco ahogado', dots: '..............', price: '$20' },
    { name: 'Taco asada', dots: '..................', price: '$20' },
    { name: 'Taco abierto', dots: '................', price: '$20' },
    { name: 'Takiqueso', dots: '....................', price: '$29' },
    { name: 'Taco de bebé', dots: '...............', price: '$11' },
    { name: 'Tortillas con consomé', dots: '....', price: '$4' },
    { name: 'Consomé', dots: '......................', price: '$15' },
  ];

  return (
    <div className="mx-auto mt-4 flex flex-col items-center px-4">
      {/* Líneas decorativas con símbolo */}
      <div className="mb-4 flex w-full max-w-sm items-center justify-center">
        <div className="h-0.5 w-24 bg-main-pedritos md:w-32" />
        <div className="mx-8 flex flex-col items-center justify-center md:mx-10">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="text-custom-text"
          >
            {/* Punto arriba */}
            <circle cx="12" cy="5" r="2.5" fill="currentColor" />
            {/* Semicírculo (medio círculo) */}
            <path
              d="M4 12 A 8 8 0 0 0 20 12"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="h-0.5 w-24 bg-main-pedritos md:w-32" />
      </div>

      {/* Lista del menú */}
      <div className="w-full max-w-sm space-y-1 text-center text-custom-text">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="flex items-baseline justify-center text-xl md:text-2xl"
          >
            <span className="font-semibold">{item.name}</span>
            <span className="tracking-tight">{item.dots}</span>
            <span className="text-2xl font-bold md:text-3xl">{item.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const TacosBebidas = () => {
  return (
    <Section yPadding="py-1">
      <div className="flex flex-col md:flex-row md:space-x-4 lg:space-x-12">
        <div className="flex-1">
          <h1 className="text-center text-4xl font-bold tracking-tight text-title-pedritos sm:text-6xl sm:tracking-tight lg:text-3xl xl:text-5xl xl:tracking-tight 2xl:text-[3.5rem]">
            Tacos
          </h1>
          <MenuTacos />
        </div>
        <div className="flex-1">
          <h1 className="text-center text-4xl font-bold tracking-tight text-title-pedritos sm:text-6xl sm:tracking-tight lg:text-3xl xl:text-5xl xl:tracking-tight 2xl:text-[3.5rem]">
            Bebidas
          </h1>
          <MenuBebidas />
        </div>
      </div>
    </Section>
  );
};

export { TacosBebidas };
