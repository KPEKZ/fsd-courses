import { resource } from "@angular/core";

export const client = resource({
  loader: () => fetch('')
});
