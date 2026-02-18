import BabySchema from './BabySchema';
import ShapeLanguage from './ShapeLanguage';
import SquashStretch from './SquashStretch';
import CallbacksWeb from './CallbacksWeb';
import HeroJourney from './HeroJourney';
import MirrorNeurons from './MirrorNeurons';
import Silhouettes from './Silhouettes';

export const illustrations: Record<string, React.FC> = {
  '/illustrations/baby-schema.png': BabySchema,
  '/illustrations/shape-language.png': ShapeLanguage,
  '/illustrations/silhouette-test.png': Silhouettes,
  '/illustrations/squash-stretch.png': SquashStretch,
  '/illustrations/callbacks-web.png': CallbacksWeb,
  '/illustrations/hero-journey.png': HeroJourney,
  '/illustrations/mirror-neurons.png': MirrorNeurons,
};
