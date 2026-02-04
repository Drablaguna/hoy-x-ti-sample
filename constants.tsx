import { SuccessStory, BenefitEvent, Partner } from "./types";

export const HERO_IMAGES = [
	{
		url: "https://images.unsplash.com/photo-1565499110650-e298c6be8c01?auto=format&fit=crop&q=80&w=1600",
		alt: "Malabarista en acción",
	},
	{
		url: "https://images.unsplash.com/photo-1640217172525-c9347c65f40a?auto=format&fit=crop&q=80&w=1600",
		alt: "Bailarina profesional",
	},
	{
		url: "https://images.unsplash.com/photo-1645287642975-fb04fa89347a?auto=format&fit=crop&q=80&w=1600",
		alt: "Acróbata realizando una maniobra",
	},
	{
		url: "https://images.unsplash.com/photo-1601908911032-0009e7c77c5c?auto=format&fit=crop&q=80&w=1600",
		alt: "Malabarista de fuego",
	},
];

export const SUCCESS_STORIES: SuccessStory[] = [
	{
		id: "1",
		name: "Elena Vance",
		discipline: "Bailarina Principal",
		image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&q=80&w=800",
		quote: "Hoy Por Ti no solo pagó mis cuentas; salvó mi identidad como artista.",
		story: "Después de una grave lesión en el tendón de Aquiles, Elena enfrentó seis meses de rehabilitación. Gracias a un concierto a beneficio de sus colegas, sus costos médicos fueron cubiertos totalmente.",
	},
	{
		id: "2",
		name: "Marcus Thorne",
		discipline: "Saxofonista de Jazz",
		image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=800",
		quote: "El reflector nunca se apagó, incluso cuando estaba en la cama del hospital.",
		story: "Marcus luchó contra una enfermedad respiratoria repentina. La comunidad organizó un festival de jazz digital que recaudó $25,000 USD para su tratamiento especializado.",
	},
	{
		id: "3",
		name: "Sarah Jenkins",
		discipline: "Actriz de Teatro",
		image: "https://images.unsplash.com/photo-1503023345030-a79b9bd421b7?auto=format&fit=crop&q=80&w=800",
		quote: "La dignidad es la mejor medicina. Me sentí apoyada, no compadecida.",
		story: "Un accidente en el escenario dejó a Sarah temporalmente incapacitada para actuar. Los apoyos del fondo le permitieron enfocarse por completo en su terapia física.",
	},
];

export const UPCOMING_EVENTS: BenefitEvent[] = [
	{
		id: "e1",
		title: "Ritmo para la Recuperación",
		artist: "El Ensamble Metropolitano",
		date: "24 Oct, 2026 • 19:00",
		location: "Teatro de la Ópera Esmeralda",
		price: "$150 MXN",
		image: "https://images.unsplash.com/photo-1640217172525-c9347c65f40a?auto=format&fit=crop&q=80&w=1600",
	},
	{
		id: "e2",
		title: "Soliloquios de Fortaleza",
		artist: "Varios Artistas",
		date: "02 Nov, 2026 • 20:30",
		location: "Salón Dorado, Roma Norte",
		price: "$100 MXN",
		image: "https://images.unsplash.com/photo-1645287642975-fb04fa89347a?auto=format&fit=crop&q=80&w=1600",
	},
	{
		id: "e3",
		title: "Subasta Benéfica Colores que Curan",
		artist: "Colectivo de Artes Visuales",
		date: "15 Nov, 2026 • 18:00",
		location: "Galería de Arte Moderno",
		price: "$200 MXN",
		image: "https://images.unsplash.com/photo-1601908911032-0009e7c77c5c?auto=format&fit=crop&q=80&w=1600",
	},
];

export const PARTNERS: Partner[] = [
	{ name: "Public Market", logo: "https://cdn-icons-png.flaticon.com/512/3220/3220671.png" },
	{ name: "Central de Danza", logo: "https://cdn-icons-png.flaticon.com/512/3063/3063822.png" },
	{ name: "Dance for Fun", logo: "https://cdn-icons-png.flaticon.com/512/2966/2966327.png" },
];
