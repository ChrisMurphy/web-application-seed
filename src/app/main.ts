import { enableProdMode }    from '@angular/core';
import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import '../theme/styles.scss';

let Raven = require('raven-js');

if (process.env.NODE_ENV === 'production') {
	console.log(process.env.SENTRY_KEY);
	Raven
		.config(process.env.SENTRY_KEY)
		.install();

	enableProdMode();
}

bootstrap(AppComponent);
