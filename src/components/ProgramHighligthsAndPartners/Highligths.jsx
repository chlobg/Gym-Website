const partners = [
  {
    id: 1,
    logo: "https://gym-store.axiomthemes.com/wp-content/uploads/2023/10/client-1-copyright.png",
    alt: "Asics",
  },
  {
    id: 2,
    logo: "https://gym-store.axiomthemes.com/wp-content/uploads/2023/10/client-2-copyright.png",
    alt: "Nike",
  },
  {
    id: 3,
    logo: "https://gym-store.axiomthemes.com/wp-content/uploads/2023/10/client-3-copyright.png",
    alt: "BeFibre",
  },
  {
    id: 4,
    logo: "https://gym-store.axiomthemes.com/wp-content/uploads/2023/10/client-3-copyright.png",
    alt: "NY",
  },
  {
    id: 5,
    logo: "https://gym-store.axiomthemes.com/wp-content/uploads/2023/10/client-5-copyright.png",
    alt: "Hellma",
  },
  {
    id: 6,
    logo: "https://gym-store.axiomthemes.com/wp-content/uploads/2023/10/client-6-copyright.png",
    alt: "Reebok",
  },
];

const ImageEffect = ({ img1, img2, displacement }) => (
  <div className="relative group w-full h-[200px] overflow-hidden rounded-lg shadow-lg">
    <img
      src={img1}
      alt=""
      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
    />
    <img
      src={img2}
      alt=""
      className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out"
    />
    <img
      src={displacement}
      alt=""
      className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-30 pointer-events-none"
    />
  </div>
);

const Highlights = () => {
  return (
    <section
      className="text-white py-16 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://gym-store.axiomthemes.com/wp-content/uploads/2023/10/bg-1.png')",
      }}
    >
      <div className="container mx-auto px-6 lg:px-16">
        {/* Haut : 2 colonnes */}
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Colonne gauche */}
          <div className="flex-1 relative group w-full h-[450px] overflow-hidden rounded-lg shadow-lg">
            <img
              src="https://gym-store.axiomthemes.com/wp-content/uploads/elementor/thumbs/img-003-copyright-qg42iv6cvv2u61r2sad1equ4kzejedkp1jzd3fnip2.jpg"
              alt="Program Highlight"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <img
              src="https://gym-store.axiomthemes.com/wp-content/uploads/2023/10/img-061-copyright.jpg"
              alt="Program Highlight Hover"
              className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out"
            />
            <img
              src="https://gym-store.axiomthemes.com/wp-content/plugins/trx_addons/addons/image-effects/images/8.jpg"
              alt="Displacement Effect"
              className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-30 pointer-events-none"
            />
          </div>

          {/* Colonne droite */}
          <div className="flex-1 flex flex-col gap-6">
            {/* Texte */}
            <div>
              <p className="uppercase text-sm tracking-widest text-gray-300 mb-3">
                Welcome to the gym
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Forge your fitness: <br /> gym and crossfit adventures
              </h2>
              <p className="text-gray-200 leading-relaxed mb-8">
                Adipiscing elit, sed do eiusmod tempor incididunt labore dolore
                magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation.
              </p>
            </div>

            {/* Une seule image avec effet comme à gauche */}
            <div className="relative group w-full h-[300px] overflow-hidden rounded-lg shadow-lg">
              {/* Image principale */}
              <img
                src="https://gym-store.axiomthemes.com/wp-content/uploads/elementor/thumbs/img-004-copyright-qg42iv6e83pmp5jan5wd966i1yqmuefwug7johmmhq.jpg"
                alt="Program Highlight Right"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              {/* Image secondaire */}
              <img
                src="https://gym-store.axiomthemes.com/wp-content/uploads/2020/03/img-020-copyright.jpg"
                alt="Program Highlight Right Hover"
                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out"
              />
              {/* Displacement */}
              <img
                src="https://gym-store.axiomthemes.com/wp-content/plugins/trx_addons/addons/image-effects/images/8.jpg"
                alt="Displacement Effect"
                className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-30 pointer-events-none"
              />
            </div>
          </div>
        </div>

        {/* Bas : Logos partenaires */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6 items-center">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="flex justify-center opacity-70 hover:opacity-100 transition"
            >
              <img
                src={partner.logo}
                alt={partner.alt}
                className="max-h-10 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
