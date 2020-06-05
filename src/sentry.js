import * as Sentry from '@sentry/browser'
import { Integrations as ApmIntegrations } from '@sentry/apm'

if (typeof window !== 'undefined' && window._sentry_init !== true) {
  Sentry.init({
    dsn: 'https://bcd3987e16134a43a881fa7a3d9249bd@o395694.ingest.sentry.io/5265219',
    integrations: [
      new ApmIntegrations.Tracing(),
    ],
    tracesSampleRate: 0.25,
  })
  window._sentry_init = true
}
