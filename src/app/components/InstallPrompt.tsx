import React, { useEffect, useState } from "react";

const InstallPrompt: React.FC = () => {
    const [deferredPrompt, setDeferredPrompt] = useState<Event | null>(null);
    const [showInstallButton, setShowInstallButton] = useState(false);

    useEffect(() => {
        const handleBeforeInstallPrompt = (e: Event) => {
            e.preventDefault();
            setDeferredPrompt(e);
            setShowInstallButton(true);
            console.log("'beforeinstallprompt' event was fired.");
        };

        window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

        return () => {
            window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
        };
    }, []);

    const handleInstallClick = async () => {
        if (deferredPrompt) {
            (deferredPrompt as any).prompt();
            const choiceResult = await (deferredPrompt as any).userChoice;
            console.log(`User response to the install prompt: ${choiceResult.outcome}`);
            setDeferredPrompt(null);
            setShowInstallButton(false);
        }
    };

    return (
        <div>{showInstallButton && <button onClick={handleInstallClick}>Install App</button>}</div>
    );
};

export default InstallPrompt;
