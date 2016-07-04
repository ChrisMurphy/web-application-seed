import { enableProdMode }    from '@angular/core';
import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import '../theme/styles.scss';

// TODO: Change once NG2 sentry package is viable
declare var Raven;

if (process.env.NODE_ENV === 'production') {
	Raven
		.config(process.env.SENTRY_KEY)
		.install();

	enableProdMode();
}

bootstrap(AppComponent);
