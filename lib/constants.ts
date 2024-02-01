export const TILE_SIZE = 16;

export const API_URL = "http://172.233.85.151:3000/ordinals/v1";
//  process.env.NEXT_PUBLIC_API_URL ?? "http://api.hiro.so/ordinals/v1";
  process.env.NEXT_PUBLIC_API_URL ?? "http://172.233.85.151:3000/ordinals/v1";

export const API_BETA_URL = process.env.NEXT_PUBLIC_API_BETA_URL ?? API_URL;
