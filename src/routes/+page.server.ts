import { fail } from "@sveltejs/kit";

import type { Actions } from './$types';
export const actions = {
  default: async (event) => {
    const data = await event.request.formData();
    const scoreTeam1 = data.get("score1");
    const scoreTeam2 = data.get("score2");

    try {
      const possibility1 = getPossibility2(scoreTeam1);
      const possibility2 = getPossibility2(scoreTeam2);

      return { possibility1, possibility2, success: true };
    } catch (err: any) {
      return fail(400, { message: err.message, success: false });
    }
  },
} satisfies Actions;

function getPossibility(score: number) {
  const rules = {
    touchdown: { text: "Touchdown", value: 6 },
    fieldGoal: { text: "Field goal", value: 3 },
    pat: { text: "PAT", value: 1 },
  };

  let result: Array<Array<string>> = [];
  let text: Array<string> = [];

  if (score === 0) return;

  while (score > 0) {
    if (score >= rules.touchdown.value) {
      score -= rules.touchdown.value;
      text.push(rules.touchdown.text);

      if (score % 6 === 1) {
        score -= rules.pat.value;
        text.push(rules.pat.text);
      }
    } else if (score >= rules.fieldGoal.value) {
      score -= rules.fieldGoal.value;
      text.push(rules.fieldGoal.text);
    } else if (score <= 2) {
      throw Error("impossible");
    }
  }

  result.push(text);

  return result;
}

function getPossibility2(score: any) {
  const results: Array<Array<string>> = [];

  function findScore(remainingScore: number, currentPossibility: Array<string>) {
    if (remainingScore === 0) {
      results.push([...currentPossibility]);
      return;
    }

    // Touchdown
    if (remainingScore >= 6) {
      currentPossibility.push("Touchdown");
      findScore(remainingScore - 6, currentPossibility);
      currentPossibility.pop();

      // Touchdown then PAT
      if (remainingScore >= 7) {
        currentPossibility.push("Touchdown, PAT");
        findScore(remainingScore - 7, currentPossibility);
        currentPossibility.pop();
      }
    }

    // Field Goal
    if (remainingScore >= 3) {
      currentPossibility.push("Field Goal");
      findScore(remainingScore - 3, currentPossibility);
      currentPossibility.pop();
    }
  }

  findScore(score, []);
  return results;
}
