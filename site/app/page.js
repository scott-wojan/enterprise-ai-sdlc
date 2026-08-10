import { loadGuide } from "../lib/load-guide.js";
import GuideExperience from "../components/GuideExperience.js";

export default function Page() {
  return <GuideExperience guide={loadGuide()} />;
}
