import { Section } from "./section";  // Assure-toi que le nom du composant est en majuscule
import Button from './Button'; // Assure-toi d'importer le bouton

export const Header = () => {
  return (
    <header className="sticky top-0">
      <Section />  {/* Ajoute le composant Section ici */}
      <section className="flex items-baseline">
        <h1 className="text-4xl font-bold text-primary-foreground">
          isaac.com
        </h1>
        <div className="flex-1" />
        <ul>
          <Button className="text-6xl">Click Me</Button>  {/* Ajoute un texte pour tester */}
        </ul>
      </section>
    </header>
  );
};
