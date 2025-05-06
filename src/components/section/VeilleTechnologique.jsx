import React from "react";

function VeilleTechnologique() {
  return (
    <div className="min-h-screen bg-white text-gray-900 p-6 md:p-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">🧠 Veille Technologique – Intelligence Artificielle</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Pourquoi l’IA ?</h2>
          <p>
            L’Intelligence Artificielle est aujourd’hui au cœur des innovations numériques. Elle est utilisée dans
            de nombreux domaines comme les assistants vocaux, la santé, la finance ou encore l’automobile. 
            En tant que développeur, il est essentiel de suivre son évolution pour adapter nos pratiques.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Dernières évolutions (2024-2025)</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>IA générative :</strong> OpenAI (ChatGPT), Google (Gemini) et Anthropic (Claude) proposent des IA capables de générer du code, du texte et des images.</li>
            <li><strong>IA embarquée :</strong> Des puces IA (NPU) sont intégrées aux smartphones et objets connectés pour une meilleure autonomie et rapidité.</li>
            <li><strong>Régulation :</strong> L’Union Européenne a voté l’<a href="https://digital-strategy.ec.europa.eu/en/policies/european-approach-artificial-intelligence" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">AI Act</a> pour encadrer les usages de l’IA.</li>
            <li><strong>Low-code & IA :</strong> Des outils comme GitHub Copilot changent le rôle du développeur en assistant l’écriture du code.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Impact sur le métier de développeur</h2>
          <p>
            L’IA permet de coder plus rapidement, mais elle exige aussi de comprendre ses limites, ses biais, et ses risques.
            Le développeur doit désormais être capable d’utiliser des API d’IA, d’en comprendre les principes et de respecter les contraintes éthiques.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Sources consultées</h2>
          <ul className="list-disc list-inside text-blue-600 space-y-1">
            <li><a href="https://openai.com/blog" target="_blank" rel="noopener noreferrer">OpenAI Blog</a></li>
            <li><a href="https://www.actuia.com" target="_blank" rel="noopener noreferrer">ActuIA</a></li>
            <li><a href="https://www.journaldunet.com/business/dossier/1212767-intelligence-artificielle-definition-et-applications/" target="_blank" rel="noopener noreferrer">Journal du Net – IA</a></li>
            <li><a href="https://digital-strategy.ec.europa.eu/en/policies/european-approach-artificial-intelligence" target="_blank" rel="noopener noreferrer">AI Act – Commission Européenne</a></li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default VeilleTechnologique;
