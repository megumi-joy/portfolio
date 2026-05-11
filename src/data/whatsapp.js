/**
 * WhatsApp CTA configuration — contextual prefill messages by lobby/context.
 */
export const WA_NUMBER = '34605748052';

export const WA_PREFILLS = {
    hub: 'Hola%20Anton%2C%20vengo%20de%20tu%20portfolio.%20Quiero%20saber%20m%C3%A1s.',
    empresas: 'Hola%20Anton%2C%20vengo%20de%20tu%20portfolio.%20Tengo%20un%20negocio%20en%20%5Bsector%5D%20y%20quiero%20explorar%20c%C3%B3mo%20podr%C3%ADamos%20automatizar%20%5Bproceso%5D.%20%C2%BFTienes%2015%20min%20esta%20semana%3F',
    auditoria: 'Hola%20Anton%2C%20me%20interesa%20una%20auditor%C3%ADa%20estrat%C3%A9gica%20de%20mi%20operaci%C3%B3n.%20%C2%BFC%C3%B3mo%20funciona%3F',
    abaf: 'Hola%20Anton%2C%20me%20interesa%20ABAF.%20Quiero%20saber%20pricing%20y%20c%C3%B3mo%20empezar.',
    voicey_access: 'Hola%20Anton%2C%20quiero%20acceso%20anticipado%20a%20Voicey.%20Mi%20caso%20de%20uso%3A%20%5Bdescribir%5D.',
    voicey_pricing: 'Hola%20Anton%2C%20me%20interesa%20Voicey%20a%20nivel%20%5Bindividual%2Fequipo%2Fempresa%5D.%20H%C3%A1blame%20de%20pricing.',
    games_invest: 'Hola%20Anton%2C%20me%20interesa%20colaborar%20o%20invertir%20en%20alguno%20de%20tus%20proyectos.%20Hablemos.',
    games_pitch: 'Hola%20Anton%2C%20vengo%20del%20portfolio.%20Me%20interesa%20tu%20trabajo%20en%20game%20dev.%20%C2%BFPuedes%20enviarme%20pitch%20deck%3F',
};

export function waLink(context = 'hub') {
    const text = WA_PREFILLS[context] || WA_PREFILLS.hub;
    return `https://wa.me/${WA_NUMBER}?text=${text}`;
}
