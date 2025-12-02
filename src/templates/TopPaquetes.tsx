import { Section } from '../layout/Section';

const MenuTop = () => {
  return (
    <div className="mx-auto mt-4 flex flex-col items-center px-4">
      {/* Línea decorativa */}
      <div className="mb-6 w-full max-w-xs">
        <div className="h-0.5 w-full bg-main-pedritos" />
      </div>

      {/* Top de tacos */}
      <div className="mb-8 flex w-full max-w-lg items-center justify-center gap-2">
        <span className="flex-1 text-right text-xl font-bold italic text-custom-text md:text-2xl">
          Nuestro top de 3 tacos
        </span>

        <div className="flex shrink-0 items-center justify-center">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            {/* Punto */}
            <circle cx="10" cy="20" r="3.5" fill="#9E2253" />
            {/* Arco grande vertical */}
            <path
              d="M18 5 A 15 15 0 0 1 18 35"
              stroke="#9E2253"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <div className="flex flex-1 flex-col text-lg font-normal text-custom-text md:text-xl">
          <span>1.-Ahogado</span>
          <span>2.-Abierto</span>
          <span>3.-Takiqueso</span>
        </div>
      </div>

      {/* Top de salsas */}
      <div className="flex w-full max-w-lg items-center justify-center gap-2">
        <span className="flex-1 text-right text-xl font-bold italic text-custom-text md:text-2xl">
          Nuestro top de 3 salsas
        </span>

        <div className="flex shrink-0 items-center justify-center">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            {/* Punto */}
            <circle cx="10" cy="20" r="3.5" fill="#9E2253" />
            {/* Arco grande vertical */}
            <path
              d="M18 5 A 15 15 0 0 1 18 35"
              stroke="#9E2253"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <div className="flex flex-1 flex-col text-lg font-normal text-custom-text md:text-xl">
          <span>1.-Pepino</span>
          <span>2.-Encebollado</span>
          <span>3.-Salsa de tomate</span>
        </div>
      </div>
    </div>
  );
};

const MenuOrdenes = () => {
  return (
    <div className="mx-auto mt-6 flex flex-col items-center px-4">
      {/* Línea decorativa */}
      <div className="mb-4 w-full max-w-xs">
        <div className="h-0.5 w-full bg-main-pedritos" />
      </div>

      {/* Lista del menú */}
      <div className="w-full max-w-sm space-y-4 text-custom-text">
        {/* Orden de barbacoa */}
        <div className="text-xl md:text-2xl">
          <span className="font-semibold italic">
            Orden de barbacoa con consomé
          </span>
          <span className="tracking-tight">..................</span>
          <span className="text-2xl font-bold md:text-3xl">$95</span>
        </div>

        {/* Kilo de barbacoa */}
        <div className="text-xl md:text-2xl">
          <span className="font-semibold italic">
            Kilo de barbacoa incluye: salsas, limones, cebolla, consomé y grasa
          </span>
          <span className="tracking-tight">........</span>
          <span className="text-2xl font-bold md:text-3xl">$369</span>
        </div>
      </div>
    </div>
  );
};

