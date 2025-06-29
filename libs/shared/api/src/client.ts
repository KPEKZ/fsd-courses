import { resource } from "@angular/core";
import { environment } from '@shared/config';

export const client = resource({
  loader: () => fetch(environment.API_URL)
});
