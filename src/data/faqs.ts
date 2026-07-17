import type { FAQ } from "./types";
import { getHomepageFaqs } from "./homepage";

export const extraFaqs: FAQ[] = [
  {
    question: "Where do cruise ships dock in Rotterdam?",
    answer:
      "Most cruise ships use the Wilhelminakade cruise terminal on Wilhelminapier. Exact berth assignments and pier logistics can vary by call, so check your ship's daily programme on arrival.",
  },
  {
    question: "How far is Rotterdam cruise port from the city centre?",
    answer:
      "Wilhelminapier sits across the river from the historic core, connected by Erasmusbrug and public transport. Nearby Kop van Zuid highlights are often walkable; Centraal and Markthal typically need a tram, metro, taxi or longer walk depending on your pace.",
  },
  {
    question: "Can I explore Rotterdam independently?",
    answer:
      "Yes. The city rewards independent exploring for architecture, markets and harbour views. Kinderdijk, Delft, The Hague and Gouda are better treated as planned transfers rather than casual walk-outs from the pier.",
  },
  {
    question: "How far is Kinderdijk from Rotterdam cruise port?",
    answer:
      "Kinderdijk is southeast of the city and usually needs about 30–45 minutes each way by road, depending on traffic and meeting point. It is not within walking distance of the terminal.",
  },
  {
    question: "Can I visit Kinderdijk and Delft in one port day?",
    answer:
      "Only on a comfortably long call with organised transport. Combining both as rushed stops often means seeing neither well — choose one regional focus or book a private route designed for the combination.",
  },
  {
    question: "Should I visit Amsterdam from a Rotterdam cruise call?",
    answer:
      "Usually no as a default. Amsterdam is a different city with significant transfer time. For most Rotterdam calls, Kinderdijk, Delft or a strong city day is a better use of limited hours. See our Amsterdam guidance page for the exceptions.",
  },
  {
    question: "Is Rotterdam cruise port busy with several ships at once?",
    answer:
      "Multiple ships can share the port on peak days. Expect busier taxis, water-taxi queues and popular sights around midday when that happens.",
  },
  {
    question: "What food should I try in Rotterdam?",
    answer:
      "Markthal is a practical cruise-day stop for Dutch and international snacks. Food walks and brewery experiences add structure if you prefer guided tasting over browsing alone.",
  },
  {
    question: "Should I book through the cruise line or independently?",
    answer:
      "Ship excursions offer the clearest protection if an organised tour is delayed. Reputable independent operators may offer smaller groups and clearer inclusions, but check their port-day experience, cancellation terms and return policy before booking.",
  },
  {
    question: "How much return-to-ship buffer should I allow?",
    answer:
      "For a city day, aim to be at the terminal 60–90 minutes before all-aboard. For Kinderdijk or regional towns, build in additional road and transfer contingency.",
  },
  {
    question: "Is Rotterdam accessible for limited mobility?",
    answer:
      "Many pier-area pavements and modern attractions are broadly manageable, but bridges, tram steps and historic town centres vary. Discuss specific needs with your operator before booking.",
  },
  {
    question: "What currency and language are used in Rotterdam?",
    answer:
      "The Netherlands uses the euro. Dutch is the local language, and English is widely understood in visitor-facing businesses. Cards are common; a little cash still helps for markets and small purchases.",
  },
];

export function getAllFaqs(): FAQ[] {
  return [...getHomepageFaqs(), ...extraFaqs];
}
