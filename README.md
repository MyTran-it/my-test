# Choix techniques
J'ai choisi la version 5 (newest version) de Svelte. Car je pense vos projets sont récent donc votre choice de Svelte est probablement la dernière version aussi.

Je savais que il y a eu des gros changement mais au final je trouve qu'elle a beaucoup beaucoup changé (positif ou négative je ne peux pas évaluer via ce mini test). 

A côté de ça, j'ai choisi le TypeScript car vous avez mentionné dans l'entretien. En fait mon ancien boite n'utilise pas TypeScript parce que la majorité n'aime pas le TypeScript. Je voudrais donc appliquer le TypeScript pour me challenger. 

Je n'ai pas utilisé un framework de style car vous avez mentionné que le design n'est pas important et que qu'il y a que quelques composants, SCSS me suffit bien pour compléter ce test.

# Problèmes rencontrés
Changement de version entre 4 et 5, il y a beaucoup de APIs dépreciés (genres les props, watcher $: statement, dispatch event, etc). Grâce au documentation de Svelte, c'était pas si compliqué au final.

Configuration de TypeScript, certains parties j'ai du mal à préciser le type de l'élément. J'ai pu initialiser pour les cas simples. Pour les cas complexes j'ai mis "any" pour bypass le warning (même si c'est pas top).  

La logique de algorithme, j'ai essayé au début de réaliser l'algorithme qui calcule les possibilités, mais j'arrive pas à calculer tous les possibilités, et ça m'a pris beaucoup de temps. J'ai du m'inspirer sur l'internet pour arriver à une solution qui me semble correct (getPossibility2()). 
C'est pas très optimisé en performance, la limit de score chez mon pc était 40, 50 possible mais c'est plus lent...

J'ai rencontré une problème avec le "Dispatch event" maintenant c'est déprécié et remplacé par "$host()" avec une utilisation différent (J'ai essayé de l'utiliser dans "possibility.svelte" sur le button undo/reset). Le problème est pareil que trouvé cet issue (le style de button n'est pas appliqué __ https://github.com/sveltejs/svelte/issues/15213). J'arrive pas à le résoudre donc j'ai passé simplement une fonction dans "$props()", et ça a l'aire marché sans problème. 

# Notes final
Depuis la fin de mon contrat, j'ai constaté que le marché propose des offres sur React et Vue, rarement Svelte. Donc j'ai passé du temps pour me former sur les autres technologies. 

