import cottage from "@/images/white-petals-resort-bangalore-resorts-zdaxj824ou.avif";
import aerial from "@/images/images (1).jpeg";
import poolHall from "@/images/877670168.jpg";
import poolNight from "@/images/white-petal-dandeli2.webp";
import cabanas from "@/images/1693982677_brahmi_wellness_retreat__5_.avif";
import roomBlock from "@/images/images.jpeg";
import signage from "@/images/white-petals-resort-bangalore-resorts-hsabq9avzl.avif";

export const media = {
  cottage: {
    src: cottage,
    alt: "Wooden cottage at White Petals Resort framed by coconut palms and open lawns",
    category: "property",
  },
  aerial: {
    src: aerial,
    alt: "Aerial view of the White Petals Resort property showing cottages, tree cover and open grounds",
    category: "property",
  },
  poolHall: {
    src: poolHall,
    alt: "The swimming pool at White Petals Resort lit at night beside the glass event hall",
    category: "activities",
  },
  poolNight: {
    src: poolNight,
    alt: "Illuminated swimming pool surrounded by trees at White Petals Resort after dark",
    category: "activities",
  },
  cabanas: {
    src: cabanas,
    alt: "Curtained poolside cabanas glowing in the evening at White Petals Resort",
    category: "activities",
  },
  roomBlock: {
    src: roomBlock,
    alt: "Guest room block at White Petals Resort with private balconies at dusk",
    category: "rooms",
  },
  signage: {
    src: signage,
    alt: "White Petals Hotels entrance signboard at Nagadenahalli, Doddaballapur Taluk",
    category: "property",
  },
};

export const galleryItems = [
  media.cottage,
  media.aerial,
  { ...media.poolHall },
  media.roomBlock,
  media.poolNight,
  media.cabanas,
  { ...media.cottage, category: "nature", alt: media.cottage.alt },
  media.signage,
];

export const contact = {
  name: "White Petals Resort",
  address:
    "1 Sy No. 104, Nagadenahalli, Doddaballapur Taluk, Bengaluru, Karnataka 561205",
  phones: ["+91 72044 64404", "+91 72044 94404"],
  emails: ["reservations@whitepetalshotels.com", "info@whitepetalshotels.com"],
  mapsQuery:
    "White+Petals+Hotels+Nagadenahalli+Doddaballapur+Taluk+Bengaluru+561205",
};