const MenuPaquetes = () => {
  return (
    <div className="mx-auto mt-4 flex flex-col items-center px-4">
      {/* Paquete 1 */}
      <div className="mb-6 w-full max-w-md text-custom-text">
        <h3 className="mb-2 text-center text-xl font-bold italic md:text-2xl">
          <span className="text-yellow-600">★</span> Paquete 1: Pa´ que los
          pruebes todos
        </h3>
        <div className="flex items-center justify-end">
          <div className="flex flex-col text-right text-lg md:text-xl">
            <span>1 Takiqueso</span>
            <span>1 Ahogado</span>
            <span>1 Abierto</span>
            <span>1 Dorado</span>
            <span>1 Agua de 500ml</span>
          </div>
          <div className="mx-5 flex items-center">
            <svg width="40" height="40" viewBox="0 0 30 40" fill="none">
              <circle cx="10" cy="20" r="3.5" fill="#9E2253" />
              <path
                d="M18 5 A 15 15 0 0 1 18 35"
                stroke="#9E2253"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <span className="text-2xl font-bold md:text-3xl">$103</span>
        </div>
      </div>

      {/* Línea decorativa */}
      <div className="mb-3 w-full max-w-xs">
        <div className="h-0.5 w-full bg-main-pedritos" />
      </div>

      {/* Paquete 2 */}
      <div className="mb-6 w-full max-w-md text-custom-text">
        <h3 className="mb-2 text-center text-xl font-bold italic md:text-2xl">
          <span className="text-yellow-600">★</span> Paquete 2: Al estilo
          Jalisco
        </h3>
        <div className="flex items-center justify-end">
          <div className="flex flex-col text-right text-lg md:text-xl">
            <span>3 Ahogados y 1 agua de 500 ml</span>
          </div>
          <div className="mx-5 flex items-center">
            <svg width="40" height="40" viewBox="0 0 30 40" fill="none">
              <circle cx="10" cy="20" r="3.5" fill="#9E2253" />
              <path
                d="M18 5 A 15 15 0 0 1 18 35"
                stroke="#9E2253"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <span className="text-2xl font-bold md:text-3xl">$77</span>
        </div>
      </div>

      {/* Línea decorativa */}
      <div className="mb-3 w-full max-w-xs">
        <div className="h-0.5 w-full bg-main-pedritos" />
      </div>

      {/* Paquete 3 */}
      <div className="mb-6 w-full max-w-md text-custom-text">
        <h3 className="mb-2 text-center text-xl font-bold italic md:text-2xl">
          <span className="text-yellow-600">★</span> Paquete 3: El clásico
        </h3>
        <div className="flex items-center justify-end">
          <div className="flex flex-col text-right text-lg md:text-xl">
            <span>4 dorados y 1 agua de 500 ml</span>
          </div>
          <div className="mx-5 flex items-center">
            <svg width="40" height="40" viewBox="0 0 30 40" fill="none">
              <circle cx="10" cy="20" r="3.5" fill="#9E2253" />
              <path
                d="M18 5 A 15 15 0 0 1 18 35"
                stroke="#9E2253"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <span className="text-2xl font-bold md:text-3xl">$85</span>
        </div>
      </div>

      {/* Línea decorativa */}
      <div className="mb-3 w-full max-w-xs">
        <div className="h-0.5 w-full bg-main-pedritos" />
      </div>

      {/* Paquete 4 */}
      <div className="mb-6 w-full max-w-md text-custom-text">
        <h3 className="mb-2 text-center text-xl font-bold italic md:text-2xl">
          <span className="text-yellow-600">★</span> Paquete 4: Asada sabe mejor
          !
        </h3>
        <div className="flex items-center justify-end">
          <div className="flex flex-col text-right text-lg md:text-xl">
            <span>Orden de barbacoa asada</span>
            <span>1 agua de 500 ml</span>
          </div>
          <div className="mx-5 flex items-center">
            <svg width="40" height="40" viewBox="0 0 30 40" fill="none">
              <circle cx="10" cy="20" r="3.5" fill="#9E2253" />
              <path
                d="M18 5 A 15 15 0 0 1 18 35"
                stroke="#9E2253"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <span className="text-2xl font-bold md:text-3xl">$117</span>
        </div>
      </div>

      {/* Línea decorativa */}
      <div className="mb-3 w-full max-w-xs">
        <div className="h-0.5 w-full bg-main-pedritos" />
      </div>

      {/* Paquete 5 */}
      <div className="mb-6 w-full max-w-md text-custom-text">
        <h3 className="mb-2 text-center text-xl font-bold italic md:text-2xl">
          <span className="text-yellow-600">★</span> Paquete 5: Pa ´la familia
        </h3>
        <div className="flex items-center justify-end">
          <div className="flex flex-col text-right text-lg md:text-xl">
            <span>20 dorados</span>
            <span>2 aguas de 500 ml</span>
          </div>
          <div className="mx-5 flex items-center">
            <svg width="40" height="40" viewBox="0 0 30 40" fill="none">
              <circle cx="10" cy="20" r="3.5" fill="#9E2253" />
              <path
                d="M18 5 A 15 15 0 0 1 18 35"
                stroke="#9E2253"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <span className="text-2xl font-bold md:text-3xl">$366</span>
        </div>
      </div>
    </div>
  );
};

const TopPaquetes = () => {
  return (
    <Section yPadding="py-1">
      <div className="flex flex-col md:flex-row md:space-x-4 lg:space-x-12">
        <div className="flex-1">
          <h1 className="text-center text-4xl font-bold tracking-tight text-title-pedritos sm:text-6xl sm:tracking-tight lg:text-3xl xl:text-5xl xl:tracking-tight 2xl:text-[3.5rem]">
            Top
          </h1>
          <MenuTop />
          <h1 className="text-center text-4xl font-bold tracking-tight text-title-pedritos sm:text-6xl sm:tracking-tight lg:text-3xl xl:text-5xl xl:tracking-tight 2xl:text-[3.5rem]">
            Ordenes
          </h1>
          <MenuOrdenes />
        </div>
        <div className="flex-1">
          <h1 className="text-center text-4xl font-bold tracking-tight text-title-pedritos sm:text-6xl sm:tracking-tight lg:text-3xl xl:text-5xl xl:tracking-tight 2xl:text-[3.5rem]">
            Paquetes
          </h1>
          <MenuPaquetes />
        </div>
      </div>
    </Section>
  );
};

export { TopPaquetes };
