import { loadRemoteModule } from '@angular-architects/module-federation';

async function bootstrap() {
  const headerModule = await loadRemoteModule({
    remoteEntry: 'http://localhost:4201/remoteEntry.js',
    remoteName: 'header',
    exposedModule: './HeaderModule'
  });

  const { HeaderModule } = headerModule;

  // Here you can use the HeaderModule as needed
}

bootstrap();