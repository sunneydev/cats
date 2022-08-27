import type { TResults, Uncertain, Vote } from "./types";

const API_ROUTE = import.meta.env.VITE_API_ROUTE;
const FILES_ROUTE = import.meta.env.VITE_FILES_ROUTE;

export async function getCats(): Promise<Uncertain<[string, string]>> {
  const res = await fetch(`${API_ROUTE}/cats`);

  const { images } = await res.json();

  return images;
}

export async function getResults(): Promise<Uncertain<TResults>> {
  const res = await fetch(`${API_ROUTE}/results`);

  return await res.json();
}

export async function vote(winner: string, loser: string) {
  await fetch(`${API_ROUTE}/vote/${winner}/${loser}`);
}

export function image(filename: string) {
  return `${FILES_ROUTE}/cats/${filename}`;
}
