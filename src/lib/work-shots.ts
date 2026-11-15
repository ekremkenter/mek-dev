// Screenshots for the projects that have something to show, used by the work
// cards on the home page and /projects/.
import mcpShot from "../assets/work/airline-mcp.jpg";
import assistantShot from "../assets/work/tkassistant.jpg";

export const workShots: Record<string, { src: ImageMetadata; alt: string }> = {
  "airline-mcp": {
    src: mcpShot,
    alt: "Claude showing Turkish Airlines flights from Istanbul to New York as interactive cards inside the conversation",
  },
  tkassistant: {
    src: assistantShot,
    alt: "TKAssistant on WhatsApp: a business-upgrade offer, the passenger's choice, and payment by miles, in one thread",
  },
};
