

export function loadVoiceflowWidget(document: Document): void {
    const scriptElement: HTMLScriptElement = document.createElement('script') as HTMLScriptElement; // Assertion de type
    const firstScriptElement: HTMLScriptElement = document.getElementsByTagName('script')[0] as HTMLScriptElement;

    scriptElement.onload = (): void => {
        if ('voiceflow' in window && window.voiceflow.chat && typeof window.voiceflow.chat.load === 'function') {
            window.voiceflow.chat.load({
                verify: { projectID: '65e0b5b24702aca0020f0441' },
                url: 'https://general-runtime.voiceflow.com',
                versionID: 'production'
            });
        }
    };

    scriptElement.src = "https://cdn.voiceflow.com/widget/bundle.mjs";
    scriptElement.type = "module"; // Mis à jour pour correspondre au type MIME du script
    firstScriptElement.parentNode?.insertBefore(scriptElement, firstScriptElement);
}

// Appeler la fonction

